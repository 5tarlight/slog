import React, { Component } from 'react'
import { ImageBackground, Input, SignUpWrapper, SignUpBtn } from '../component'
import styled from 'styled-components'
import { SHA256 } from 'crypto-js'

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
    status: '',
    checked: false
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
      const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      const pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ 

      /*
        이메일, 비번, 비번확인 체크
        @ . 포함여부 체크
        @ 앞 뒤로 문자 잇는지 체크
      */
      if (!email) {
        updateStatusMessage('이메일을 입력해주세요.')
        return
      } else if (email.match(emailRegExp) == null) {
        updateStatusMessage('유효하지 않은 이메일입니다.')
        return
      } else if (!pw) {
        updateStatusMessage('비밀번호를 입력해주세요.')
        return
      } else if (pw.match(pwRegExp) == null) {
        updateStatusMessage('비밀번호는 숫자, 영문자, 특수문자를 포함하는 8자리 이상의 문자열이어야 합니다.')
      } else if (!pwc) {
        updateStatusMessage('비밀번호 확인을 해주세요.')
        return
      } else if (pw !== pwc) {
        updateStatusMessage('비밀번호가 일치하지 않습니다.')
        return
      } else {
        updateStatusMessage('')
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
        pwc: pwc,
        checked: msg ? false : true
      })
    }

    const handleClick = (e) => {
      e.preventDefault()

      if(!this.state.checked) return

      const email = this.emailv.value.trim()
      const pw = this.pwv.value.trim()
      const pwHash = SHA256(email + pw)

      const body = {
        email: email,
        pw: pwHash
      }

      const obj = {
        body: JSON.stringify(body),
        headers: {},
        method: 'POST'
      }

      fetch('http://5tarlight.kro.kr:4000/api/auth/signup', obj)
        .then(res => res.json())
        .then(data => console.dir(data))
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
                type='text'
                key='email'
                onChange={validate}
              />

              <Input
                ref={ref=>{this.pwv=ref}}
                placeholder='비밀번호'
                type='password'
                key='pw'
                onChange={validate}
              />

              <Input
                ref={ref=>{this.pwcv=ref}}
                placeholder='비밀번호 확인'
                type='password'
                key='pw_confirm'
                onChange={validate}
              />
            </InputWrapper>
  
            <ButtonWrapper>
              <SignUpBtn
                key='signup_button'
                disabled={!this.state.checked}
                onClick={handleClick}
              >
                회원가입
              </SignUpBtn>
            </ButtonWrapper>
          </FormWrapper>
        </SignUpWrapper>
      </>
    )
  }
}

export default SignUp
