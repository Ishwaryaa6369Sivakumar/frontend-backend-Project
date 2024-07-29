// import React from 'react';
// import { Link } from 'react-router-dom';

// function Registration() {
//   return (
//     <div className='registration-container'>
//       <section className="container">
//         <header><b>IIM-Inventory Management App</b></header>
//         <form action="#" className="form">
//           <div className="input-box">
//             <label><b>Full Name</b></label>
//             <input type="text" placeholder="Enter full name" required />
//           </div>
//           <div className="input-box">
//             <label><b>Email Address</b></label>
//             <input type="email" placeholder="Enter email address" required />
//           </div>
//           <div className="input-box">
//             <label><b>Phone Number</b></label>
//             <input type="number" placeholder="Enter phone number" required />
//           </div>
//           <div className="input-box">
//             <label><b>Birth Date</b></label>
//             <input type="date" placeholder="Enter birth date" required />
//           </div>
//           <div className="gender-box">
//             <h3><b>Gender</b></h3>
//             <div className="gender-option">
//               <div className="gender">
//                 <input type="radio" id="check-male" name="gender" defaultChecked />
//                 <label htmlFor="check-male"><b>Male</b></label>
//               </div>
//               <div className="gender">
//                 <input type="radio" id="check-female" name="gender" />
//                 <label htmlFor="check-female"><b>Female</b></label>
//               </div>
//               <div className="gender">
//                 <input type="radio" id="check-other" name="gender" />
//                 <label htmlFor="check-other"><b>Prefer not to say</b></label>
//               </div>
//             </div>
//           </div>
//           <div className="input-box address">
//             <label><b>Address</b></label>
//             <input type="text" placeholder="Enter street address" required />
//             <input type="text" placeholder="Enter street address line 2" />
//           </div>
//           <br/>
//           <div className="button-container">
//           <button type="submit"><Link to='/login'>REGISTER</Link></button>
//             {/* <button><b>REGISTER</b></button> */}
//           </div>
//         </form>
//       </section>

//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: "Poppins", sans-serif;
//           }

//           .container {
//             position: relative;
//             max-width: 80vw;
//             width: 60%;
//             height: 100vh;
//             background: none;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//           }

//           .registration-container {
//             display: flex;
//             justify-content: center;
//             background-image: url("https://media.istockphoto.com/id/1419548113/photo/shipping-logistics-and-delivery-worker-planning-industrial-supply-chain-manufacturing-in.jpg?s=612x612&w=0&k=20&c=eed3trjLh3rhyVolYp7owfr7U2oOU17tj4wkQBu_JFw=");
//             background-repeat: no-repeat;
//             background-size: cover;
//             height: 110vh;
//             width: 100vw;
//           }

//           .container header {
            
//             font-size: 2rem;
//             color:#d10a0a;
//             font-weight: 800;
//             text-align: center;
//           }

//           .form .input-box {
//             width: 85%;
//             margin-top: 30px;
//             margin-bottom: 7px;
//           }

//           .input-box label {
//             color: black;
//           }

//           .form :where(.input-box input, .select-box) {
//             position: relative;
//             height: 40px;
//             width: 100%;
//             outline: none;
//             font-size: 1rem;
//             color: black;
//             margin-top: 15px;
//             border: 1px solid black;
//             border-radius: 10px;
//             padding: 0 15px;
//           }

//           .input-box input:focus {
//             box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
//           }

//           .form .column {
//             display: flex;
//             column-gap: 100px;
//           }

//           .form .gender-box {
//             margin-top: 10px;
//           }

//           .gender-box h3 {
//             color: black;
//             font-size: 0.9rem;
//             font-weight: 1000;
//             margin-bottom: 35px;
//           }

//           .form :where(.gender-option, .gender) {
//             display: flex;
//             align-items: center;
//             column-gap: 135px;
//             flex-wrap: wrap;
//           }

//           .form .gender {
//             column-gap: 5px;
//           }

//           .gender input {
//             accent-color: rgb(130, 106, 251);
//           }

//           .gender label {
//             color: black;
//           }

//           .address :where(input, .select-box) {
//             margin-top: 15px;
//           }

//           .select-box select {
//             height: 100%;
//             width: 105%;
//             outline: none;
//             border: none;
//             color: #707070;
//             font-size: 1rem;
//           }

//           .button-container {
//             display: flex;
//             justify-content: center;
//             width: 100%;
//           }

