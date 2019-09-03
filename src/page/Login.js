import React from 'react'
import { MenuWrapper, ImageBackground, Input } from '../component'

const Login = () => (
  <>
    <ImageBackground />
    <MenuWrapper>
      <Input type='email' placeholder='이메일' />
      <Input type='password' placeholder='비밀번호' />
    </MenuWrapper>
  </>
)

export default Login
