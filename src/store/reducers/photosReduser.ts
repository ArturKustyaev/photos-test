import { IInitialState } from './interfaces';
import { ActionType, ActionCreatorsType } from './../actions/types';
import { sortFields } from './constants'


const initialState: IInitialState = {
	albums: [],
	count: 1,
	error: null,
	filterByAlbumId: '',
	isFetching: false,
	limit: 12,
	orderReverse: false,
	page: 1,
	photos: [],
	selectedPhotoUrl: '',
	sort: sortFields.id.value
}

const photosReducer = (state: IInitialState = initialState, action: ActionCreatorsType): IInitialState => {
	switch (action.type) {
		case ActionType.FETCH_START: {
			return {
				...state,
				isFetching: true
			}
		}
		case ActionType.FETCH_ERROR: {
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		}
		case ActionType.FETCH_PHOTOS: {
			return {
				...state,
				isFetching: false,
				error: null,
				count: action.payload.count,
				photos: [...action.payload.data]
			}
		}
		case ActionType.FETCH_ALBUMS: {
			return {
				...state,
				isFetching: false,
				error: null,
				albums: [...action.payload]
			}
		}
		case ActionType.DELETE_PHOTO:
			return {
				...state,
				photos: state.photos.filter(photo => photo.id !== action.payload)
			}
		case ActionType.SET_PAGE: {
			return {
				...state,
				page: action.payload
			}
		}
		case ActionType.SET_FILTER: {
			return {
				...state,
				page: 1,
				filterByAlbumId: action.payload
			}
		}
		case ActionType.SELECT_PHOTO: {
			return {
				...state,
				selectedPhotoUrl: action.payload
			}
		}
		case ActionType.SET_SORT: {
			return {
				...state,
				sort: sortFields[action.payload].value
			}
		}
		case ActionType.SET_ORDER: {
			return {
				...state,
				orderReverse: !state.orderReverse
			}
		}
		default:
			return state
	}
}

export default photosReducer
