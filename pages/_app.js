import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
      chainRpc={{
        [ChainId.Goerli]: 'https://goerli.infura.io/v3/cdeaf49fb71d454894b0c3a143cc26bf'
      }}
    >
        <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
