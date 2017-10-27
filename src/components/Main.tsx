import * as React from 'react'
import {inject, observer} from 'mobx-react'
import TestStore from '../stores/TestStore'
import styles from './main.scss'

interface State {
  count: number
}

@inject((allStores) => ({
  testStore: allStores.testStore as TestStore
}))

@observer
export default class Main extends React.Component <{ testStore: TestStore }, State> {
  public render() {
    return (
      <div>
        <div>
          {JSON.stringify(this.props.testStore.id)}
          <button className={styles.test} onClick={() => this.props.testStore.updateId()}>Add</button>
        </div>
      </div>
    )
  }
}
