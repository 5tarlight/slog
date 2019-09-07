import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  textDecoration: 'none',
  color: '#845ef7',
  float: 'left',
  fontSize: '0.8rem'
}

const Option = ({ to, children }) => (
  <Link to={to} style={style}>
    {children}
  </Link>
)

export default Option
