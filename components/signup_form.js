import React, { Component } from 'react'
import { connect } from 'react-redux'

import { processErrors } from '../redux/actions/errorActions'


const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}


class SignupForm extends Component {
  state = {
    ...initialState,
  }

  handleSubmit = event => {
    event.preventDefault()

    const { password, confirmPassword } = this.state
    const { processErrors } = this.props

    if (password !== confirmPassword) {
      processErrors(['Passwords must be the same'])
    } else {
      
    }
  }

  handleChange = event => {
    const { styles } = this.props

    this.setState(prevState => {
      if (event.target.name === 'confirmPassword') {
        if (event.target.value !== prevState.password) {
          event.target.className = styles.inputDanger
        } else {
          event.target.className = ''
        }
      }

      return {
        [event.target.name]: event.target.value,
      }
    })
  }

  render() {
    const { styles, cancelButton } = this.props
    const { username, email, password, confirmPassword } = this.state

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username' required />
        <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='Email' required />
        <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' required />
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} placeholder='Confirm Password' required />

        <br />

        <button type='submit' className={styles.submitButton}>Sign Up</button>
        <button type='button' className={styles.cancelButton} onClick={cancelButton}>Cancel</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    processErrors: errorsArr => dispatch(processErrors(errorsArr)),
  }
}


export default connect(null, mapDispatchToProps)(SignupForm)
