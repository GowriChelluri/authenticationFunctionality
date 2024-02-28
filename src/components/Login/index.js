import './index.css'

import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const onSuccessView = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const getDetails = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      onSuccessView(data.jwt_token)
    }
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={getDetails}>
        Login with sample creds
      </button>
    </div>
  )
}

export default withRouter(Login)
