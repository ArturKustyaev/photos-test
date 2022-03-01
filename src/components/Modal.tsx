import { Modal as ModalMUI, Skeleton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../store/reducers'

const useStyles = makeStyles({
	modal: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center'
	},
	body: {
		background: 'white',
		height: '100%',
		maxHeight: '400px',
		maxWidth: '400px',
		overflow: 'hidden',
		width: '100%'
	},
	photo: {
		height: 'auto',
		verticalAlign: 'middle',
		width: '100%'
	}
})

interface ModalProps {
	onClose: () => void
	open: boolean
}

const Modal: React.FC<ModalProps> = ({ onClose, open }) => {
	const classes = useStyles()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { selectedPhotoUrl } = useSelector((state: AppStateType) => state.photos)

	const closeHandler = (): void => {
		onClose()
		setIsLoading(false)
	}

	const onPhotoLoad = (): void => {
		setIsLoading(true)
	}

	return (
		<ModalMUI className={classes.modal} open={open} onClose={closeHandler}>
			<Box className={classes.body}>
				{!isLoading && <Skeleton animation='wave' variant='rectangular' width={400} height={400} />}
				<img className={classes.photo} onLoad={onPhotoLoad} src={selectedPhotoUrl} alt='photo' />
			</Box>
		</ModalMUI>
	)
}

export default Modal
