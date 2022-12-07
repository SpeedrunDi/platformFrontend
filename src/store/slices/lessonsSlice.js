import { createSlice } from '@reduxjs/toolkit'

const name = 'lessons'

export const initialState = {
  lesson: null,
  loading: false,
  error: null,
}

const lessonsSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchLessonRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchLessonSuccess(state, { payload: lesson }) {
      state.loading = false
      state.lesson = lesson
    },
    fetchLessonFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    createLessonRequest(state) {
      state.loading = true
      state.error = null
    },
    createLessonSuccess(state) {
      state.loading = false
    },
    createLessonFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    addContentInLesson(state, action) {
      state.lesson.data = [...state.lesson.data, action.payload]
    },
    changeLessonText(state, { payload: { index, value } }) {
      state.lesson.data[index].description = value
    },
    changeLessonAudio(state, { payload: { index, file } }) {
      state.lesson.data[index].audio = file
    },
    editLessonRequest(state) {
      state.loading = true
      state.error = null
    },
    editLessonSuccess(state) {
      state.loading = false
    },
    editLessonFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export default lessonsSlice
