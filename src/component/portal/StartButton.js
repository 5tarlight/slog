import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  border: solid black 1px;
  width: 10rem;
  height: 4rem;
  border-radius: 0.5rem;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`

const handleClick = (e) => {
  e.preventDefault()
}

const style = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  fontWeight: 'bold'
}

const StartButton = () => (
  <Button onClick={handleClick}>
    <Link to={'/login'} style={style}>시작하기</Link>
  </Button>
)

export default StartButton