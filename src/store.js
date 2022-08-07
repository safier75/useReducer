import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './sli'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})