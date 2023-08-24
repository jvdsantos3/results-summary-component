import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.white};

    @media (min-width: 475px) {
      background: ${({ theme }) => theme.colors['very-light-blue']};
    }
  }

  body, input, textarea, button {
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`
