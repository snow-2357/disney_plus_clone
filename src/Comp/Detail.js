import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <BG>
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg"
                    alt=""
                    srcset=""
                />
            </BG>
            <ImageTitle>
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/deamnp5-8307c6fb-c9f3-4d96-9ba5-28cc9b960d33.png/v1/fill/w_1028,h_777,strp/disney_pixar_s_luca_logo_png_by_mintmovi3_deamnp5-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY4IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZWFtbnA1LTgzMDdjNmZiLWM5ZjMtNGQ5Ni05YmE1LTI4Y2M5Yjk2MGQzMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JNuFL0_Jc25767YCsG39LuOECSLYHbf_TRmVRnUUcn0"
                    alt=""
                    srcset=""
                />
            </ImageTitle>
            <Controls>
                <PlayBtn>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerBtn>
                <AddBtn><span>+</span></AddBtn>
                <GroupAdd><img src="/images/group-icon.png" alt="" srcset="" /></GroupAdd>
            </Controls>
        </Container>
    );
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 0 25px;
`;
const BG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img{
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
`;
const ImageTitle = styled.div`
height: 30vh;
min-height: 150px;
width: 35vw;
min-width: 200px;
    img{
        
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;
const Controls = styled.div`
    display: flex;
    align-items: center;

`;

const PlayBtn = styled.button`
  cursor: pointer;
  border-radius: 5px;
  font-size: 17px;
  height: 55px;
  padding: 0px 25px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border: none;
  span {
    color: rgb(0, 0, 0);
    letter-spacing: 1.5px;
  }
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerBtn = styled(PlayBtn)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(249, 249, 249);

  span {
    color: rgba(249, 249, 249);
  }
`;
const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);

  span {
    font-size: 30px;
    color: white;
  }
  &:hover {
    background-color: rgb(249, 249, 249, 0.3);
  }
`;

const GroupAdd = styled(AddBtn)`
  background-color: rgba(0, 0, 0, 0.7);
`;

