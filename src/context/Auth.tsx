import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../service/api";
import { Navigate, useNavigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}
interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: object | null;
  signIn: any;
  signOut: any;
}
interface data {
  email: string;
  password: string;
}
const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigate();
  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);
      const storageUser = await localStorage.getItem("@BRAuth:user");
      const storageToken = await localStorage.getItem("BRAuth:token");

      if (storageUser && storageToken) {
        api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
    loadStorageData();
  }, []);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await api
      .post("/user/Auth", {
        email,
        password,
      })
      .then(async (response) => {
        await setUser(response.data);
        api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
        await localStorage.setItem(
          "@BRAuth:user",
          JSON.stringify(response.data)
        );
        await localStorage.setItem("BRAuth:token", response.data.result.token);
        setLoading(false);
        navigation("/");
      })
      .catch(async (error) => {
        setLoading(false);
        console.log(error.response);
      });
  };

  function signOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, loading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
