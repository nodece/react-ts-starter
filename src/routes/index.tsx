import {Route, Switch} from 'react-router-dom'
import * as React from 'react'
import About from '../components/About'
import NotFind from '../components/error/NotFind'
import Loadable from 'react-loadable'

function Loading(props: any) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>
    } else if (props.pastDelay) {
      return <div>Loading...</div>
    } else {
      return null
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>
  } else {
    return null
  }
}

const LoadableComponent = Loadable({
  loader: () => import('../components/Main'),
  loading: Loading,
})

export function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/" component={LoadableComponent}/>
      <Route path="/about" component={About}/>
      <Route component={NotFind}/>
    </Switch>
  )
}
