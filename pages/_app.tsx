import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import UserProvider from '../context/UserProvider'
import TrackProvider from '../context/TrackContext'
function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider><UserProvider><TrackProvider><Component {...pageProps} /></TrackProvider></UserProvider></ChakraProvider>
}
export default MyApp
