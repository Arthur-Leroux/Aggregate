import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './fileinput.css';

const FileInput = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		if (selectedImage) {
			setImageUrl(URL.createObjectURL(selectedImage));
		}
	}, [selectedImage]);

	return (
		<>
			<div className='profile_pic'>
				{imageUrl && selectedImage && (
					<Box mt={2} textAlign='center'>
						<div></div>
						<img src={imageUrl} alt={selectedImage.name} height='100px' />
					</Box>
				)}
				<input
					accept='image/*'
					type='file'
					id='select-image'
					style={{ display: 'none' }}
					onChange={(e) => setSelectedImage(e.target.files[0])}
				/>
				<label className='upload_button' htmlFor='select-image'>
					<Button variant='contained' color='primary' component='span'>
						Upload Image
					</Button>
				</label>
			</div>
		</>
	);
};

export default FileInput;
