import NextProgress from 'next-progress'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    getLayout(
      <div>
          <NextProgress color='#ffffff' height='4px' delay={300} options={{ showSpinner: false }} />
          <Component {...pageProps} />
      </div>
    )
  )
}

export default MyApp
