import React,{ useState } from 'react';
//import { UserContext } from '../FeedProvider/FeedProvider'
import axios from 'axios';
import Buttonprofile from '../Buttonprofile/Buttonprofile'
//Import css
import './leftmenu.css'

export default function Leftmenu() {

  //const [search, setSearch] = useState('');
  //const { SetSearch } = useContext(UserContext);
  const [myProfile, setMyProfile] = useState("")

  const handleClick =(event) =>{
    event.preventDefault();
    return(
      
          console.log(Buttonprofile)
    )
   
  
    
    
   
  }
    
  
  
  axios({
    method: 'get',
   // url: `https://jsonplaceholder.typicode.com/users/`, //TODO: Remplacer cette adresse par celle du Back
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
    <div className='form'>
    <form >
      <input 
      type ="search" 
      placeholder='Search' 
     // value ={search}
     
      
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
