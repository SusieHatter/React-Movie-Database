import React from "react";
//styles
import { Container, Content } from "./Grid.styles";

const Grid = ({ header, children }) => (
  <Container>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Container>
);

export default Grid;
