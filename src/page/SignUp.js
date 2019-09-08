import React, { Component } from 'react'
import { ImageBackground, Input, SignUpWrapper, SignUpBtn } from '../component'
import styled from 'styled-components'

class SignUp extends Component {
  state = {
    status: '',
    email: '',
    pw: '',
    pwc: ''
  }
  
  render() {
    
    /**
     * emailv: 이메일
     * pwv: 비밀번호
     * pwcv: 비밀번호 확인
     */
    const checkValue = (e) => {
      e.preventDefault()
     
      const email = this.emailv.value
      const pw = this.pwv.value
      const pwc = this.pwcv.value

      if(!email) {
        this.setState({
          ...this.state,
          status: '이메일을 입력해주세요.',
          email: email,
          pw: pw,
          pwc: pwc
        })
        return
      } else if(!pw) {
        this.setState({
          ...this.state,
          status: '비밀번호를 입력해주세요.',
          email: email,
          pw: pw,
          pwc: pwc
        })
        return
      } else if(!pwc) {
        this.setState({
          ...this.state,
          status: '비밀번호 확인을 해주세요.',
          email: email,
          pw: pw,
          pwc: pwc
        })
        return
      } else if(email.indexOf('@') <= 0) {
        this.setState({
          ...this.state,
          status: '유효하지 않은 이메일입니다.',
          email: email,
          pw: pw,
          pwc: pwc
        })
        return
      } else {
        this.setState({
          ...this.state,
          status: '',
          email: email,
          pw: pw,
          pwc: pwc
        })

        e.focus()
      }
    }
    
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

    return (
      <>
        <ImageBackground />
        <SignUpWrapper>
          <FormWrapper>
            <p style={{color: 'red'}}>{this.state.status}</p>
            <InputWrapper>
              <Input onChange={checkValue} ref={ref=>{this.emailv=ref}} value={this.state.email} placeholder='이메일' type='email' />
              <Input onChange={checkValue} ref={ref=>{this.pwv=ref}} value={this.state.pw} placeholder='비밀번호' type='password' />
              <Input onChange={checkValue} ref={ref=>{this.pwcv=ref}} value={this.state.pwc} placeholder='비밀번호 확인' type='password' />
            </InputWrapper>
  
            <ButtonWrapper>
              <SignUpBtn>회원가입</SignUpBtn>
            </ButtonWrapper>
          </FormWrapper>
        </SignUpWrapper>
      </>
    )
  }
}

export default SignUp
