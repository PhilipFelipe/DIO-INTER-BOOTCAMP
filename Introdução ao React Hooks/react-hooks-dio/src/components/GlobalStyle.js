import { createGlobalStyle } from 'styled-components'
import image from '../img/dostoievski.jpg'


export const GlobalStyle = createGlobalStyle `
    body {
        background: url(${image}) no-repeat;
        background-size: cover;
        color: #332c36;
        padding: 0;
        margin: 0;
        font-family: 'New Tegomin', serif;
    }
`;