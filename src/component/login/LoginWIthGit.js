import React from 'react'
import styled from 'styled-components'
import github from './github.svg'

const Logo = styled.img`
  margin-right: 1rem;
  float: left;
`

const Wrapper = styled.div`
  background-color: #e9ecef;
  height: 50px;
  padding: 1rem;
  line-height: 50px;
  font-weight: bolder;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
  }
`

const LoginWithGit = () => (
  <Wrapper>
    <Logo src={github} alt='Github' width={50} />
    Github 로그인
  </Wrapper>
)

export default LoginWithGit
