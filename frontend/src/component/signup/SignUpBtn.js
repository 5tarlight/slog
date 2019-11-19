import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  float: right;
  text-justify: center;
  text-align: center;
  background: rgb(100, 100, 100);
  color: white;
  line-height: 156px;
  
  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`

const SignUpBtn = ({ onClick, children, disabled }) => (
  <Button disabled={disabled} onClick={onClick}><p>{children || '회원가입'}</p></Button>
)

export default SignUpBtn
