import React, { Component } from 'react'
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

/**
 * emailv: 이메일
 * pwv: 비밀번호
 * pwcv: 비밀번호 확인
 */

class SignUp extends Component {
  render() {
    const handleClick = (e) => {
      e.preventDefault()
      console.log('ㅂㅇ')
    }

    return (
      <>
        <ImageBackground />
        <SignUpWrapper>
          <FormWrapper>
            <InputWrapper>
              <Input ref={ref=>{this.emailv=ref}} placeholder='이메일' type='email' />
              <Input ref={ref=>{this.pwv=ref}} placeholder='비밀번호' type='password' />
              <Input ref={ref=>{this.pwcv=ref}} placeholder='비밀번호 확인' type='password' />
            </InputWrapper>
  
            <ButtonWrapper>
              <SignUpBtn onClick={handleClick}>회원가입</SignUpBtn>
            </ButtonWrapper>
          </FormWrapper>
        </SignUpWrapper>
      </>
    )
  }
}

export default SignUp
