import { Grid, Pagination } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums, fetchPhotos, selectPhoto, setPage } from '../store/actions'
import Filter from './Filter'
import Modal from './Modal'
import PhotoItem from './PhotoItem'
import { AppStateType } from '../store/reducers'

export interface IPhoto {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export interface IParams {
	[key: string]: string | number
}

const PhotoList: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const { photos, page, count, filterByAlbumId, limit, orderReverse, sort } = useSelector(
		(state: AppStateType) => state.photos
	)

	const dispatch = useDispatch()

	useEffect(() => {
		const params: IParams = {
			_page: page,
			albumId: filterByAlbumId,
			_limit: limit,
			_sort: sort,
			_order: orderReverse ? 'desc' : 'asc'
		}

		dispatch(fetchPhotos(params))
	}, [page, filterByAlbumId, sort, orderReverse])

	useEffect(() => {
		dispatch(fetchAlbums())
	}, [])

	const handleChange = (value: number): void => {
		dispatch(setPage(value))
	}

	const openHandler = (photoUrl: string): void => {
		dispatch(selectPhoto(photoUrl))
		setIsOpen(true)
	}

	const closeHandler = () => {
		setIsOpen(false)
	}

	const useStyles = makeStyles({
		photos_wrapper: {
			marginBottom: '24px'
		},
		pagination: {
			'& > *': {
				justifyContent: 'center'
			}
		}
	})

	const classes = useStyles()

	return (
		<>
			<Filter />
			<Grid className={classes.photos_wrapper} columns={12} container spacing={3}>
				{photos.map(photo => (
					<Grid item xs={6} sm={3} md={2} key={photo.id}>
						<PhotoItem photo={photo} onClick={openHandler} />
					</Grid>
				))}
			</Grid>
			<Pagination
				className={classes.pagination}
				count={Math.ceil(count / limit)}
				page={page}
				onChange={(e, value) => handleChange(value)}
			/>
			<Modal open={isOpen} onClose={closeHandler} />
		</>
	)
}

export default PhotoList
