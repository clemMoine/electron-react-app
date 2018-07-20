// @flow

// Libraries
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

// Sagas
import rootSaga from 'Sagas/'

// Store
import configureStore from 'Redux/CreateStore'

// Reducer
import { reducer as startupReducer } from 'Redux/StartupRedux'

// Resources
import { rootReducer as apiReducer } from 'Resources/ApiResource'

// Config
import ReduxPersist from 'Config/ReduxPersist'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  let rootReducer = combineReducers({
    startup: startupReducer,
    api: apiReducer
  })

  /* ------------- Config persistant store ------------- */
  if (ReduxPersist.active) {
    rootReducer = persistReducer(ReduxPersist.storeConfig, rootReducer)
  }

  return configureStore(rootReducer, rootSaga)
}
