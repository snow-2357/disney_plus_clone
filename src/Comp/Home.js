import React from "react";

import styled from "styled-components";

import ImgSlider from "./ImgSlider";

import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      home
      <ImgSlider></ImgSlider>
      <Viewers />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: 100vh;
  padding: 0 3.5vw;
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    z-index: -1;
  }
`;
