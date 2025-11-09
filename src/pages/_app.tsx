import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#1A9F8B',
    secondary: '#2D3436',
    background: '#1E1E1E',
    text: {
      light: '#FFFFFF',
      dark: '#CCCCCC'
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}