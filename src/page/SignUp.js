import React from 'react'
import { ImageBackground, Input, SignUpWrapper, SignUpBtn } from '../component'
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
  height: 156px;
`

const SignUp = () => (
  <>
    <ImageBackground />
    <SignUpWrapper>
      <FormWrapper>
        <InputWrapper>
          <Input placeholder='이메일' type='email' />
          <Input placeholder='비밀번호' type='password' />
          <Input placeholder='비밀번호 확인' type='password' />
        </InputWrapper>

        <ButtonWrapper>
          <SignUpBtn>회원가입</SignUpBtn>
        </ButtonWrapper>
      </FormWrapper>
    </SignUpWrapper>
  </>
)

export default SignUp
