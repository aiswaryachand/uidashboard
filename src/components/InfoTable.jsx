import React from 'react';
import { tableData } from '../data/tableData.mjs';

import '../App.css';

function InfoTable() {
	return (
		<div className='table-container'>
			<div className='small-table'>
				<table className='custom-table'>
					<thead>
						<tr>
							<th>
								<input type='checkbox' />
							</th>
							<th>Invoice ID</th>
							<th>Date</th>
							<th>Customer</th>
							<th>Payable Amount</th>
							<th>Paid Amount</th>
							<th>Due</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((e, i) => {
							return (
								<tr key={i}>
									<td>
										<input type='checkbox' />
									</td>
									<td>{e.id}</td>
									<td>{e.date}</td>
									<td>{e.customer}</td>
									<td>{e.payableAmount}</td>
									<td>{e.paidAmount}</td>
									<td>{e.due}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default InfoTable;