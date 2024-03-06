import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type FnType = typeof store.getState
type IRootState = ReturnType<FnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
