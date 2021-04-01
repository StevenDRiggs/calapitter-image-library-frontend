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
    const { styles, cancelButton } = this.props
    const { usernameOrEmail, password } = this.state

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


export default LoginForm

