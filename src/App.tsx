import { Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import PhotoList from './components/PhotoList'
import store from './store'

const App: React.FC = () => {
	const theme = createTheme()

	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Container sx={{ mt: '20px' }}>
					<PhotoList />
				</Container>
			</Provider>
		</ThemeProvider>
	)
}

export default App
