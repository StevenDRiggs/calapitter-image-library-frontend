import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../../redux/actions/userActions'


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
