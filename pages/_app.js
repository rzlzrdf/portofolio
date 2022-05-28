import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderNav from '../Components/HeaderNav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />  
    </>
  
  )
}

export default MyApp
