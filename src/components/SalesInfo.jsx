import React from 'react';
import { salesInfo } from '../data/salesInfo.mjs';

function SalesInfo() {
	return (
		<div className='salesInfo'>
			<div className='wrapper'>
				<div className='title'>Sales Information</div>
				<div className='sales-search'>	
					{salesInfo.map((e, i) => {
						return (
							<>
								<div key={i}>
									<div className='sales-title'>{e.title}</div>
									<div className='sales-input'>
										<input type='text' placeholder={`${e.placeholder}`} />
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default SalesInfo;