import * as React from 'react'
import {inject, observer} from 'mobx-react'
import TestStore from '../stores/TestStore'
import styles from './main.scss'
import {Link} from 'react-router-dom'

interface Prop {
  testStore: TestStore,
}

interface State {
}

@inject('testStore')
@observer
export default class Main extends React.Component <Prop, State> {
  public render() {
    return (
      <div>
        <div>
          {JSON.stringify(this.props.testStore.id)}
          <button className={styles.test} onClick={() => this.props.testStore.updateId()}>Add</button>
          <Link to={{pathname: 'about'}}>GO About</Link>
        </div>
      </div>
    )
  }
}
