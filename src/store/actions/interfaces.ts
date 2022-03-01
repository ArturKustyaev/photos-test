import { ActionType } from './types'
import { IPhoto } from '../../components/PhotoList'
import { IAlbum } from '../../components/Filter'

export interface IFetchStart {
	type: typeof ActionType.FETCH_START
}

export interface IFetchError {
	type: typeof ActionType.FETCH_ERROR
	payload: string
}

export interface IFetchPhotosSuccessResponse {
	data: Array<IPhoto>
	count: number
}

export interface IFetchPhotosSuccess {
	type: typeof ActionType.FETCH_PHOTOS
	payload: IFetchPhotosSuccessResponse
}

export interface IFetchAlbumsSuccess {
	type: typeof ActionType.FETCH_ALBUMS
	payload: Array<IAlbum>
}

export interface IDeletePhotoSuccess {
	type: typeof ActionType.DELETE_PHOTO
	payload: number
}

export interface ISetPage {
	type: typeof ActionType.SET_PAGE
	payload: number
}

export interface ISetFilter {
	type: typeof ActionType.SET_FILTER
	payload: string
}

export interface ISetOrder {
	type: typeof ActionType.SET_ORDER
}

export interface ISetSort {
	type: typeof ActionType.SET_SORT
	payload: string
}

export interface ISelectPhoto {
	type: typeof ActionType.SELECT_PHOTO
	payload: string
}
