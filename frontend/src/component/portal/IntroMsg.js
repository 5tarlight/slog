import React from 'react'
import styled from 'styled-components'

const Intro = styled.div`
  border: none;  
  top: 40%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -40%);
  justify-content: center;
  text-align: center;
  color: white;

  h1 {
    font-size: 75px;
  }

  h3 {
    font-size: 35px;
  }

  h5 {
    font-size: 27px;
  }
`

const IntroMsg = () => (
  <Intro>
    <h1>SLog</h1>
    <h3>개발자분들!</h3>
    <h5>지금 개발자들을 위한 블로그를 이용해보세요!</h5>
  </Intro>
)

export default IntroMsg
