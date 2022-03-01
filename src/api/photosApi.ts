import axios from 'axios'
import { IParams } from '../components/PhotoList'
const url = `https://jsonplaceholder.typicode.com/`

export const photosApi = {
	fetchPhotos: (params: IParams) => {
		let searchParameters = new URLSearchParams()

		Object.keys(params).forEach(parameterName => {
			if (params[parameterName]) {
				const param: string = params[parameterName].toString()
				searchParameters.append(parameterName, param)
			}
		})

		return axios.get(`${url}photos?${searchParameters}`)
	},
	deletePhoto: (id: number) => {
		return axios.delete(`${url}photos/${id}`)
	},
	fetchAlbums: () => {
		return axios.get(`${url}albums`)
	}
}
