import React, { Component } from 'react'

// Libraries
import moment from 'moment'
import 'moment/locale/fr'

// Containers
import RootContainer from './RootContainer'

// Styles
import 'Theme/styles.less'

// Changement de la locale de moment
moment.locale('fr')

class App extends Component {
  render() {
    return <RootContainer />
  }
}

export default App
