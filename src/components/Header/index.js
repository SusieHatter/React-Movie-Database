import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Container, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Container>
    <Content>
      <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Container>
);

export default Header;
