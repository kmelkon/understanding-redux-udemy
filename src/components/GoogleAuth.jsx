import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const auth = useRef(null)

  useEffect(() => {
    const onAuthChange = isSignedIn => {
      if (isSignedIn) {
        signIn(auth.current.currentUser.get().getId())
      } else {
        signOut()
      }
    }

    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '555725231361-4r4sjq8ampkc05q2qg1jo2kcth2fqdec.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance()

          onAuthChange(auth.current.isSignedIn.get())
          auth.current.isSignedIn.listen(onAuthChange)
        })
    })
  }, [signIn, signOut])

  const onSignInClick = () => {
    auth.current.signIn()
  }

  const onSignOutClick = () => {
    auth.current.signOut()
  }

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <div>not sure if we're signed in</div>
    } else if (isSignedIn) {
      return (
        <button className='ui red google button' onClick={onSignOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui red google button' onClick={onSignInClick}>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }
  }

  return <div>{renderAuthButton()}</div>
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)
