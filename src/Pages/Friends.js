
import React from 'react';
import { NavLink } from 'react-router-dom';
//import FileInput from '../components/FileInput/FileInput';
import pictures from '../components/assets/pictures/avatar.png'
// Import css
import './style/Friends/friends.css';
import './style/logo.css'
export default function Friends() {

  return (
    <div className="container_friends">
      
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>MR boloré</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Patrick Balkani</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Isabelle Balkani</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Carlos Ghosn</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Harry Potter</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Hagrid chez plus son nom</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Obi-Wan Kenobi</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Emmanuel Macron</NavLink>
        <NavLink to="/profile" className="children_children_friends"><img className="profiles-img" src={pictures} alt=""/>Brigitte Bardo</NavLink>
        
    </div>
  );
  }
//!sur les navlink recuéperer l'id du profil cliquer 
