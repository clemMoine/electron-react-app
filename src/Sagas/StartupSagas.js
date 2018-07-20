import { delay } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'

// Actions
import StartupActions from 'Redux/StartupRedux'

// Resources
import { types as apiTypes, actions as apiActions } from 'Resources/ApiResource'

/**
 * Déclenchée au démarrage de l'application
 * @param action
 */
export function* startup(action) {
  // Fake waiting
  yield call(delay, 1000)

  // Récupération du profil
  yield put(apiActions.getApi())
  yield take(
    ({ status, type }) => type === apiTypes.GET_API && status !== 'pending'
  )

  // Démarrage ok
  yield put(StartupActions.startupDone())
}
