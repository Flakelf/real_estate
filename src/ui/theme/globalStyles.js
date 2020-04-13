import { createGlobalStyle } from 'styled-components';

import { normalize } from './normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    body {
        height: 100%;
    }

`;
