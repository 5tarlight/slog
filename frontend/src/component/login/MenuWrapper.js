import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(230, 230, 230, 1);
  width: 500px;
  height: 360px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  justify-content: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5rem;
  align-items: center;
  align-content: center;
  border: none;
`

const MenuWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default MenuWrapper
