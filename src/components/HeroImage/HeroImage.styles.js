import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;
  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);
  h1 {
    font-size: var(--fontBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
  p {
    font-size: var(--fontReg);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
