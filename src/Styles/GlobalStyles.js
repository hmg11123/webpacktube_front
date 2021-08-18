import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
    ${reset}

    *{
        overflow-x: hidden;
        box-sizeing: border-box;
    }
`;
