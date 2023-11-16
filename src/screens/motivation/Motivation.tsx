import {
  MotivationBodyDiv,
  TextTest,
  ContentViewDiv,
  ViewDiv,
} from "./MotivationStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
//tela explicando as motivações do projeto
export function Motivation() {
  return (
    <MotivationBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <TextTest>
            O segundo projeto de Dev Web eu decidi trabalhar com manipulação de
            imagem e videos, com isso veio a ideia de fazer um mini Youtube,
            onde eu peguei uma pequena parte das funcionalidades e implementei
            no meu projeto.
          </TextTest>
          <TextTest>
            Frontend: A ideia inicial no frontend era uma pagina inicial onde
            teria os videos ja cadastrados no meu banco de dados, com isso eu
            implementei mais algumas funcionalidades como cadastrar um video
            novo, alterar a thumbnail do video ou o titulo do video, exlcuir um
            video cadastrado, exibir todos os videos cadastrados, exibir todos
            os videos cadastrados pelo usuario principal e um filtro de pesquisa
            pelo titulo do video. Eu optei por não implementar a parte de
            cadastro de usuario por motivo de tempo mesmo, seria até tranquilo
            de fazer mas tomaria mais tempo, com isso eu simulei um id estatico
            de um usuario, com isso todo video tem um autor.{"\n"}
          </TextTest>
          <TextTest>
            Backend: A ideia inicial do backend era suprir as funcionalidades
            que eu idealizei para o frontend, com isso eu criei uma tabela de
            videos que recebe os dados necessarios para construir a aplicação no
            frontend. Para armazenamento dos dados eu usei dois endpoint, um
            banco relacional para os objetos criados dentro da aplicação e um
            bucket para armazenar os videos e imagens. O banco relacional eu
            manipulo no backend mas o bucket eu manipulo apenas no frontend,
            então toda requisição que precisa subir/atualizar um video/imagem eu
            envio o arquivo para o bucket e depois armazeno a url correspondente
            no banco relacional.
          </TextTest>
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
