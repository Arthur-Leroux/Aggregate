import React, { useState, useContext } from 'react';
import './style/Friends/friends.css';
import './style/logo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import users from '../components/assets/data/myFriends';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { SearchContext } from '../components/SearchProvider/SearchProvider';

export default function Friends() {
	const [isFriend, setIsFriend] = useState(false);
	const friendHandler = () => {
		setIsFriend(!isFriend);
	};
	const { searchTerms } = useContext(SearchContext);

	const filteredFriends = users.filter((user) => {
		// Est-ce que la description/contenu ou username correspondent au terme recherché ?
		const descriptionMatches = user.desc
			.toLowerCase()
			.includes();
		const contentMatches = user.content.toLowerCase().includes(searchTerms);
		const usernameMatches = user.username.toLowerCase().includes(searchTerms);

		return descriptionMatches || contentMatches || usernameMatches;
	});

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
