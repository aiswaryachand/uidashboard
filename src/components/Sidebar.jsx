import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Item from './Item';

function Sidebar() {
	const SidebarData = [
		{
			title: 'Dashboard',
			icon: <GridViewRoundedIcon />,
			link: '/dashboard',
		},
		{
			title: 'Lab Test',
			icon: <AssignmentTurnedInOutlinedIcon />,
			link: '/lab-test',
		},
		{
			title: 'Appointment',
			icon: <EventAvailableRoundedIcon />,
			link: '/appointment',
		},
		{
			title: 'Medicine Order',
			icon: <LocalMallRoundedIcon />,
			link: '/order',
		},
		{
			title: 'Message',
			icon: <MarkChatUnreadOutlinedIcon />,
			link: '/message',
		},
		{
			title: 'Payment',
			icon: <AccountBalanceWalletOutlinedIcon />,
			link: '/payment',
		},
		{
			title: 'Settings',
			icon: <SettingsOutlinedIcon />,
			link: '/settings',
		},
	];

	const [open, setOpen] = useState(true);

	

	const handleToggle = () => {
		setOpen(!open);
	};

	const sideContainerVariants = {
		true: {
			width: '19rem',
			flex: '0.05',
		},
		false: {
			transition: {
				delay: 0.6,
			},
		},
	};

	const sidebarVariants = {
		true: {},
		false: {
			width: '3rem',
			transition: {
				delay: 0.4,
			},
		},
	};

	const logoVariants = {
		true: {
			alignSelf: 'center',
			width: '8rem',
		},
		false: {
			alignSelf: 'flex-start',
			marginTop: '2rem',
			marginBottom: '1rem',
			width: '3rem',
			fontSize: '18px',
			padding: '2px',
		},
	};

	return (
		<motion.div
			data-open={open}
			variants={sideContainerVariants}
			initial={`${open}`}
			animate={`${open}`}
			className='Sidebar'
		>
			<motion.div
				initial={`${open}`}
				animate={`${open}`}
				variants={sidebarVariants}
				className='sidebar-container'
			>
				<motion.div
					whileHover={{
						scale: 1.2,
						rotate: 90,
						transition: {
							delay: 0.4,
							duration: 0.4,
						},
					}}
					onClick={handleToggle}
					className='menu_icon'
				>
					<TocRoundedIcon />
				</motion.div>
				<motion.div
					layout
					initial={`${open}`}
					animate={`${open}`}
					variants={logoVariants}
					className='heading'
					transition={{ duration: 0.4 }}
				>
					Medico Sales
				</motion.div>
				<div className='sidebar-layout'>
					<div className='SidebarList'>
						{SidebarData.map((e, i) => {
							const iconComponent = getIconComponent(e.title);
							return (
								<>
									<div className='row' key={i}>
										<Item icon={iconComponent} name={e.title} link={e.link}/>
									</div>
								</>
							);
						})}
					</div>

					<div className='SidebarList'>
						<div className='row'>
							<Item icon={<HelpOutlineRoundedIcon />} name={'Help'} />
						</div>
					</div>

				</div>
			</motion.div>
		</motion.div>
	);
}

function getIconComponent(title) {
	switch (title) {
		case 'Dashboard':
			return <GridViewRoundedIcon />;
		case 'Lab Test':
			return <AssignmentTurnedInOutlinedIcon />;
		case 'Appointment':
			return <EventAvailableRoundedIcon />;
		case 'Medicine Order':
			return <LocalMallRoundedIcon />;
		case 'Message':
			return <MarkChatUnreadOutlinedIcon />;
		case 'Payment':
			return <AccountBalanceWalletOutlinedIcon />;
		case 'Settings':
			return <SettingsOutlinedIcon />;
		default:
			return null;
	}
}

export default Sidebar;