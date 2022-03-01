import {
	ISelectPhoto,
	ISetFilter,
	ISetOrder,
	ISetSort,
	ISetPage,
	IDeletePhotoSuccess,
	IFetchAlbumsSuccess,
	IFetchPhotosSuccess,
	IFetchError,
	IFetchStart
} from './interfaces'

export enum ActionType {
	FETCH_PHOTOS = 'FETCH_PHOTOS',
	FETCH_ALBUMS = 'FETCH_ALBUMS',
	DELETE_PHOTO = 'DELETE_PHOTO',
	FETCH_START = 'FETCH_START',
	FETCH_ERROR = 'FETCH_ERROR',
	SET_PAGE = 'SET_PAGE',
	SET_FILTER = 'SET_FILTER',
	SELECT_PHOTO = 'SELECT_PHOTO',
	SET_ORDER = 'SET_ORDER',
	SET_SORT = 'SET_SORT'
}

export type ActionCreatorsType =
	| ISelectPhoto
	| ISetFilter
	| ISetOrder
	| ISetSort
	| ISetPage
	| IDeletePhotoSuccess
	| IFetchAlbumsSuccess
	| IFetchPhotosSuccess
	| IFetchError
	| IFetchStart
