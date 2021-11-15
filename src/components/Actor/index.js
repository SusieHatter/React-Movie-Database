import React from "react";
import PropTypes from "prop-types";
// Styles
import { Container, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => (
  <Container>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Container>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
