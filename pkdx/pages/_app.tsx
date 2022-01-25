import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../dados/context/AppContext'
import useAppData from '../dados/hook/useAppData'

function MyApp({ Component, pageProps }: AppProps) {
  const dados = useAppData()
  
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
