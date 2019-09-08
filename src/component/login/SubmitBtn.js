import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  float: right;
  text-justify: center;
  text-align: center;
  background: rgb(100, 100, 100);
  color: white;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }

  p {
    
  }
`

const SubmitBtn = ({ children }) => (
  <Button><p>{children || '로그인'}</p></Button>
)

export default SubmitBtn