//           .form button {
//             height: 40px;
//             width: auto;
//             color: #fff;
//             font-size: 0.9rem;
//             font-weight: 400;
//             margin-top: 20px;
//             border: none;
//             cursor: pointer;
//             transition: all 0.2s ease;
//             background: red;
//             padding: 0 20px;
//           }

//           .form button:hover {
//             background: rgb(255, 45, 48);
//           }

//           @media screen and (max-width: 500px) {
//             .form .column {
//               flex-wrap: wrap;
//             }

//             .form :where(.gender-option, .gender) {
//               row-gap: 15px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Registration;






// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Registration() {
//   const navigate = useNavigate();

//   const handleRegister = (event) => {
//     event.preventDefault();
//     navigate('/login');
//   };

//   return (
//     <div className='registration-container'>
//       <section className="container">
//         <header><b>IIM-Inventory Management App</b></header>
//         <form action="#" className="form" onSubmit={handleRegister}>
//           <div className="input-box">
//             <label><b>Full Name</b></label>
//             <input type="text" placeholder="Enter full name" required />
//           </div>
//           <div className="input-box">
//             <label><b>Email Address</b></label>
//             <input type="email" placeholder="Enter email address" required />
//           </div>
//           <div className="input-box">
//             <label><b>Phone Number</b></label>
//             <input type="number" placeholder="Enter phone number" required />
//           </div>
//           <div className="input-box">
//             <label><b>Birth Date</b></label>
//             <input type="date" placeholder="Enter birth date" required />
//           </div>
//           <div className="gender-box">
//             <h3><b>Gender</b></h3>
//             <div className="gender-option">
//               <div className="gender">
//                 <input type="radio" id="check-male" name="gender" defaultChecked />
//                 <label htmlFor="check-male"><b>Male</b></label>
//               </div>
//               <div className="gender">
//                 <input type="radio" id="check-female" name="gender" />
//                 <label htmlFor="check-female"><b>Female</b></label>
//               </div>
//               <div className="gender">
//                 <input type="radio" id="check-other" name="gender" />
//                 <label htmlFor="check-other"><b>Prefer not to say</b></label>
//               </div>
//             </div>
//           </div>
//           <div className="input-box address">
//             <label><b>Address</b></label>
//             <input type="text" placeholder="Enter street address" required />
//             <input type="text" placeholder="Enter street address line 2" />
//           </div>
//           <br/>
//           <div className="button-container">
//             <button type="submit"><b>REGISTER</b></button>
//           </div>
//         </form>
//       </section>

//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//             font-family: "Poppins", sans-serif;
//           }

//           .container {
//             position: relative;
//             max-width: 80vw;
//             width: 60%;
//             height: 100vh;
//             background: none;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//           }

//           .registration-container {
//             display: flex;
//             justify-content: center;
//             background-image: url("https://media.istockphoto.com/id/1419548113/photo/shipping-logistics-and-delivery-worker-planning-industrial-supply-chain-manufacturing-in.jpg?s=612x612&w=0&k=20&c=eed3trjLh3rhyVolYp7owfr7U2oOU17tj4wkQBu_JFw=");
//             background-repeat: no-repeat;
//             background-size: cover;
//             height: 110vh;
//             width: 100vw;
//           }

//           .container header {
//             font-size: 2rem;
//             color:#053075;
//             font-weight: 800;
//             text-align: center;
//           }

//           .form .input-box {
//             width: 85%;
//             margin-top: 30px;
//             margin-bottom: 7px;
//           }

//           .input-box label {
//             color: black;
//           }

//           .form :where(.input-box input, .select-box) {
//             position: relative;
//             height: 40px;
//             width: 100%;
//             outline: none;
//             font-size: 1rem;
//             color: black;
//             margin-top: 15px;
//             border: 1px solid black;
//             border-radius: 10px;
//             padding: 0 15px;
//           }

//           .input-box input:focus {
//             box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
//           }

//           .form .column {
//             display: flex;
//             column-gap: 100px;
//           }

//           .form .gender-box {
//             margin-top: 10px;
//           }

//           .gender-box h3 {
//             color: black;
//             font-size: 0.9rem;
//             font-weight: 1000;
//             margin-bottom: 35px;
//           }

//           .form :where(.gender-option, .gender) {
//             display: flex;
//             align-items: center;
//             column-gap: 135px;
//             flex-wrap: wrap;
//           }

//           .form .gender {
//             column-gap: 5px;
//           }

//           .gender input {
//             accent-color: rgb(130, 106, 251);
//           }

//           .gender label {
//             color: black;
//           }

