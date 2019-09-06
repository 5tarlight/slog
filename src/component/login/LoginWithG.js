import React from 'react'
import styled from 'styled-components'

const GLogo = styled.img`
  margin-right: 1rem;
  float: left;
`

const GWrapper = styled.div`
  background-color: white;
  height: 50px;
  padding: 1rem;
  line-height: 50px;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`

const logoURL = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'

const LoginWithG = () => (
  <GWrapper>
    <GLogo src={logoURL} alt='G' width={50} />
    Google 로그인
  </GWrapper>
)

export default LoginWithG
