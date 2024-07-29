
// import React from 'react';
// import {BrowserRouter, Routes,Route} from "react-router-dom";
// import Dashboard from './components/dashboard/Dashboard.jsx';
// import Login from './components/login/Login.jsx'
// import Registration from './components/register/Register.jsx';
// import IDashboard from './components/idashboard/IDashboard.jsx';
// import Orders from './components/idashboard/Orders.jsx';

//  function App() {
//   return (
//     <BrowserRouter>
    
    
//     <Routes>
//       <Route path="/" element={<Dashboard/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/register" element={<Registration/>}/>
//       <Route path="/dashboard" element={<IDashboard/>}/>
//       <Route path="/order" element={<Orders/>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;//original 







import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/admindashboard/AdminDashboard';
import IDashboard from './components/idashboard/IDashboard';
import Login from './components/login/Login';
import Registration from './components/register/Register';
import Orders from './components/idashboard/Orders';
import Dashboard from './components/dashboard/Dashboard'; // Import Dashboard component
import HomePage from './components/home/Home';
import AboutPage from './components/about/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Set Dashboard as the default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/idashboard" element={<IDashboard />} />
       
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
