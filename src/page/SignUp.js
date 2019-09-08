import React from 'react'
import { ImageBackground, MenuWrapper, Input, SubmitBtn } from '../component'
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
    <MenuWrapper>
      <FormWrapper>
        <InputWrapper>
          <Input placeholder='이메일' type='email'/>
          <Input placeholder='비밀번호' type='password' />
          <Input placeholder='비밀번호 확인' type='password' />
        </InputWrapper>

        <ButtonWrapper>
          <SubmitBtn>회원가입</SubmitBtn>
        </ButtonWrapper>
      </FormWrapper>
    </MenuWrapper>
  </>
)

export default SignUp
