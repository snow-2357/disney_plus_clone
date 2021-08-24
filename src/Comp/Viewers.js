import React from "react";
import styled from "styled-components";
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0 26px;
`;
const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  transition : all 250ms cubic-bezier(.17,.67,.3,.83);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.5);
    box-shadow: rgb(0, 0, 0) 1px 25px 35px -10px;
  }
`;