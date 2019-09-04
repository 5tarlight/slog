import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  float: right;
  text-justify: center;
  text-align: center;
  line-height: 6.5rem;
  background: rgb(100, 100, 100);
  color: white;

  &:hover {
    cursor: pointer;
  }
`

const SubmitBtn = () => (
  <Button>로그인</Button>
)

export default SubmitBtn