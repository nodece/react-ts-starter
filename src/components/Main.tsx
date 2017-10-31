import * as React from 'react'
import {inject, observer} from 'mobx-react'
import TestStore from '../stores/TestStore'
import {Link} from 'react-router-dom'
import {Button} from 'antd'

import styles from './main.scss'
import 'antd/lib/button/style'

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
          <Button onClick={() => this.props.testStore.updateId()}>Add</Button>
          <Link to={{pathname: 'about'}}>
            <Button>
              GO About
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}
