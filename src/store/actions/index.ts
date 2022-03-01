import { IFetchPhotosSuccessResponse } from './interfaces'
import { IParams } from './../../components/PhotoList'
import { ActionType, ActionCreatorsType } from './types'
import { photosApi } from '../../api/photosApi'
import { IAlbum } from '../../components/Filter'
import { Dispatch } from 'redux'
import { AxiosResponse } from 'axios'

const fetchStart = (): ActionCreatorsType => ({
	type: ActionType.FETCH_START
})

const fetchError = (error: string): ActionCreatorsType => ({
	type: ActionType.FETCH_ERROR,
	payload: error
})

export const fetchPhotos = (params: IParams) => (dispatch: Dispatch<ActionCreatorsType>) => {
	dispatch(fetchStart())

	photosApi
		.fetchPhotos(params)
		.then((response: AxiosResponse) => {
			const data: IFetchPhotosSuccessResponse = {
				data: response.data,
				count: +response.headers['x-total-count']
			}
			dispatch(fetchPhotosSuccess(data))
		})
		.catch(error => dispatch(fetchError(error.message)))
}

const fetchPhotosSuccess = (response: IFetchPhotosSuccessResponse): ActionCreatorsType => ({
	type: ActionType.FETCH_PHOTOS,
	payload: response
})

export const fetchAlbums = () => (dispatch: Dispatch<ActionCreatorsType>) => {
	photosApi
		.fetchAlbums()
		.then((response: AxiosResponse) => dispatch(fetchAlbumsSuccess(response.data)))
		.catch(error => dispatch(fetchError(error.message)))
}

const fetchAlbumsSuccess = (albums: Array<IAlbum>): ActionCreatorsType => ({
	type: ActionType.FETCH_ALBUMS,
	payload: albums
})

export const deletePhoto = (id: number) => (dispatch: Dispatch<ActionCreatorsType>) => {
	photosApi
		.deletePhoto(id)
		.then((response: AxiosResponse) => {
			dispatch(deletePhotoSuccess(id))
			console.log('Запрос отработал, статуc: ', response.status)
		})
		.catch(error => dispatch(fetchError(error.message)))
}

const deletePhotoSuccess = (id: number): ActionCreatorsType => ({
	type: ActionType.DELETE_PHOTO,
	payload: id
})

export const setPage = (page: number): ActionCreatorsType => ({
	type: ActionType.SET_PAGE,
	payload: page
})

export const setFilter = (albumId: string): ActionCreatorsType => ({
	type: ActionType.SET_FILTER,
	payload: albumId
})

export const setOrder = (): ActionCreatorsType => ({
	type: ActionType.SET_ORDER
})

export const setSort = (sortField: string): ActionCreatorsType => ({
	type: ActionType.SET_SORT,
	payload: sortField
})

export const selectPhoto = (photoUrl: string): ActionCreatorsType => ({
	type: ActionType.SELECT_PHOTO,
	payload: photoUrl
})
