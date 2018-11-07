import * as React from "react"
import { hot } from 'react-hot-loader'
import Hello from './pages/hello'

class App extends React.Component {
  render () {
    return (
      <div>react-ts
        <Hello text="aaa" count={1} />
      </div>
    )
  }
}

export default hot(module)(App)
