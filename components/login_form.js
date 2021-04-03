import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../redux/actions/userActions'


const initialState = {
  usernameOrEmail: '',
  password: '',
}


const LoginForm = props => {
  const [ user, setUser ] = useState({
    ...initialState,
  })

  const { loginUser, styles, cancelButton } = props
  const { usernameOrEmail, password } = user

  const handleSubmit = event => {
    event.preventDefault()


    loginUser({
      user,
    })

    setUser({
      ...initialState,
    })
  }

  const handleChange = event => {
    setUser(prevUser => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      }
    })
  }

  useEffect(() => document.querySelector('#firstInput').focus(), [])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type='text' id='firstInput' name='usernameOrEmail' value={usernameOrEmail} onChange={handleChange} placeholder='Username or Email' />
      <input type='password' name='password' value={password} onChange={handleChange} placeholder='Password' />

      <br />

      <button type='submit' className={styles.submitButton}>Log In</button>
      <button type='button' className={styles.cancelButton} onClick={cancelButton}>Cancel</button>
    </form>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    loginUser: formData => dispatch(loginUser(formData)),
  }
}


export default connect(null, mapDispatchToProps)(LoginForm)

