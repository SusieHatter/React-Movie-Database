import React from "react";
// Styles
import { Container, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => (
  <Container image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Container>
);

export default HeroImage;
