import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './features/taskSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        tasks: taskSlice
    }
  })
}