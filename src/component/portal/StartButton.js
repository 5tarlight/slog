import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  border: none;
  width: 20rem;
  height: 8rem;
  border-radius: 0.5rem;
  background-color: white;  
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  justify-content: center;
  border: 1px solid grey;

  &:hover {
    cursor: pointer;
  }
`

const style = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1.5rem',
  fontWeight: 'bold'
}

const StartButton = () => (
  <Link to='/login'>
    <Button renderAs='button'>
      <span style={style}>시작하기</span>
    </Button>
  </Link>
)

export default StartButton
