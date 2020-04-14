import { createGlobalStyle } from 'styled-components';

import { normalize } from './normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    body {
        margin: 0 auto;
        width: 1440px;
        height: 100%;
    }

`;
