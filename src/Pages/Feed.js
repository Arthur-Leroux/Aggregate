import React from 'react';
import './style/Feed/feed.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

import data from '../components/assets/data/dummyData';

export default function Feed() {
	return (
		<>
			<div className='home'>
				<div className='home_blur'>
					{data.map((user) => {
						return (
							<div key={user.id} className='container'>
								<div className='home_post'>
									<div className='homeTop'>
										<div className='home_user'>
											<p></p>
											<img
												className='profile_img'
												alt='profile pic'
												src={user.profilePicture}
											></img>
											<span className='profile_name'>{user.username}</span>
											<span className='post_date'>{user.date}</span>
										</div>
									</div>
									<div className='homeCenter'>
										{user.photo === null ? (
											user.desc
										) : (
											<img
												className='postImg'
												src={user.photo}
												alt='userpic'
											></img>
										)}

										<div className='subtext'>
											<SubdirectoryArrowRightIcon />
											<p className='img_label'>{user.desc}</p>
										</div>
										<span className='postText'>{user.description}</span>
									</div>
									<div className='homeBottom'>
										<div className='home_post_buttons'>
											<FavoriteIcon className='likeIcon' />
											<span className='postLikeCounter'>{user.like}</span>

											<CommentIcon className='commentIcon' />
											<PersonAddIcon className='addIcon' />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
