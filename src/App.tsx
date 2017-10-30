import {Provider} from 'mobx-react'
import * as React from 'react'
import {Routes} from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import TestStore from './stores/TestStore'
import {useStrict} from 'mobx'

useStrict(true)

// new store
const store = {
  testStore: new TestStore()
}

export default class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Provider {...store}>
        <Router>
          <Routes/>
        </Router>
      </Provider>
    )
  }
}
