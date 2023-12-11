import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path='*' element={<Navigate to={'/dashboard'} />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;