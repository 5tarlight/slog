import React from 'react'
import styled from 'styled-components'
import HeaderItem from './HeaderItem'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 1.875rem;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderItem to='/' positon='left'>홈</HeaderItem>
    <HeaderItem to='/login' positon='left'>로그인</HeaderItem>
  </HeaderWrapper>
)

export default Header
