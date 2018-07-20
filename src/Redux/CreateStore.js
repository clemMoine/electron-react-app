// Libraries
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

// Actions
import StartupActions from 'Redux/StartupRedux'

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

  const sagaMiddleware = createSagaMiddleware()

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

  // we'll create the store
  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  // startup
  store.dispatch(StartupActions.startup())

  return store
}
