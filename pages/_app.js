import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component className="scroll-smooth" {...pageProps} />
    </UserProvider>
  )
}

export default MyApp;
