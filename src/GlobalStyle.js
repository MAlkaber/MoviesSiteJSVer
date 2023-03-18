import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --maxWidth:1200px;
  --white:#fff;
  --lightGray:#eee;
  --medGray:#353535;
  --darkGray:#1c1c1c;
  --fontSuperBig:2.5rem;
  --fontBig:1.5rem;
  --fontMid:1.2rem;
  --fontSmall:1rem;
}
*{
  box-sizing:border-box;

}
a{
    text-decoration: none;
}
body {
    margin: 0;
    padding: 0;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
}
h3 {
    font-size: 1.1rem;
    font-weight: 600;
}

p {
    font-size: 1rem;
    color: var(--white);
}


::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
`;
