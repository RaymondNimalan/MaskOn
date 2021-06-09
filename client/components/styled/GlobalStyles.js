import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    overflow-x: hidden;
}

.animated {
    display: flex;
    height: 450px;
    @media screen and (max-width: 881px) {
height: 400px;
  }
  @media screen and (max-width: 480px) {
height: 350px;
  }
    //width: 450px

}
.webcam {
    display: flex;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}
`

export default GlobalStyle
