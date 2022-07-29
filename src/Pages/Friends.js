import React from 'react';
import { NavLink } from 'react-router-dom';
// Import css
import './style/Friends/friends.css';
export default function Friends() {

  return (
    <div className="container_friends">
      
        <NavLink to="/profile" className="children_children_friends">MR boloré</NavLink>
        <NavLink to="/profile" className="children_children_friends">Patrick Balkani</NavLink>
        <NavLink to="/profile" className="children_children_friends">Isabelle Balkani</NavLink>
        <NavLink to="/profile" className="children_children_friends">Carlos Ghosn</NavLink>
        <NavLink to="/profile" className="children_children_friends">Harry Potter</NavLink>
        <NavLink to="/profile" className="children_children_friends">Agrid chez plus son nom</NavLink>
        <NavLink to="/profile" className="children_children_friends">Obiwan Kenobi</NavLink>
        <NavLink to="/profile" className="children_children_friends">Emmanuel Macron</NavLink>
        <NavLink to="/profile" className="children_children_friends">Brigitte Bardo</NavLink>
      
    </div>
  );
  }
//!sur les navlink recuéperer l'id du profil cliquer 
