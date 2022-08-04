import React, { useContext, useState } from 'react';
import './style/Feed/feed.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { ArticlesContext } from '../components/ArticlesProvider/ArticlesProvider';
import ArticlesProvider from '../components/ArticlesProvider/ArticlesProvider';
import FileInput from '../components/FileInput/FileInput';

export default function Feed() {
	const { articles } = useContext(ArticlesContext);

	const [isLiked, setIsLiked] = useState(false);
	const likeHandler = () => {
		setIsLiked(!isLiked);
	};

	const [isFriend, setIsFriend] = useState(false);
	const friendHandler = () => {
		setIsFriend(!isFriend);
	};

	return (
		<>
			<div className='home'>
				<div className='home_blur'>
					<div className='user_post'>
						<form className='user_post_form'>
							<input
								className='user_post_message'
								placeholder='Type your message'
							></input>
							<p>or</p>
							<div className='picUploader'>
								<FileInput />
							</div>
							<button type='submit' className='user_post_form_submit_btn'>
								SEND
							</button>
						</form>
					</div>
					{articles.map((user) => {
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
											<p></p>
										) : (
											<img
												className='postImg'
												src={user.photo}
												alt='userpic'
											></img>
										)}

										<div className='subtext'>
											<SubdirectoryArrowRightIcon />
											{user.photo ? (
												<p className='img_label'>{user.desc}</p>
											) : (
												<span className='post_without_pics'>
													{user.content}
												</span>
											)}
										</div>
										<span className='postText'>{user.description}</span>
									</div>
									<div className='homeBottom'>
										<div className='home_post_buttons'>
											<FavoriteIcon
												className={isLiked ? 'likeIcon--liked' : 'likeIcon'}
												onClick={likeHandler}
											/>
											<span className='postLikeCounter'>{user.like}</span>
											<div className='comments'>
												<CommentIcon className='commentIcon' />
												<span className='commentCounter'>{user.comments}</span>
											</div>
											<PersonAddIcon
												className={isFriend ? 'addIcon--friend' : 'addIcon'}
												onClick={friendHandler}
											/>
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
