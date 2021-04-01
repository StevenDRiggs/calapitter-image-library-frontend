import React, { Component } from 'react'


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
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { cancelButton } = this.props
    const { username, email, password, confirmPassword } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username' />
        <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='Email' />
        <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' />
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} placeholder='Confirm Password' />

        <button type='submit'>Sign Up</button>
        <button type='button' onClick={cancelButton}>Cancel</button>
      </form>
    )
  }
}


export default SignupForm
