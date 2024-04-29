import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import styled, { ThemeProvider } from 'styled-components';

const boyTheme = {
  font: 'Impact',
  primary: 'black'
}

const girlTheme = {
  font: 'Comic Sans',
  primary: 'pink'
}

const GlobalStyles = styled.div`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.primary};
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={boyTheme} primaryColor="red">
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ThemeProvider>
  </React.StrictMode>,
)
