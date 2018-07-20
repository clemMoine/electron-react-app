// Libraries
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

// Config
import ReduxPersist from 'Config/ReduxPersist'

// Services
import Rehydration from 'Services/Rehydration'

// Creation of the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Promise Middleware ------------- */

  middleware.push(
    promiseMiddleware({
      promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
    })
  )

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor =
    process.env.NODE_ENV !== 'production'
      ? console.tron.createSagaMonitor()
      : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Thunk Middleware ------------- */

  middleware.push(thunkMiddleware)

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = [
    'EFFECT_TRIGGERED',
    'EFFECT_RESOLVED',
    'EFFECT_REJECTED',
    'persist/REHYDRATE'
  ]

  if (process.env.NODE_ENV === 'development') {
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) =>
        SAGA_LOGGING_BLACKLIST.indexOf(type) === -1
    })

    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- Run ------------- */

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore =
    process.env.NODE_ENV !== 'production'
      ? console.tron.createStore
      : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
