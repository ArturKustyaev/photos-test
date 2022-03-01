import {
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	Theme
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setOrder, setSort } from '../store/actions'
import { AppStateType } from '../store/reducers'
import { sortFields } from '../store/reducers/constants'

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		marginBottom: '24px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',

			'> *:last-child': {
				border: '1px solid red'
			}
		}
	},
	sort_input_wrapper: {
		display: 'flex',
		alignItems: 'center'
	},
	select: {
		marginRight: theme.spacing(3),
		minWidth: '100px',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			'&:not(:last-child)': {
				marginBottom: theme.spacing(2)
			}
		}
	}
}))

export interface IAlbum {
	userId: number
	id: number
	title: string
}

const Filter: React.FC = () => {
	const { filterByAlbumId, albums, sort, orderReverse } = useSelector(
		(state: AppStateType) => state.photos
	)

	const dispatch = useDispatch()

	const filterHanlder = (e: SelectChangeEvent<string>) => {
		dispatch(setFilter(e.target.value))
	}

	const handleChecked = (): void => {
		dispatch(setOrder())
	}

	const handleSort = (e: SelectChangeEvent<string>) => {
		dispatch(setSort(e.target.value))
	}

	const classes = useStyles()
	return (
		<Stack className={classes.wrapper} direction='row' alignItems='center'>
			<FormControl className={classes.select}>
				<InputLabel id='filter_field_label'>Фильтрация</InputLabel>
				<Select
					label='Фильтрация'
					labelId='filter_field_label'
					onChange={e => filterHanlder(e)}
					value={filterByAlbumId}
				>
					<MenuItem value={''}>Все</MenuItem>
					{albums.map(album => (
						<MenuItem key={album.id} value={album.id}>
							id альбома: {album.id}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl className={classes.select}>
				<InputLabel id='sort_field_label'>Сортировка</InputLabel>
				<Select
					autoWidth
					label='Сортировать по'
					labelId='sort_field_label'
					onChange={handleSort}
					value={sort}
				>
					{Object.keys(sortFields).map(sortField => {
						return (
							<MenuItem key={sortFields[sortField].value} value={sortFields[sortField].value}>
								{sortFields[sortField].title}
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
			<FormControlLabel
				control={<Checkbox checked={orderReverse} onChange={handleChecked} />}
				label='В обратном порядке'
			/>
		</Stack>
	)
}

export default Filter
