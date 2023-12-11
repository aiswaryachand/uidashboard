import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Item({ icon, name, link }) {
	let navigate = useNavigate();
	let handlenav = (data) => {
		navigate(`${data}`);
	};
	const subheading = {
		true: {
			opacity: 1,
		},
		false: {
			opacity: 0,
			display: 'none',
		},
	};

	const iconVariant = {
		true: {
			marginLeft: '0px',
		},
		false: {},
	};

	const itemVariant = {
		true: { margin: '7px 10px' },
		false: {
			margin: '2px 3px',
		},
	};

	return (
		<motion.div
			className='item'
			whileHover={{
				cursor: 'pointer',
				borderLeft: '3px solid #0C64F8',
				borderRadius: '3px',
				color: '#0C64F8',
			}}
			transition={{
				type: 'none',
				duration: 0.1,
			}}
			variants={itemVariant}
            onClick={()=>handlenav(link)}
		>
			<motion.div
				className='icon'
				transition={{
					duration: 0.1,
				}}
				variants={iconVariant}
			>
				{icon}
			</motion.div>
			<motion.span
				className='name'
				transition={{
					duration: 0.1,
				}}
				variants={subheading}
			>
				{name}
			</motion.span>
		</motion.div>
	);
}

export default Item;