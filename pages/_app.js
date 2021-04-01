import Head from 'next/head'

import { storeWrapper, store } from '../redux/store/store'

import '../styles/globals.css'


const App = ({ Component, pageProps}) => {
  const { errors } = store.getState()
  console.log(errors)

  return (
    <>
      <Head>
        <title>CIL | Calapitter Image Library</title>
      </Head>

      {errors && errors.length > 0 ? <div className='errors'><ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul></div> : null}

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
