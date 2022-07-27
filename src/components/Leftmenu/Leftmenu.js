import React,{ useState } from 'react';
//import { UserContext } from '../FeedProvider/FeedProvider'
import axios from 'axios';

//Import css
import './leftmenu.css'

export default function Leftmenu() {

  const [search, setSearch] = useState('');
  //const { SetSearch } = useContext(UserContext);
  const [myProfile, setMyProfile] = useState([])

  function handleClick(event){
    event.preventDefault();
   console.log(handleClick)
  }
  
  axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/users/`, //TODO: Remplacer cette adresse par celle du Back
    params: { },
  })
    .then((response) => {
      console.log('response :', response);
    })
    .catch((error) => {
      console.log('error :', error);
      //SetSearch(false);
    });

  return (
    <div>
    <form className='form'>
      <input 
      type ="search" 
      placeholder='Search' 
      value ={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      ></input>
      </form>
      <h2 className='form_title' onClick={handleClick} value={myProfile} onChange={(e)=>{
        setMyProfile(e.target.value);
      }}
      >My profile</h2>
      <h2 className='form_title' onClick={handleClick}>My Jobs</h2>
      <h2 className='form_title' onClick={handleClick}>My Friends</h2>
      

    
    </div>


  )
}
