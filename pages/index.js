import Head from 'next/head'
import React, { Component } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

//import Chrysalis from '../images/logoReact.svg'
import { clearSVG, segmentBounceIn } from '../animations/scripts/caterpillar'

import styles from '../styles/Home.module.css'


class Home extends Component {
  caterpillar = 
    <svg id="caterpillar" viewBox="0 0 300 300">
      <defs>
        <clipPath id="eyes-clip-path">
          <rect x="65" y="125" width="70" height="30" />
        </clipPath>
      </defs>
      <circle id="tail3" className='segment' cx="250" cy="150" r="20" fill="violet"></circle>
      <circle id="tail2" className='segment' cx="230" cy="160" r="30" fill="indigo"></circle>
      <g id="tail1" className='segment'>
        <line id="tail1-leg-left" x1="190" y1="157" x2="190" y2="225" stroke="black" strokeWidth="5"></line>
        <line id="tail1-leg-right" x1="210" y1="157" x2="210" y2="225" stroke="black" strokeWidth="5"></line>
        <circle id="tail1-body" cx="200" cy="157" r="40" fill="blue"></circle>
      </g>
      <g id="body3" className='segment'>
        <line id="body3-leg-left" x1="165" y1="165" x2="165" y2="240" stroke="black" strokeWidth="5"></line>
        <line id="body3-leg-right" x1="180" y1="165" x2="180" y2="240" stroke="black" strokeWidth="5"></line>
        <circle id="body3-body" cx="170" cy="165" r="50" fill="green"></circle>
      </g>
      <g id="body2" className='segment'>
        <line id="body2-leg-left" x1="140" y1="155" x2="140" y2="230" stroke="black" strokeWidth="5"></line>
        <line id="body2-leg-right" x1="160" y1="155" x2="160" y2="230" stroke="black" strokeWidth="5"></line>
        <circle id="body2-body" cx="150" cy="155" r="50" fill="yellow"></circle>
      </g>
      <g id="body1" className='segment'>
        <line id="body1-leg-left" x1="110" y1="160" x2="110" y2="235" stroke="black" strokeWidth="5"></line>
        <line id="body1-leg-right" x1="130" y1="160" x2="130" y2="235" stroke="black" strokeWidth="5"></line>
        <circle id="body1-body" cx="120" cy="160" r="50" fill="orange"></circle>
      </g>
      <g id="head" className='segment'>
        <g id="head-antennae">
          <g id="head-antennae-left">
            <path id="head-antennae-left-stamen" stroke="black" strokeWidth="5" fill="none" d="M 90,115 C 100,100 100,100 80,80"></path>
            <circle id="head-antennae-left-pistil" cx="80" cy="80" r="10" stroke="black" strokeWidth="5" fill="gray"></circle>
          </g>
          <g id="head-antennae-right">
            <path id="head-antennae-right-stamen" stroke="black" strokeWidth="5" fill="none" d="M 110,115 C 100,100 100,100 110,80"></path>
            <circle id="head-antennae-right-pistil" cx="110" cy="80" r="10" stroke="black" strokeWidth="5" fill="gray"></circle>
          </g>
        </g>
        <circle id="head-head" cx="100" cy="150" r="50" fill="red"></circle>
        <g id="head-face">
          <g id="head-face-eyes" clip-path="url(#eyes-clip-path)">
            <circle id="head-face-eyes-left" cx="80" cy="140" r="10" fill="white"></circle>
            <circle id="head-face-eyes-right" cx="120" cy="140" r="10" fill="white"></circle>
          </g>
          <path id="head-face-mouth" stroke="white" strokeWidth="10" fill="none" d="M 80,160 C 90,180 110,180 120,160"></path>
        </g>
      </g>
    </svg>

    componentDidMount() {
      const targetElement = document.querySelector('#SVGs')
      disableBodyScroll(targetElement)

      clearSVG()
      segmentBounceIn('#head-head')
      segmentBounceIn('#body1-body')
      segmentBounceIn('#body2-body')
      segmentBounceIn('#body3-body')
      segmentBounceIn('#tail1-body')
      segmentBounceIn('#tail2')
      segmentBounceIn('#tail3')
    }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <main>
          <div id='SVGs'>
            {/* <div className={styles.chrysalisSVG}> */}
            {/*   <Chrysalis id='chrysalis' /> */}
            {/* </div> */}
            <div className={styles.caterpillarSVG}>
              {this.caterpillar}
            </div>
          </div>
        </main>
      </div>
    )
  }
}


export default Home
