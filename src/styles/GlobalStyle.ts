import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: Arial, sans-serif;
        font-weight: bold;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #1A1A1D;
        color: #C3073F
    }
    
    
    p {
        color: #4e4e50
    }

    #root {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
`;

export default GlobalStyles;
