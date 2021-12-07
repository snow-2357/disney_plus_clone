import React from 'react'
import styled from 'styled-components'
import Movie from './Movie';

function Movies() {

  

  let numbers=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8}];
    return (
      <Container>
        <h4> Recomended for You </h4>
        <Content>
          {numbers.map(num=>
            <Movie key={num.key} number={num.key}/> 
          )}
          
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
