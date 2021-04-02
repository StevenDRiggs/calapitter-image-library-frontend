import Head from 'next/head'

import { storeWrapper } from '../redux/store/store'

import '../styles/globals.css'


const App = ({ Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>CIL | Calapitter Image Library</title>
      </Head>

      <div className='mainDisplay'>
        <Component {...pageProps} />
      </div>

      <footer className="pageFooter">
        <p>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="vercelLogo" />
          </a>
        </p>
      </footer>
    </>
  )
}


export default storeWrapper.withRedux(App)
