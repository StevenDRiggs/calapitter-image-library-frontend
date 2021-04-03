import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { clearErrors } from '../redux/actions/errorActions'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import { bounceIn, skipAnim } from '../animations/scripts/caterpillar'
import SignupForm from '../components/signup_form'
import LoginForm from '../components/login_form'

import styles from '../styles/Home.module.css'


const Home = props => {
  const caterpillar = 
    <svg id="caterpillar" viewBox="0 0 300 300">
      <defs>
        <clipPath id="eyes-clip-path">
          <rect x="65" y="125" width="70" height="30" />
        </clipPath>
      </defs>
      <circle id="tail3" className='segment' cx="250" cy="150" r="20" fill="violet"></circle>
      <circle id="tail2" className='segment' cx="230" cy="160" r="30" fill="indigo"></circle>
      <g id="tail1">
        <g id="tail1-legs">
          <line id="tail1-legs-left" x1="190" y1="157" x2="190" y2="225" stroke="black" strokeWidth="5"></line>
          <line id="tail1-legs-right" x1="210" y1="157" x2="210" y2="225" stroke="black" strokeWidth="5"></line>
        </g>
        <circle id="tail1-body" className='segment' cx="200" cy="157" r="40" fill="blue"></circle>
      </g>
      <g id="body3">
        <g id="body3-legs">
          <line id="body3-legs-left" x1="165" y1="165" x2="165" y2="240" stroke="black" strokeWidth="5"></line>
          <line id="body3-legs-right" x1="180" y1="165" x2="180" y2="240" stroke="black" strokeWidth="5"></line>
        </g>
        <circle id="body3-body" className='segment' cx="170" cy="165" r="50" fill="green"></circle>
      </g>
      <g id="body2">
        <g id="body2-legs">
          <line id="body2-legs-left" x1="140" y1="155" x2="140" y2="230" stroke="black" strokeWidth="5"></line>
          <line id="body2-legs-right" x1="160" y1="155" x2="160" y2="230" stroke="black" strokeWidth="5"></line>
        </g>
        <circle id="body2-body" className='segment' cx="150" cy="155" r="50" fill="yellow"></circle>
      </g>
      <g id="body1">
        <g id='body1-legs'>
          <line id="body1-legs-left" x1="110" y1="160" x2="110" y2="235" stroke="black" strokeWidth="5"></line>
          <line id="body1-legs-right" x1="130" y1="160" x2="130" y2="235" stroke="black" strokeWidth="5"></line>
        </g>
        <circle id="body1-body" className='segment' cx="120" cy="160" r="50" fill="orange"></circle>
      </g>
      <g id="head">
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
        <circle id="head-head" className='segment' cx="100" cy="150" r="50" fill="red"></circle>
        <g id="head-face">
          <g id="head-face-eyes" clip-path="url(#eyes-clip-path)">
            <circle id="head-face-eyes-left" cx="80" cy="140" r="10" fill="white"></circle>
            <circle id="head-face-eyes-right" cx="120" cy="140" r="10" fill="white"></circle>
          </g>
          <path id="head-face-mouth" stroke="white" strokeWidth="10" fill="none" d="M 80,160 C 90,180 110,180 120,160"></path>
        </g>
      </g>
    </svg>

  const [signup, setSignup] = useState(false)
  const [login, setLogin] = useState(false)

  const { errors, user, clearErrors } = props

  const router = useRouter()

  const cancelButton = () => {
    clearErrors()
    setSignup(false)
    setLogin(false)
  }

  const showSignupForm = () => {
    clearErrors()
    setSignup(true)
    setLogin(false)
  }

  const showLoginForm = () => {
    clearErrors()
    setLogin(true)
    setSignup(false)
  }

  useEffect(() => {
    const targetElement = document.querySelector('#SVGs')
    disableBodyScroll(targetElement)

    document.addEventListener('keydown', () => skipAnim())
    document.addEventListener('click', () => skipAnim())

    bounceIn()

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      router.push(`${window.location.origin}/cil/profile`)
    }
  }, [user])

  return (
    <div>
      {errors && errors.length > 0 ? <div className='errors'><ul>{errors.map((error, index) => <li key={index}>{error}</li>)}</ul></div> : null}

      <main>
        <div id='SVGs'>
          <div className={styles.caterpillarSVG}>
            {caterpillar}
          </div>
        </div>

        {!(signup || login) ?
          <>
            <button id="signupBtn" onClick={showSignupForm}>Sign Up</button>
            <button id="loginBtn" onClick={showLoginForm}>Log In</button>
          </>
          : null}

        {signup ? <SignupForm cancelButton={cancelButton} styles={styles} /> : null}
        {login ? <LoginForm cancelButton={cancelButton} styles={styles} /> : null}
      </main>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    errors: state.errors,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
