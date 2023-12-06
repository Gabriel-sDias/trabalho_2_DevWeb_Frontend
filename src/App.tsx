import React from "react";

import "./App.css";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./context/Auth";
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
