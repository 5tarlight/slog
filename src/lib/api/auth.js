import { createHash } from "crypto"
import client from '../Client'

export const register = ({ email, pw }) => {
  const hash = createHash('sha1').update(email + pw).digest('base64')

  const body = {
    email: email,
    pw: pwHash
  }

  client.post('/api/auth/signup', body)
}

export const login = ({ email, pw }) => {

}

export const logout = () => {

}

// 로그인 상태 확인
export const check = () => {

}