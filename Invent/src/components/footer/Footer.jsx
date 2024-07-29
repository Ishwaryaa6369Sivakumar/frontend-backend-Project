

// import React from "react";
// import americanImg from "../../assets/American-Express-Emblem.png";
// import paypalImg from "../../assets/PayPal.svg.png";
// import playstoreImg from "../../assets/png-transparent-google-play.png";
// import applestoreImg from "../../assets/itunes-app.png";
// import amazonImg from "../../assets/AmazonPay.png";
// import masterImg from "../../assets/images.png";

// export default function Footer() {
//   return (
//     <footer className="footer bg-main-light mx-3 py-5">
//       <style jsx>{`
//         .footer {
//           background-color: #f8f9fa;
//           padding: 10px 0;
//           margin: 60px 0;
//         }
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 15px;
//         }
//         h3 {
//           margin-bottom: 10px;
//         }
//         .text-secondary {
//           color: #6c757d;
//         }
//         .form-control {
//           padding: 10px;
//         }
//         .btn {
//           background-color: #007bff;
//           color: white;
//           padding: 10px 20px;
//           border: none;
//           cursor: pointer;
//         }
//         .d-flex {
//           display: flex;
//           align-items: center;
//         }
//         .mb-3 {
//           margin-bottom: 20px;
//         }
//         .me-1 {
//           margin-right: 10px;
//         }
//         .me-4 {
//           margin-right: 20px;
//         }
//         .pt-3 {
//           padding-top: 20px;
//         }
//         .border-top {
//           border-top: 1px solid #e9ecef;
//         }
//         .border-1 {
//           border-width: 1px;
//         }
//         .pay-imgs img {
//           width: 70px;
//           height: auto;
//           margin-right: 10px;
//         }
//         .galleries-img img {
//           width: 50px;
//           height: 90px;
//           margin-right: 5px;
//         }
//         .ms-auto {
//           margin-left: auto;
//         }
//         .mb-0 {
//           margin-bottom: 0;
//         }
//         .me-2 {
//           margin-right: 10px;
//         }
//       `}</style>
//       <div className="container">
//         <h3>Get The FreshCart app</h3>
//         <p className="text-secondary">
//           We will send you a link, open it on your phone to download the app.
//         </p>
//         <div className="d-flex mb-3">
//           <input
//             type="text"
//             className="form-control w-75 me-4"
//             placeholder="Email"
//           />
//           <button className="btn bg-main text-white">Add The app</button>
//         </div>
//         <div className="d-flex pt-3 border-top border-1">
//           <div className="d-flex">
//             <p className="me-1">Payment Partners</p>
//             <div className="pay-imgs">
//               <img src={americanImg} alt="American Express" />
//               <img src={amazonImg} alt="Amazon Pay" />
//               <img src={masterImg} alt="MasterCard" />
//               <img src={paypalImg} alt="PayPal" />
//             </div>
//           </div>
//           <div className="d-flex align-items-center ms-auto">
//             <p className="mb-0 me-2">Get deliveries with Freshcart</p>
//             <div className="galleries-img">
//               <img src={playstoreImg} alt="Google Play Store" />
//               {/* <img src={applestoreImg} alt="Apple App Store" /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }//original



import React from "react";
import americanImg from "../../assets/American-Express-Emblem.png";
import paypalImg from "../../assets/PayPal.svg.png";
import playstoreImg from "../../assets/png-transparent-google-play.png";
import applestoreImg from "../../assets/itunes-app.png";
import amazonImg from "../../assets/AmazonPay.png";
import masterImg from "../../assets/images.png";

export default function Footer() {
  return (
    <footer className="footer bg-main-light py-5">
      <style jsx>{`
        .footer {
          background-color: white;
          padding: 70px 0px;
          width: 105%;
          position: relative;
          right: 45px;
          top:45px;
          height:45%;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        h3 {
          margin-bottom: 10px;
        }
        .text-secondary {
          color: #6c757d;
        }
        .form-control {
          padding: 10px;
        }
        .btn {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
        .d-flex {
          display: flex;
          align-items: center;
        }
        .mb-3 {
          margin-bottom: 20px;
          height:10px
        }
        .me-1 {
          margin-right: 10px;
          
        }
        .me-4 {
          margin-right: 20px;
        }
        .pt-3 {
          padding-top: 20px;
        }
        .border-top {
          border-top: 1px solid #e9ecef;
        }
        .border-1 {
          border-width: 1px;
        }
        .pay-imgs img {
          width: 70px;
          height: auto;
          margin-right: 10px;
        }
        .galleries-img img {
          width: 50px;
          height: 90px;
          margin-right: 5px;
        }
        .ms-auto {
          margin-left: auto;
        }
        .mb-0 {
          margin-bottom: 0;
        }
        .me-2 {
          margin-right: 10px;
        }
      `}</style>
      <div className="container">
        <h3>Get The FreshCart app</h3>
        <p className="text-secondary">
          We will send you a link, open it on your phone to download the app.
        </p>
        <div className="d-flex mb-3">
          <input
            type="text"
            className="form-control w-75 me-4"
            placeholder="Email"
          />
          <button className="btn bg-main text-white">Add The app</button>
        </div>
        <div className="d-flex pt-3 border-top border-1">
          <div className="d-flex">
            <p className="me-1">Payment Partners</p>
            <div className="pay-imgs">
              <img src={americanImg} alt="American Express" />
              <img src={amazonImg} alt="Amazon Pay" />
              <img src={masterImg} alt="MasterCard" />
              <img src={paypalImg} alt="PayPal" />
            </div>
          </div>
          <div className="d-flex align-items-center ms-auto">
            <p className="mb-0 me-2">Get deliveries with Freshcart</p>
            <div className="galleries-img">
              <img src={playstoreImg} alt="Google Play Store" />
              {/* <img src={applestoreImg} alt="Apple App Store" /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