//           .address :where(input, .select-box) {
//             margin-top: 15px;
//           }

//           .select-box select {
//             height: 100%;
//             width: 105%;
//             outline: none;
//             border: none;
//             color: #707070;
//             font-size: 1rem;
//           }

//           .button-container {
//             display: flex;
//             justify-content: center;
//             width: 100%;
//           }

//           .form button {
//             height: 40px;
//             width: auto;
//             color: #fff;
//             font-size: 0.9rem;
//             font-weight: 400;
//             margin-top: 20px;
//             border: none;
//             cursor: pointer;
//             transition: all 0.2s ease;
//             background: blue;
//             padding: 0 20px;
//           }

//           .form button:hover {
//             background: rgb(255, 45, 48);
//           }

//           @media screen and (max-width: 500px) {
//             .form .column {
//               flex-wrap: wrap;
//             }

//             .form :where(.gender-option, .gender) {
//               row-gap: 15px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Registration;//use this code









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  return (
    <div className='registration-container'>
      <section className="container">
        <header><b>IIM-Inventory Management App</b></header>
        <form action="#" className="form" onSubmit={handleRegister}>
          <div className="input-box">
            <label><b>Full Name</b></label>
            <input type="text" placeholder="Enter full name" required />
          </div>
          <div className="input-box">
            <label><b>Email Address</b></label>
            <input type="email" placeholder="Enter email address" required />
          </div>
          <div className="input-box">
            <label><b>Phone Number</b></label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label><b>Birth Date</b></label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
          <div className="gender-box">
            <h3><b>Gender</b></h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" defaultChecked />
                <label htmlFor="check-male"><b>Male</b></label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female"><b>Female</b></label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other"><b>Prefer not to say</b></label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label><b>Address</b></label>
            <input type="text" placeholder="Enter street address" required />
            <input type="text" placeholder="Enter street address line 2" />
          </div>
          <br/>
          <div className="button-container">
            <button type="submit"><b>REGISTER</b></button>
          </div>
        </form>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>Registration Successful!</p>
            <button onClick={handleCloseModal}>OK</button>
          </div>
        </div>
      )}

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          .container {
            position: relative;
            max-width: 80vw;
            width: 60%;
            height: 100vh;
            background: none;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .registration-container {
            display: flex;
            justify-content: center;
            background-image: url("https://media.istockphoto.com/id/1419548113/photo/shipping-logistics-and-delivery-worker-planning-industrial-supply-chain-manufacturing-in.jpg?s=612x612&w=0&k=20&c=eed3trjLh3rhyVolYp7owfr7U2oOU17tj4wkQBu_JFw=");
            background-repeat: no-repeat;
            background-size: cover;
            height: 110vh;
            width: 100vw;
          }

          .container header {
            font-size: 2rem;
            color:#053075;
            font-weight: 800;
            text-align: center;
          }

          .form .input-box {
            width: 85%;
            margin-top: 30px;
            margin-bottom: 7px;
          }

          .input-box label {
            color: black;
          }

          .form :where(.input-box input, .select-box) {
            position: relative;
            height: 40px;
            width: 100%;
            outline: none;
            font-size: 1rem;
            color: black;
            margin-top: 15px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 0 15px;
          }

          .input-box input:focus {
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
          }

          .form .column {
            display: flex;
            column-gap: 100px;
          }

          .form .gender-box {
            margin-top: 10px;
          }

          .gender-box h3 {
            color: black;
            font-size: 0.9rem;
            font-weight: 1000;
            margin-bottom: 35px;
          }

          .form :where(.gender-option, .gender) {
            display: flex;
            align-items: center;
            column-gap: 135px;
            flex-wrap: wrap;
          }

          .form .gender {
            column-gap: 5px;
          }

          .gender input {
            accent-color: rgb(130, 106, 251);
          }

          .gender label {
            color: black;
          }

          .address :where(input, .select-box) {
            margin-top: 15px;
          }

          .select-box select {
            height: 100%;
            width: 105%;
            outline: none;
            border: none;
            color: #707070;
            font-size: 1rem;
          }

          .button-container {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .form button {
            height: 40px;
            width: auto;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 400;
            margin-top: 20px;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            background: blue;
            padding: 0 20px;
          }

          .form button:hover {
            background: rgb(255, 45, 48);
          }

          .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
          }

          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            animation: modalopen 0.4s;
          }

          @keyframes modalopen {
            from {opacity: 0}
            to {opacity: 1}
          }

          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Registration;
