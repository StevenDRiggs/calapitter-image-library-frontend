import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { processErrors } from '../redux/actions/errorActions'
import { signupUser } from '../redux/actions/userActions'


const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignupForm = props => {
  const [ user, setUser ] = useState({
    ...initialState,
  })

  const { username, email, password, confirmPassword } = user
  const { styles, cancelButton } = props

  const handleSubmit = event => {
    event.preventDefault()

    const { username, email, password, confirmPassword } = user
    const { processErrors, signupUser } = props

    if (password !== confirmPassword) {
      processErrors(['Passwords must be the same'])
    } else {
      signupUser({
        user: {
          username,
          email,
          password,
        }
      })
    }

    setUser({
      ...initialState,
    })
  }

  const handleChange = event => {

    setUser(prevUser => {
      if (event.target.name === 'confirmPassword') {
        if (event.target.value !== prevUser.password) {
          event.target.className = styles.inputDanger
        } else {
          event.target.className = ''
        }
      }

      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      }
    })
  }

  useEffect(() => document.querySelector('#firstInput').focus(), [])

  return (
    <form id='signupForm' className={styles.form} onSubmit={handleSubmit}>
      <input type='text' id='firstInput' name='username' value={username} onChange={handleChange} placeholder='Username' required />
      <input type='email' name='email' value={email} onChange={handleChange} placeholder='Email' required />
      <input type='password' name='password' value={password} onChange={handleChange} placeholder='Password' required />
      <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />

      <br />

      <button type='submit' className={styles.submitButton}>Sign Up</button>
      <button type='button' className={styles.cancelButton} onClick={cancelButton}>Cancel</button>
    </form>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    processErrors: errorsArr => dispatch(processErrors(errorsArr)),
    signupUser: formData => dispatch(signupUser(formData)),
  }
}


export default connect(null, mapDispatchToProps)(SignupForm)
