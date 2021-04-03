import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import JSXParser from 'react-jsx-parser'

import { logoutUser } from '../../redux/actions/userActions'

import styles from '../../styles/Profile.module.css'


const Profile = props => {
  const { user, logoutUser } = props

  const router = useRouter()

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      router.push(window.location.origin)
    }
  })

  return (
    <div>
      {user.user ? console.log('typeof avatar:', typeof user.user.avatar) : null}
      {user.user ? <JSXParser jsx={user.user.avatar} /> : null}
      <button onClick={logoutUser}>Log Out</button>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
