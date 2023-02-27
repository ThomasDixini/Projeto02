import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1200px){
        font-size: 93.75%;
    }
    @media(max-width: 800px){
        font-size: 87.5%;
    }
}

body {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
}

input, textarea, strong, button {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
}

`
