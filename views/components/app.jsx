import React, { Component } from 'react'
import sharedUtils from 'shared/utils.js'
// import ReactDOM from 'react-dom'
import axios from 'axios'
import Dashboard from 'views/components/dashboard.jsx'
import WebRTCPlayground from 'views/components/webRTCPlayground.jsx'

import {
  Route,
  Link,
  Switch,
  withRouter,
  BrowserRouter as Router,
} from 'react-router-dom'

const LinkButton = withRouter(({ history, test, path, className }) => {
  async function maybeNavigate () {
    let { data } = await test()
    if (data.ok) {
      history.push(path)
    } else if (data.err) {
      alert (data.err)
    }
  }
  return (
    <button className={className} type='button' onClick={maybeNavigate}>ok</button>
  )
})

const Home = () => {
  async function validateCredentials () {
    return axios.post(`${window.env.api}/login`)
  }

  return (
    <div className='login-view'>
      <h1>Hello!</h1>
      <div className='panel'>
        <div className='row'>
          <label className='col-3'>username:</label>
          <input type='text' className={`col-9 username`}/>
        </div>

        <div className='row'>
          <label className='col-3'>password:</label>
          <input type='password' className={`col-9 password`}/>
        </div>
        <LinkButton className='submit' path='/dashboard' test={validateCredentials}></LinkButton>
      </div>
    </div>
  )
}

const PropsRoute = ({component: C, ...props}) => {
  return (
    <Route {...props} render={(routeProps) => {
      const mergedProps = Object.assign({}, routeProps, props)
      // return React.createElement(component, mergedProps)
      return <C {...mergedProps} />
    }}/>
  )
}

const Missing = () => {
  return (
    <div>
      404 page not found
    </div>
  )
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        id: 1,
        first_name: 'Dhani',
        mayfield_name: 'Mayfield'
      }
    }
  }

  componentDidMount () {
    console.log(sharedUtils.obj)
  }

  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <PropsRoute path='/dashboard' component={Dashboard} user={this.state.user}/>
          <Route path ='/rtc' component={WebRTCPlayground} />
          <Route component={Missing} />
        </Switch>
      </main>
    )
  }
}