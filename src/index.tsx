import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {default as DevTools, setLogEnabled, setUpdatesEnabled} from 'mobx-react-devtools'
import {AppContainer as HotContainer} from 'react-hot-loader'
import App from './App'

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('app'))
}

if (process.env.NODE_ENV === 'production') {
  renderRoot((
    <App/>
  ))
} else {
  // mobx log
  setLogEnabled(true)
  setUpdatesEnabled(true)

  // webpack hot reload interface
  renderRoot((
    <div>
      <HotContainer>
        <App/>
      </HotContainer>
      <DevTools/>
    </div>
  ))
  if (module.hot) {
    module.hot.accept('./App', async () => {
      console.log('update by module.hot')
      const NextApp = (await import('./App')).default
      renderRoot((
        <div>
          <HotContainer>
            <NextApp/>
          </HotContainer>
          <DevTools/>
        </div>
      ))
    })
  }
}
