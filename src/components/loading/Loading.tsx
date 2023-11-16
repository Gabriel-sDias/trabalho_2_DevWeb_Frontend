import React from "react";
import { Container, Loader } from "./LoadingStyled";
//componente que representa o carregamento de alguma operação
export default function LoadingSpinner() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}
