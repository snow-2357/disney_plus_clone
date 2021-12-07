import React from "react";
import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";
function Viewers() {
  return (
    <Container>
      <Wrap>
        <HoverVideoPlayer videoClassName="video" videoSrc="/videos/pixer.mp4" />
      </Wrap>
      <Wrap>
        <HoverVideoPlayer
          videoClassName="video"
         
          videoSrc="/videos/disney.mp4"
          // pausedOverlay={

          //     // <img src="/images/viewers-disney.png" alt="" />
          // }
        />
      </Wrap>

      <Wrap>
        <HoverVideoPlayer videoClassName="video" videoSrc="/videos/marvel.mp4" />
      </Wrap>
      <Wrap>
        <HoverVideoPlayer videoClassName="video" videoSrc="/videos/ngeo.mp4" />
      </Wrap>
      <Wrap>
        <HoverVideoPlayer videoClassName="video" videoSrc="/videos/starwar.mp4" />
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
  height: 97%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  transition: all 250ms cubic-bezier(0.17, 0.67, 0.3, 0.83);

  /* img {
    position: relative;
    
  } */
  .video {
    border-radius: 8px;

    object-fit: cover;
   
   
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.5);
    box-shadow: rgb(0, 0, 0) 1px 25px 35px -10px;
  }
`;

