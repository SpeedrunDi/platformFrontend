import { put, takeEvery } from 'redux-saga/effects'
import axiosApi from '../../axiosApi'
import {
  createCourseFailure,
  createCourseRequest,
  createCourseSuccess,
  deleteCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  fetchCourseFailure,
  fetchCourseRequest,
  fetchCoursesFailure,
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCourseSuccess,
  updateCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
} from '../actions/coursesActions'

export function* fetchCourses() {
  try {
    const response = yield axiosApi('/courses')
    yield put(fetchCoursesSuccess(response.data))
  } catch (e) {
    yield put(fetchCoursesFailure(e))
  }
}

export function* fetchCourse({ payload: id }) {
  try {
    const response = yield axiosApi(`/courses/${id}`)
    yield put(fetchCourseSuccess(response.data))
  } catch (e) {
    yield put(fetchCourseFailure(e))
  }
}

export function* createCourse({ payload: courseData }) {
  try {
    yield axiosApi.post('/courses', courseData)
    yield put(createCourseSuccess())
  } catch (e) {
    yield put(createCourseFailure(e))
  }
}

export function* updateCourse({ payload }) {
  const { courseData, id } = payload

  try {
    yield axiosApi.put(`/courses/${id}`, courseData)
    yield put(updateCourseSuccess())
  } catch (e) {
    yield put(updateCourseFailure(e))
  }
}

export function* deleteCourse({ payload: id }) {
  try {
    yield axiosApi.delete(`/courses/${id}`)
    yield put(deleteCourseSuccess())
  } catch (e) {
    yield put(deleteCourseFailure(e))
  }
}

const coursesSagas = [
  takeEvery(fetchCoursesRequest, fetchCourses),
  takeEvery(fetchCourseRequest, fetchCourse),
  takeEvery(createCourseRequest, createCourse),
  takeEvery(updateCourseRequest, updateCourse),
  takeEvery(deleteCourseRequest, deleteCourse),
]

export default coursesSagas