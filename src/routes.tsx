import * as React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

import { WrappedRoute } from './components/WrappedRoute'
import { AuthHOC } from './components/AuthHOC'

import { FrontPage } from './pages/FrontPage'
import { LoginPage } from './pages/LoginPage'
import { UsersPage } from './pages/UsersPage'

export const Routes = () : React.ReactElement<any> => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <WrappedRoute exact path="/" component={FrontPage}/>
      <WrappedRoute exact path="/login" component={LoginPage}/>
      <WrappedRoute exact path="/users" component={AuthHOC(UsersPage)}/>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)
