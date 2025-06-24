
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

const theme = extendTheme({
  fonts: {
    heading: 'Switzer, system-ui, sans-serif',
    body: 'Switzer, system-ui, sans-serif',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'rgb(17,18,20)',
        color: 'white',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
