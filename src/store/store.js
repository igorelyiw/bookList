import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import booksSlice from './booksSlice'

const store = configureStore({
  reducer:{
    books: booksSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store