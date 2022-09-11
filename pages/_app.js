import '../styles/globals.css'
import { useState } from 'react';
import { StateProvider } from '../components/StateProvider';
function MyApp({ Component, pageProps }) {

  const state = pageProps;
  const [theState] = useState(state);
  return <StateProvider value={theState}>
    <Component {...pageProps} />
    </StateProvider>
}

export default MyApp
