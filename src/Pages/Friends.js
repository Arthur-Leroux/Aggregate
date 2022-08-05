import React, { useState } from 'react';
import './style/Friends/friends.css';
import './style/logo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import users from '../components/assets/data/myFriends';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Friends() {
	const [isFriend, setIsFriend] = useState(false);
	const friendHandler = () => {
		setIsFriend(!isFriend);
	};
	return (
		<>
			<div className='container_friends'>
				{users.map((user) => {
					return (
						<Card
							key={user.id}
							className={isFriend ? 'friend_card--hide' : 'friend_card'}
							onClick={friendHandler}
							sx={{ maxWidth: 345 }}
						>
							<CardActionArea>
								<CardMedia
									component='img'
									height='140'
									image={user.profilePicture}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										{user.username}
										<PersonAddIcon className='friendTag' />
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{user.desc}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
			</div>
		</>
	);
}
