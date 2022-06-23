import { AuthProvider } from '../hooks/useAuth'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {

  return (
  <AuthProvider>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </AuthProvider>
  )

}

export default MyApp
