import React, { Component } from 'react'

// Libraries
import moment from 'moment'
import 'moment/locale/fr'
import { Provider } from 'react-redux'
import createStore from 'Redux'

// Containers
import RootContainer from './RootContainer'

// Styles
import 'Theme/styles.less'

// Changement de la locale de moment
moment.locale('fr')

// Création du store
const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
