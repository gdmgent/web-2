import React from 'react'
import ReactDOM from 'react-dom/client'
import Cards from './Cards.jsx'
import './general.css';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button.jsx';

const variables = {
  brand: 'hsl(233, 100%, 96%)',
  light: 'hsl(0, 0%, 98%)',
  dark: 'hsl(0, 0%, 10%)',
  spacing: {
    small: '.5rem',
    base: '1rem',
  },
  size: {
    medium: "1.25rem",
    large: "1.5rem"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={variables}>
      <>
        <Button style={{
          color: 'red'
        }}>
          Een knop
        </Button>
        <Cards />
      </>
    </ThemeProvider>
  </React.StrictMode>,
)
