import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family:  ${({ theme }) => theme.typography.fontFamily};
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: ${({ theme }) => theme.palette.grey[100]};
        color: ${({ theme }) => theme.palette.grey[900]}; 
    }
`;

export default GlobalStyle;