import React from 'react';
import Navbar from './Navbar';
import SalesInfo from './SalesInfo';
import InfoTable from './InfoTable';

function Dashboard() {
	return (
		<>
			<div className='container'>
				<Navbar />
				<SalesInfo />
				<InfoTable />
			</div>
		</>
	);
}

export default Dashboard;