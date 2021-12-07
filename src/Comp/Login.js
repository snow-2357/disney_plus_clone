import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            
            <Main>
              <Logo1 src="/images/cta-logo-one.svg"></Logo1>
              <Signup>Get the Disney bundel</Signup>
              <h5>Stream now.  <spam>Terms apply.</spam></h5>
              <Logo2 src="/images/cta-logo-two.png"></Logo2>
              <a href="/"><h3><spam>Sign up for Disney+ only.</spam></h3></a>
              
            </Main>
        </Container>
    )
}

export default Login;

const Container = styled.div`
  position: relative;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const Main = styled.div`
  text-align: center;
  max-width: 640px;
  padding: 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  h3{
    padding: 7px;
    spam{
        //border-bottom: 1px solid white;
    }
  }
  h5{
    font-size:8px;
    spam{
        border-bottom: 1px solid white;
    }
  }
`;
const Logo1 = styled.img``;

const Signup = styled.a`
  margin-top: 15px;
  width: 100%;
  background-color: #0c4794;
  font-weight: bold;
  padding: 16px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(.08,1.16,.52,.61);
  &:hover{
    
    background-color: #006efe;
  }
`;

const Logo2 = styled.img``;