import React from 'react'
import styled from 'styled-components'
import HeaderItem from './HeaderItem'
import home from './home.svg'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 2.625rem;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
  margin-bottom: 0.5rem;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderItem to='/' position='left'>
      <img src={home} alt='홈' width='30' style={{ marginTop: '0.3rem' }} />
    </HeaderItem>
    <HeaderItem to='/login' position='left'>로그인</HeaderItem>
  </HeaderWrapper>
)

export default Header
