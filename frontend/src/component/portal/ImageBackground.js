import { createGlobalStyle } from 'styled-components'

function getRandom (num) {
  return Math.floor(Math.random() * num) + 1
}

const ImageBackground = createGlobalStyle`
  body {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    background-image: url('/img/portal_bg_${getRandom(8)}.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default ImageBackground
