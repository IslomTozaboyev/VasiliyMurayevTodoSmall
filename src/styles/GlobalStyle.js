import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }

    *{
        box-sizing: border-box;
    }

    ul{
        margin: 0;
        padding: 0;

        li{
        list-style: none;

        }
    }

    a, a:hover{
        text-decoration: none;
        color: black;
        display: inline-block;
    }
    
    .done{
        text-decoration: line-through;
    }
`;
export default GlobalStyle;
