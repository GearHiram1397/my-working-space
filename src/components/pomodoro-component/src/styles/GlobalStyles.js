import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  //hsl(200, 91%, 51%);

/* Primary */

  --color-orange: #fff;
  --color-cyan: hsl(182, 91%, 71%);
  --color-purple: hsl(284, 89%, 74%);
  --color-white: hsl(0,0%, 100%);


  --color-gray: hsl(229, 52%, 96%);
  --color-very-light-blue: hsl(227, 51%, 92%);
  --color-dark-blue: hsl(235, 35%, 18%);
  --color-very-dark-blue: #1a252f;

  --color-gradient-light: #1a252f;
  --color-gradient-dark: #1a252f;

  --font-size-heading-l: 80px;
  --font-size-heading-m: 20px;
  --font-size-heading-s: 16px;
  --font-size-heading-xs: 13px;
  --font-size-body: 16px;
  --font-size-body-mobile:12px;


  --letter-spacing-heading-l: 15px;
  --letter-spacing-heading-m: 5px;
  --letter-spacing-heading-s: -5px;
  
  --font-weight-heading: 700;

}



body {
  
  font-weight: 700;
  overflow-x: hidden;
  color: var(---color-white);
}

h1 {
  font-size:var(--font-size-heading-l);
  line-height: var(--line-height-header-xl);
  letter-spacing: var(--letter-spacing-heading-s);
}
h2 {
  font-size:var(--font-size-heading-m);
  line-height: var(--line-height-header-l);
  
}
h3 {
  font-size:var(--font-size-heading-s);
  line-height: var(--line-height-header-m);
  letter-spacing: var(--letter-spacing-heading-l);

}
h4 {
  font-size:var(--font-size-heading-xs);
  line-height: var(--line-height-header-s);
  letter-spacing: var(--letter-spacing-heading-m);
}



#root{
  min-height: inherit;
  width: 100%;
}

#overlays{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
 
  
  
}

`;
