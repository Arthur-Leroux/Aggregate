import React from 'react';
import './style/NotFound/NotFound.css';

export default function NotFound() {
	return (
		<body className='bg-purple'>
			<div className='stars'>
				<div className='custom-navbar'>
					<div className='brand-logo'>
						<img
							src='http://salehriaz.com/404Page/img/logo.svg'
							width='80px'
							alt='logo'
						/>
					</div>
					<div className='navbar-links'>
						<ul>
							<li>
								<a
									href='http://salehriaz.com/404Page/404.html'
									target='_blank'
									rel='noreferrer'
								>
									Home
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='central-body'>
					<img
						className='image-404'
						src='http://salehriaz.com/404Page/img/404.svg'
						width='300px'
						alt='central_image'
					/>
					<a
						href='http://salehriaz.com/404Page/404.html'
						className='btn-go-home'
						target='_blank'
						alt='button_home'
						rel='noreferrer'
					>
						GO BACK HOME
					</a>
				</div>
				<div className='objects'>
					<img
						className='object_rocket'
						src='http://salehriaz.com/404Page/img/rocket.svg'
						width='40px'
						alt='rocket'
					/>
					<div className='earth-moon'>
						<img
							className='object_earth'
							src='http://salehriaz.com/404Page/img/earth.svg'
							width='100px'
							alt='earth'
						/>
						<img
							className='object_moon'
							src='http://salehriaz.com/404Page/img/moon.svg'
							width='80px'
							alt='moon'
						/>
					</div>
					<div className='box_astronaut'>
						<img
							className='object_astronaut'
							src='http://salehriaz.com/404Page/img/astronaut.svg'
							width='140px'
							alt='astronaut'
						/>
					</div>
				</div>
				<div className='glowing_stars'>
					<div className='star'></div>
					<div className='star'></div>
					<div className='star'></div>
					<div className='star'></div>
					<div className='star'></div>
				</div>
			</div>
		</body>
	);
}
