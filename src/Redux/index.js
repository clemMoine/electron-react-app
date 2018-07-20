// @flow

import { combineReducers } from 'redux'
import configureStore from 'Redux/CreateStore'
import rootSaga from 'Sagas/'

// Reducer
import { reducer as startupReducer } from 'Redux/StartupRedux'

// Resources
import { rootReducer as apiReducer } from 'Resources/ApiResource'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    startup: startupReducer,
    api: apiReducer
  })

  return configureStore(rootReducer, rootSaga)
}
