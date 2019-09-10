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

class SignUp extends Component {  
  state = {
    email: '',
    pw: '',
    pwc: '',
    status: '' 
  }

  render() {

    /**
     * 입력된 이메일과 비밀번호를 검사하고 데이터베이스에 적용
     */
    const validate = (e) => {
      e.preventDefault()
     
      const email = this.emailv.value.trim()
      const pw = this.pwv.value.trim()
      const pwc = this.pwcv.value.trim()

      if (!email) {
        updateStatusMessage('이메일을 입력해주세요.')
        return
      } else if (!pw) {
        updateStatusMessage('비밀번호를 입력해주세요.')
        return
      } else if (!pwc) {
        updateStatusMessage('비밀번호 확인을 해주세요.')
        return
      } else if (email.indexOf('@') <= 0) {
        updateStatusMessage('유효하지 않은 이메일입니다.')
        return
      } else if (pw === pwc) {
        updateStatusMessage('비밀번호가 일치하지 않습니다.')
      }
    }
    
    const updateStatusMessage = (msg) => {
      const email = this.emailv.value.trim()
      const pw = this.pwv.value.trim()
      const pwc = this.pwcv.value.trim()

      this.setState({
        ...this.state,
        status: msg,
        email: email,
        pw: pw,
        pwc: pwc
      })
    }

    return (
      <>
        <ImageBackground key='signup_imagebackground' />
        <SignUpWrapper key='signup_tag_wrapper'>
          <FormWrapper key='signup_form_wrapper'>
            <p key='status_msg' style={{color: 'red'}}>
              {this.state.status}
            </p>

            <InputWrapper key='signup_input_wrapper'>
              <Input
                ref={ref=>{this.emailv=ref}}
                placeholder='이메일'
                type='email'
                key='email'
                onChange={validate}
                value={this.state.email}
              />

              <Input
                ref={ref=>{this.pwv=ref}}
                placeholder='비밀번호'
                type='password'
                key='pw'
                onChange={validate}
                value={this.state.pw}
              />

              <Input
                ref={ref=>{this.pwcv=ref}}
                placeholder='비밀번호 확인'
                type='password'
                key='pw_confirm'
                onChange={validate}
                value={this.state.pwc}
              />
            </InputWrapper>
  
            <ButtonWrapper>
              <SignUpBtn key='signup_button'>회원가입</SignUpBtn>
            </ButtonWrapper>
          </FormWrapper>
        </SignUpWrapper>
      </>
    )
  }
}

export default SignUp
