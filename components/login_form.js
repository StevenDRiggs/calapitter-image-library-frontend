import React, { Component } from 'react'


const initialState = {
  usernameOrEmail: '',
  password: '',
}


class LoginForm extends Component {
  state = {
    ...initialState,
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { cancelButton } = this.props
    const { usernameOrEmail, password } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='usernameOrEmail' value={usernameOrEmail} onChange={this.handleChange} placeholder='Username or Email' />
        <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' />

        <button type='submit'>Log In</button>
        <button type='button' onClick={cancelButton}>Cancel</button>
      </form>
    )
  }
}


export default LoginForm

