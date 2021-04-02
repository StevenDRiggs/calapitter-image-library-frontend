import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../redux/actions/userActions'


const initialState = {
  user: {
    usernameOrEmail: '',
    password: '',
  }
}


class LoginForm extends Component {
  state = {
    ...initialState,
  }

  handleSubmit = event => {
    event.preventDefault()

    const { loginUser } = this.props

    loginUser(this.state)

    this.setState({
      ...initialState,
    })
  }

  handleChange = event => {
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [event.target.name]: event.target.value,
        }
      }
    })
  }

  render() {
    const { styles, cancelButton } = this.props
    const { user } = this.state
    const { usernameOrEmail, password } = user

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input type='text' name='usernameOrEmail' value={usernameOrEmail} onChange={this.handleChange} placeholder='Username or Email' />
        <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' />

        <br />

        <button type='submit' className={styles.submitButton}>Log In</button>
        <button type='button' className={styles.cancelButton} onClick={cancelButton}>Cancel</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loginUser: formData => dispatch(loginUser(formData)),
  }
}


export default connect(null, mapDispatchToProps)(LoginForm)

