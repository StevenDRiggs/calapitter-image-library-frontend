import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { logoutUser } from '../../redux/actions/userActions'


const Profile = props => {
  const { user, logoutUser } = props
  const router = useRouter()

  if (Object.keys(user).length > 0) {
  return (
    <div>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  )
  } else {
    router.push('/')
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: dispatch(logoutUser()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
