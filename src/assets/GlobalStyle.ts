import { createGlobalStyle } from 'styled-components'

const sizes = {
  mobile: '475px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px'
}

const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`
}

const GlobalStyle = createGlobalStyle`
  :root {
    /* COLORS */

    /* PRIMARY */

    --clr-marine-blue: hsl(213, 96%, 18%);
    --clr-purplish-blue: hsl(243, 100%, 62%);
    --clr-pastel-blue: hsl(228, 100%, 84%);
    --clr-light-blue: hsl(206, 94%, 87%);
    --clr-red: hsl(354, 71%, 64%);
    
    /* NEUTRAL */
    
    --clr-very-dark-gray: hsl(0, 0%, 17%);
    --clr-dark-gray: hsl(0, 0%, 59%);
    --clr-gray: hsl(0, 0%, 80%);
    --clr-black: hsl(0,0%,5%);
    --clr-white: hsl(0,0%,98%);

    /* ****************************** */

    /* FONTS */

    --ff-primary: 'Rubik', sans-serif;

    --fw-regular: 400;
    --fw-semi-bold: 500;
    --fw-bold: 700;

    font-size: 62.5%;
    --fs-200: 1rem;
    --fs-300: 1.4rem;
    --fs-400: 1.6rem;
    --fs-500: 2rem;
    --fs-600: 3rem;
    --fs-700: 4.6rem;
    --fs-800: 5.4rem;

    /* ****************************** */
    
    /* TRANSITIONS */
    --td-regular: 600ms;
    --td-fast: calc(var(--td-regular) / 2);
    --td-slow: calc(var(--td-regular) * 2);
    --ttf: cubic-bezier(0.694, 0.048, 0.335, 1);
    
    /* ****************************** */
    
    --br: 1.2rem;

    }


  /* @media (${devices.laptopL}){
    :root {
      font-size: 80%;
    }
  }
  */

  *  {
    margin: 0;
    padding: 0;
    font: inherit;
    list-style: none;
    text-decoration: none;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    text-rendering: optimizeSpeed;
    font-family: var(--ff-primary);
    font-size: var(--fs-400);
    font-weight: var(--fw-regular);
    background-color: var(--clr-magnolia);
  }

  img,
  picture {
    display: block;
    max-width: 100%;
    user-select: none;
  }

  h1 {
    font-size: var(--fs-600);
    font-weight: var(--fw-semi-bold);
  }

  h2 {
    font-size: var(--fs-600);
    font-weight: var(--fw-semi-bold);
  }
`

export { GlobalStyle, devices }
