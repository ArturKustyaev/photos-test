import axios, { AxiosResponse } from 'axios'
import { IParams } from '../components/PhotoList'
const url = `https://jsonplaceholder.typicode.com/`

const setParams = (params: IParams): URLSearchParams => {
	let searchParameters = new URLSearchParams()

	Object.keys(params).forEach(parameterName => {
		if (params[parameterName]) {
			const param: string = params[parameterName].toString()
			searchParameters.append(parameterName, param)
		}
	})

	return searchParameters
}

export const photosApi = {
	fetchPhotos: (params: IParams): Promise<AxiosResponse> => {
		const _params = setParams(params)

		return axios.get(`${url}photos?${_params}`)
	},
	deletePhoto: (id: number): Promise<AxiosResponse> => {
		return axios.delete(`${url}photos/${id}`)
	},
	fetchAlbums: (): Promise<AxiosResponse> => {
		return axios.get(`${url}albums`)
	}
}
