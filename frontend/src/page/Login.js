import React from 'react'
import {
  MenuWrapper,
  ImageBackground,
  Input,
  SubmitBtn,
  Divider,
  LoginWithG,
  LoginWithGit,
  WithoutLogin,
  Option
} from '../component'
import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 80%;
  height: 100%;
  float: left;
`

const ButtonWrapper = styled.div`
  width: 19%;
  height: 100%;
  float: right;
`

const FormWrapper = styled.div`
  width: 100%;
  height: 6.5rem;
`

const Login = () => (
  <>
    <ImageBackground />
    <MenuWrapper>

      <FormWrapper>
        <InputWrapper>
          <Input type='email' placeholder='이메일' />
          <Input type='password' placeholder='비밀번호' />
        </InputWrapper>

        <ButtonWrapper>
          <SubmitBtn />
        </ButtonWrapper>

      </FormWrapper>
      <Divider />

      <LoginWithG />
      <LoginWithGit />

      <Divider />
      <Option to='/auth/pw'>비밀번호 찾기</Option>
      <Option to='/auth/new'>회원가입</Option>
      <WithoutLogin />
    </MenuWrapper>
  </>
)

export default Login
