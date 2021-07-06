import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.light};

	font-family: Roboto, 'Segoe UI', sans-serif;
	font-size: 12pt;

  width: 100%;
}

h1 {
  padding: .5em 0;
  font-size: 26pt;
}

h2 {
  padding-top: 1em;
  font-size: 20pt;
}

h3 {
  padding-top: 1em;
  font-size: 16pt;
}

table {
  border-collapse: collapse;
  margin: 1em;

  td, th {
    border: 1px solid black;
    padding: .15em .5em;
    text-align: center;
  }
}

.container {
	margin: 0 auto;
  padding: 2em 1em;
	width: 750px;

  ul {
    padding-left: 1em;
    list-style: none;
  }

  li:before {
    content: "•";
    padding-right: .4em;
	}

  p {
    padding: .5em 0;
    text-align: justify;
    text-justify: auto;
  }
}

@media (max-width: 865px) {
  .container {
    width: 95vw;
  }
}

// fix dev build flash on firefox
@supports (-moz-appearance:none) {
	body {
		display: block;
	}
}
`

export default GlobalStyle
