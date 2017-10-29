import {Route, Switch} from 'react-router-dom'
import * as React from 'react'
import About from '../components/About'
import NotFind from '../components/error/NotFind'
import Loadable from 'react-loadable'

const Main = Loadable({
  loader: () => import('../components/Main'),
  loading: (() => null),
})

export function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route component={NotFind}/>
    </Switch>
  )
}
