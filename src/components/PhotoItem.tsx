import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Skeleton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePhoto } from '../store/actions'
import { IPhoto } from './PhotoList'

const useStyles = makeStyles({
	wrapper: {
		cursor: 'pointer',
		maxHeight: '150px',
		overflow: 'hidden',
		position: 'relative',
	},
	photo: {
		maxHeight: '150px',
		width: '100%'
	},
	close_button: {
		color: 'gray',
		position: 'absolute',
		right: '4px',
		top: '4px',
	}
})

interface IPhotoItemProps {
	photo: IPhoto
	onClick: (photoUrl: string) => void
}

const PhotoItem: React.FC<IPhotoItemProps> = ({ onClick, photo }) => {
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()
	const classes = useStyles()

	const onPhotoLoad = () => {
		setIsLoading(false)
	}

	const handleDelete = (): void => {
		dispatch(deletePhoto(photo.id))
	}

	const handleClick = (): void => {
		onClick(photo.url)
	}

	return (
		<div className={classes.wrapper}>
			{isLoading && <Skeleton animation='wave' variant='rectangular' width={'auto'} height={150} />}
			<IconButton className={classes.close_button} aria-label='close' onClick={handleDelete}>
				<CloseIcon />
			</IconButton>
			<img
				alt='photo'
				className={classes.photo}
				onClick={handleClick}
				onLoad={onPhotoLoad}
				src={photo.thumbnailUrl}
			/>
		</div>
	)
}

export default PhotoItem
