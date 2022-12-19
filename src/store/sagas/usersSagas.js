import { put, takeEvery } from 'redux-saga/effects'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import axiosApi from '../../axiosApi'
import { historyPush } from '../actions/historyActions'
import {
  facebookLoginFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  getAllUsersFailure,
  getAllUsersRequest,
  getAllUsersSuccess,
  googleLoginFailure,
  googleLoginRequest,
  googleLoginSuccess,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  logoutUser,
  registrationFailure,
  registrationRequest,
  registrationSuccess,
  verifyUserFailure,
  verifyUserRequest,
  verifyUserSuccess,
  vkLoginFailure,
  vkLoginRequest,
  vkLoginSuccess,
} from '../actions/usersActions'

export function* getAllUsersSaga() {
  try {
    const { data } = yield axiosApi('/users')
    yield put(getAllUsersSuccess(data))
  } catch (e) {
    yield put(getAllUsersFailure(e.response.data))
  }
}

export function* registrationUserSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users', userData)
    yield put(registrationSuccess(response.data))
    // yield put(historyPush('/'))
    yield toast.success('Подтвердите email', {
      position: 'top-right',
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(registrationFailure(e.response.data))
    }
  }
}

export function* loginUserSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/sessions', userData)
    yield put(loginUserSuccess(response.data))
    if (userData) {
      yield put(historyPush('/'))
    }
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(loginUserFailure(e.response.data))
    }
  }
}

export function* facebookLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/facebookLogin/', userData)
    yield put(facebookLoginSuccess(response.data))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(facebookLoginFailure(e.response.data))
    }
  }
}

export function* googleLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/googleLogin/', userData)
    yield put(googleLoginSuccess(response.data))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(googleLoginFailure(e.response.data))
    }
  }
}

export function* vkLoginSaga({ payload: userData }) {
  try {
    const response = yield axiosApi.post('/users/vkLogin/', userData)
    yield put(vkLoginSuccess(response.data))
    yield put(historyPush('/'))
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(vkLoginFailure(e.response.data))
    }
  }
}

export function* logoutUserSaga() {
  try {
    yield axiosApi.delete('users/sessions')
    yield put(historyPush('/'))
    yield Cookies.remove('jwt')
  } catch (e) {}
}

export function* verifyUserSaga(confirmationCode) {
  try {
    const response = yield axiosApi.get(`/users/confirm/${confirmationCode.payload}`)
    yield put(verifyUserSuccess(response.data))
  } catch (e) {
    yield put(verifyUserFailure(e))
  }
}

const userSagas = [
  takeEvery(getAllUsersRequest, getAllUsersSaga),
  takeEvery(registrationRequest, registrationUserSaga),
  takeEvery(loginUserRequest, loginUserSaga),
  takeEvery(logoutUser, logoutUserSaga),
  takeEvery(facebookLoginRequest, facebookLoginSaga),
  takeEvery(googleLoginRequest, googleLoginSaga),
  takeEvery(vkLoginRequest, vkLoginSaga),
  takeEvery(verifyUserRequest, verifyUserSaga),
]

export default userSagas
