import React from "react";
import Login from "./components/Login";
//import { BrowserRouter } from 'react-router-dom';
//import { useState } from "react";

const App = () => {
  // const [users, setUsers] = useState([
  //   { id: 1, nom: "Arthur Leroux" },
   
  // ]);

  return (
    <div>
      
        <Login />
     
    </div>
  );
  
  };



//**====================================================

//** essaie de hook a blanc

// // une fonction pure qui renvoie, pour un tableau de d'utilisateur donné
// // les utilisateurs inscrit en BDD
// //cas particulier si l'utilisateur n'est pas en BDD lui renvoyer un message
// const userLogin = (dataUser) => {
//   if (dataUser === dataElement) {
//     return console.log("/pageprincipale");

//    //** dataElement serait la table d'utilisateur en BDD ?
//   }
//   else {
//     console.log("tu n'est pas inscrit sur notre site");
//   }
// };
// function App() {
//   //**  Pourquoi setdataUser n'est jamais lu ?? a méditer pendant le repas ou pas !
// const [dataUser, setdataUser] = useState([]); //**  tableau vide ou string vide ?

//   return <Login valueEmail={setdataUser(dataUser)} />;
// }

export default App;
