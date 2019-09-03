import { createGlobalStyle } from 'styled-components'

function getRandom (num) {
  return Math.floor(Math.random() * num) + 1
}

const ImageBackground = createGlobalStyle`
  body {
    background-image: url('/img/portal_bg_${getRandom(9)}.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default ImageBackground
