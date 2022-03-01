import { combineReducers } from 'redux'
import photosReducer from './photosReduser'

const rootReducer = combineReducers({
	photos: photosReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export default rootReducer