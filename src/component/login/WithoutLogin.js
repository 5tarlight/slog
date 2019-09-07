import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  textDecoration: 'none',
  color: '#845ef7',
  float: 'right'
}

const WithoutLogin = () => (
  <Link to='/post' style={style}>
    로그인 하지 않고 둘러보기
  </Link>
)

export default WithoutLogin
