import React, { useState } from "react";
//import propTypes from 'prop-types';
//import css
//import propTypes from 'prop-types';
import './login.css';

// function Login({valueEmail,valuePassword}) {
//   return (
//     <section className="section">
//       <form className="section__from">
//         <input
//           className="section__input"
//           type="text"
//           placeholder="Email"
//           value={valueEmail}>
//         </input>
//         <input
//           className="input"
//           type="Password"
//           placeholder="Password"
//           value={valuePassword}>
//         </input>
        
//         <button>Login</button>
//         <button>Register</button>
//       </form>
//     </section>
//   );
// }
// Login.propTypes = {
//   valueEmail: propTypes.string.isRequired,
//   valuePassword : propTypes.string.isRequired,
  
// }


const Login = (props) =>{



    const [newEmail, setnewEmail] = useState("");

    const [newPassword, setnewPasword] = useState("");




 const handleSubmit = event =>{
  event.preventDefault();
  //appel API pour se connecter.

};




return (
      <section className="section">
        <form onSubmit={handleSubmit} className="section__from">
          <input
            className="section__input"
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={event => 
            {setnewEmail(event.target.value)}}>
          </input>
          <input
            className="input"
            type="Password"
            placeholder="Password"
            value={newPassword}
            onChange={event => 
            {setnewPasword(event.target.value)}}>
          </input>
          
          <button>Login</button>
          <button>Register</button>
        </form>
      </section>
    );
  }




export default Login;
