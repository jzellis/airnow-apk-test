import '../styles/globals.css'
import { AppWrapper } from '../components/AppWrapper'

function MyApp({ Component, pageProps }) {
  // <AppWrapper>
    return <Component {...pageProps} />
    // </AppWrapper>
}

export default MyApp
