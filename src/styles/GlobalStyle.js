import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #ff7272;
  --dark-color: #333333;
  --light-color: #f4f4f4;
  --danger-color: #dc3545;
  --success-color: #28a745;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
  }

body {
  font-size: 22px;
  line-height: 1.6;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

a:hover {
  color: #666;
}

ul {
  list-style: none;
  margin-right: 0px;
}
`

export default GlobalStyle
