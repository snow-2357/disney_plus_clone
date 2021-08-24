import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
      <Container>
        <h4> Recomended for You </h4>
        <Content>

          <Wrap >
            <img src="/images/xxx.png" alt="" />
          </Wrap>

          <Wrap>
            <img
              src="https://sm.ign.com/t/ign_za/review/s/spider-man/spider-man-far-from-home-review_2bsb.1024.jpg"
              alt=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://sm.ign.com/t/ign_za/review/s/spider-man/spider-man-far-from-home-review_2bsb.1024.jpg"
              alt=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://sm.ign.com/t/ign_za/review/s/spider-man/spider-man-far-from-home-review_2bsb.1024.jpg"
              alt=""
            />
          </Wrap>
        </Content>
      </Container>
    );
}

export default Movies;


const Container=styled.div`

`;
const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-bottom:50px ;
`;
const Wrap = styled.div`
cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition : all 50ms cubic-bezier(.17,.67,.3,.83);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    /* transform: scale(1.0); */
    border-color: rgba(249, 249, 249, 0.6);
    box-shadow: rgb(249, 249, 249, 0.1) 0px 20px 30px -10px;
    
  }
`;