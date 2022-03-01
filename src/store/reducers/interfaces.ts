import { IPhoto } from './../../components/PhotoList';
import { IAlbum } from './../../components/Filter';

export interface IInitialState {
	albums: Array<IAlbum>
	count: number
	error: string | null
	filterByAlbumId: string
	isFetching: boolean
	limit: number
	orderReverse: boolean
	page: number
	photos: Array<IPhoto>
	selectedPhotoUrl: string
	sort: string
}

export interface ISortFields {
	[key: string]: {
		value: string
		title: string
	}
}