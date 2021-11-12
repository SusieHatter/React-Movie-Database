import React from "react";
// Styles
import { Container } from "./Button.styles";

const Button = ({ text, callback }) => (
  <Container type="button" onClick={callback}>
    {text}
  </Container>
);

export default Button;
