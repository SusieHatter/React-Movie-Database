import styled from "styled-components";

export const Container = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  h3 {
    margin: 5px 0 0 0;
  }
  p {
    margin: 3px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
`;
