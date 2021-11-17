import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --offWhite: #E9EBEC;
    --darkGrey: #1c1c1c;
    --fontBig: 2.5rem;
    --fontMed: 1.5rem;
    --fontReg: 1.2rem;
    --fontSmall: 1rem
  }

  *{
    box-sizing: border-box;
    font-family: 'Abel', sans-seriff;
  }

  body{
    padding: 0;
    margin: 0;
    background-color: var(--offWhite);

    h1{
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3{
      font-size: 1.1rem;
      font-weight: 600
    }

    p{
      font-seize: 1rem;
      color: var(--white);
    }
  }
`;
