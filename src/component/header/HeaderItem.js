import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderItemWrapper = styled.span`
  float: ${props => (props.position === 'left' ? 'left' : 'right')};
  color: black;
`

const Label = styled.div`
  width: 5rem;
  line-height: 1.875rem;
  font-size: 1rem;
  transition: font-size 300ms ease;

  &:hover {
    font-size: 1.1rem;
  }
`

const style = {
  textDecoration: 'none',
  color: 'black',
  textAlign: 'center'
}

const HeaderItem = ({ to, positon, children }) => (
  <HeaderItemWrapper position={positon}>
    <Link to={to} style={style}>
      <Label>
        {children}
      </Label>
    </Link>
  </HeaderItemWrapper>
)

export default HeaderItem
