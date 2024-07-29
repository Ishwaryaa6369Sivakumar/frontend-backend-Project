
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (email === 'ishwaryaa@gmail.com') {
//       navigate('/admindashboard');
//     } else {
//       navigate('/idashboard');
//     }
//   };

//   return (
//     <div className='login-container'>
//       <div className="wrapper">
//         <form onSubmit={handleSubmit}>
//           <h3>IIM-Inventory System</h3>
//           <div className="input-field">
//             <input
//               type="email"
//               placeholder="Enter Your Mail"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <label></label>
//           </div>
//           <div className="input-field">
//             <input
//               type="password"
//               placeholder="Enter Your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <label></label>
//           </div>
//           <div className="forget">
//             <label htmlFor="remember">
//               <input type="checkbox" id="remember" required />
//               <p>Remember me</p>
//             </label>
//             <a href="#">Forgot password?</a>
//           </div>
//           <button type="submit"><b>LOGIN</b></button>
//           <div className="register">
//             <p>Don't have an account?<br /></p><br/>
//             <Link className='register' to='/register'><h4>Registration</h4></Link>
//           </div>
//         </form>
//       </div>
//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: "Open Sans", sans-serif;
//           }

//           .wrapper {
//             width: 400px;
//             border-radius: 8px;
//             padding: 30px;
//             text-align: center;
//             border: 2px solid black;
//             backdrop-filter: blur(9px);
//           }

//           .login-container {
//             background: url("https://plus.unsplash.com/premium_photo-1661387631850-c14d601b11ae?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
//             background-position: center;
//             background-size: cover;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//           }

//           form {
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: center;
//           }

//           h3 {
//             font-size: 1.5rem;
//             margin-bottom: 20px;
//             color:  white;
//           }

//           .input-field {
//             position: relative;
//             border-bottom: 2px solid #ccc;
//             margin: 15px 0;
//           }

//           .input-field label {
//             position: absolute;
//             top: 50%;
//             left: 0;
//             transform: translateY(-50%);
//             color: black;
//             font-size: 16px;
//             pointer-events: none;
//             transition: 0.15s ease;
//           }

//           .input-field input {
//             width: 100%;
//             height: 40px;
//             background: transparent;
//             border: none;
//             outline: none;
//             font-size: 16px;
//             color: black;
//           }

//           .forget {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             margin: 25px 0 35px 0;
//             color: black;
//           }

//           #remember {
//             accent-color: black;
//           }

//           .forget label {
//             display: flex;
//             align-items: center;
//           }

//           .forget label p {
//             margin-left: 8px;
//           }

//           .wrapper a {
//             color: black;
//             text-decoration: none;
//           }

//           .wrapper a:hover {
//             text-decoration: underline;
//           }

//           button {
//             background: none;
//             color: #000;
//             font-weight: 600;
//             border: none;
//             padding: 12px 20px;
//             cursor: pointer;
//             border-radius: 3px;
//             font-size: 16px;
//             border: 2px solid transparent;
//             transition: 0.3s ease;
//           }

//           button:hover {
//             color: black;
//             border-color: black;
//             background: rgba(255, 255, 255, 0.15);
//           }

//           .register {
//             text-align: center;
//             margin-top: 30px;
//             color: black;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Login;//use this

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('loggedInEmail', email);
    if (email === 'ishwaryaa@gmail.com') {
      navigate('/admindashboard');
    } else {
      navigate('/idashboard');
    }
  };

  return (
    <div className='login-container'>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h3>IIM-Inventory System</h3>
          <div className="input-field">
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label></label>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label></label>
          </div>
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" required />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit"><b>LOGIN</b></button>
          <div className="register">
            <p>Don't have an account?<br /></p><br/>
            <Link className='register' to='/register'><h4>Registration</h4></Link>
          </div>
        </form>
      </div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Open Sans", sans-serif;
          }

          .wrapper {
            width: 400px;
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            border: 2px solid black;
            backdrop-filter: blur(9px);
          }

          .login-container {
            background: url("https://plus.unsplash.com/premium_photo-1661387631850-c14d601b11ae?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
            background-position: center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h3 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color:  white;
          }

          .input-field {
            position: relative;
            border-bottom: 2px solid #ccc;
            margin: 15px 0;
          }

          .input-field label {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            color: black;
            font-size: 16px;
            pointer-events: none;
            transition: 0.15s ease;
          }

          .input-field input {
            width: 100%;
            height: 40px;
            background: transparent;
            border: none;
            outline: none;
            font-size: 16px;
            color: black;
          }

          .forget {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 25px 0 35px 0;
            color: black;
          }

          #remember {
            accent-color: black;
          }

          .forget label {
            display: flex;
            align-items: center;
          }

          .forget label p {
            margin-left: 8px;
          }

          .wrapper a {
            color: black;
            text-decoration: none;
          }

          .wrapper a:hover {
            text-decoration: underline;
          }

          button {
            background: none;
            color: #000;
            font-weight: 600;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            border-radius: 3px;
            font-size: 16px;
            border: 2px solid transparent;
            transition: 0.3s ease;
          }

          button:hover {
            color: black;
            border-color: black;
            background: rgba(255, 255, 255, 0.15);
          }

          .register {
            text-align: center;
            margin-top: 30px;
            color: black;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
