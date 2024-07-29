// // src/AdminDashboard.jsx
// import React, { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { DataGrid } from '@mui/x-data-grid';
// import { ResponsiveBar } from '@nivo/bar';

// const defaultTheme = createTheme();

// const initialData = [
//   { id: 1, name: 'Item 1', quantity: 10 },
//   { id: 2, name: 'Item 2', quantity: 20 },
// ];

// export default function AdminDashboard() {
//   const [data, setData] = useState(initialData);
//   const [name, setName] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [selectedRow, setSelectedRow] = useState(null);

//   const handleAdd = () => {
//     if (name && quantity) {
//       setData([...data, { id: Date.now(), name, quantity: Number(quantity) }]);
//       setName('');
//       setQuantity('');
//     }
//   };

//   const handleEdit = () => {
//     if (selectedRow && name && quantity) {
//       setData(data.map((item) =>
//         item.id === selectedRow.id ? { ...item, name, quantity: Number(quantity) } : item
//       ));
//       setSelectedRow(null);
//       setName('');
//       setQuantity('');
//     }
//   };

//   const handleDelete = () => {
//     if (selectedRow) {
//       setData(data.filter((item) => item.id !== selectedRow.id));
//       setSelectedRow(null);
//       setName('');
//       setQuantity('');
//     }
//   };

//   const handleRowClick = (params) => {
//     setSelectedRow(params.row);
//     setName(params.row.name);
//     setQuantity(params.row.quantity);
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 150 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'quantity', headerName: 'Quantity', width: 150 },
//   ];

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="absolute">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap>
//               Admin Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) => theme.palette.grey[100],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//             mt: 8,
//             p: 3,
//           }}
//         >
//           <Container maxWidth="lg">
//             <Grid container spacing={3}>
//               {/* Chart */}
//               <Grid item xs={12} md={8} lg={9}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
//                   <ResponsiveBar
//                     data={data}
//                     keys={['quantity']}
//                     indexBy="name"
//                     margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
//                     padding={0.3}
//                     colors={{ scheme: 'nivo' }}
//                     axisBottom={{
//                       tickSize: 5,
//                       tickPadding: 5,
//                       tickRotation: 0,
//                       legend: 'Name',
//                       legendPosition: 'middle',
//                       legendOffset: 32,
//                     }}
//                     axisLeft={{
//                       tickSize: 5,
//                       tickPadding: 5,
//                       tickRotation: 0,
//                       legend: 'Quantity',
//                       legendPosition: 'middle',
//                       legendOffset: -40,
//                     }}
//                   />
//                 </Paper>
//               </Grid>
//               {/* CRUD Operations */}
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                   <Typography variant="h6" gutterBottom>
//                     Manage Items
//                   </Typography>
//                   <Box sx={{ display: 'flex', mb: 2 }}>
//                     <TextField
//                       label="Name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       sx={{ mr: 2 }}
//                     />
//                     <TextField
//                       label="Quantity"
//                       value={quantity}
//                       onChange={(e) => setQuantity(e.target.value)}
//                       sx={{ mr: 2 }}
//                     />
//                     <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mr: 2 }}>
//                       Add
//                     </Button>
//                     <Button variant="contained" color="secondary" onClick={handleEdit} sx={{ mr: 2 }}>
//                       Edit
//                     </Button>
//                     <Button variant="contained" color="error" onClick={handleDelete}>
//                       Delete
//                     </Button>
//                   </Box>
//                   <DataGrid
//                     rows={data}
//                     columns={columns}
//                     pageSize={5}
//                     onRowClick={handleRowClick}
//                     autoHeight
//                   />
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }







// import React, { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import { DataGrid } from '@mui/x-data-grid';
// import { ResponsiveBar } from '@nivo/bar';
// import { useNavigate } from 'react-router-dom';
// import { RiAccountCircleLine } from 'react-icons/ri';

// const defaultTheme = createTheme();

// const initialData = [
//   { id: 1, name: 'Item 1', quantity: 10 },
//   { id: 2, name: 'Item 2', quantity: 20 },
// ];

// export default function AdminDashboard() {
//   const [data, setData] = useState(initialData);
//   const [name, setName] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [selectedRow, setSelectedRow] = useState(null);
//   const navigate = useNavigate();

//   const handleAdd = () => {
//     if (name && quantity) {
//       setData([...data, { id: Date.now(), name, quantity: Number(quantity) }]);
//       setName('');
//       setQuantity('');
//     }
//   };

//   const handleEdit = () => {
//     if (selectedRow && name && quantity) {
//       setData(data.map((item) =>
//         item.id === selectedRow.id ? { ...item, name, quantity: Number(quantity) } : item
//       ));
//       setSelectedRow(null);
//       setName('');
//       setQuantity('');
//     }
//   };

//   const handleDelete = () => {
//     if (selectedRow) {
//       setData(data.filter((item) => item.id !== selectedRow.id));
//       setSelectedRow(null);
//       setName('');
//       setQuantity('');
//     }
//   };

//   const handleRowClick = (params) => {
//     setSelectedRow(params.row);
//     setName(params.row.name);
//     setQuantity(params.row.quantity);
//   };

//   const handleHomeClick = () => {
//     navigate('/'); // navigate to home page
//   };


//   const columns = [
//     { field: 'id', headerName: 'ID', width: 150 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'quantity', headerName: 'Quantity', width: 150 },
//   ];

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="absolute">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
//               Admin Dashboard
//             </Typography>
//             <Button color="inherit" onClick={handleHomeClick}>
//               Home
//             </Button>
            
//           </Toolbar>
//         </AppBar>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) => theme.palette.grey[100],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//             mt: 8,
//             p: 3,
//           }}
//         >
//           <Container maxWidth="lg">
//             <Grid container spacing={3}>
//               {/* Chart */}
//               <Grid item xs={12} md={8} lg={9}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
//                   <ResponsiveBar
//                     data={data}
//                     keys={['quantity']}
//                     indexBy="name"
//                     margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
//                     padding={0.3}
//                     colors={{ scheme: 'nivo' }}
//                     axisBottom={{
//                       tickSize: 5,
//                       tickPadding: 5,
//                       tickRotation: 0,
//                       legend: 'Name',
//                       legendPosition: 'middle',
//                       legendOffset: 32,
//                     }}
//                     axisLeft={{
//                       tickSize: 5,
//                       tickPadding: 5,
//                       tickRotation: 0,
//                       legend: 'Quantity',
//                       legendPosition: 'middle',
//                       legendOffset: -40,
//                     }}
//                   />
//                 </Paper>
//               </Grid>
//               {/* CRUD Operations */}
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                   <Typography variant="h6" gutterBottom>
//                     Manage Items
//                   </Typography>
//                   <Box sx={{ display: 'flex', mb: 2 }}>
//                     <TextField
//                       label="Name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       sx={{ mr: 2 }}
//                     />
//                     <TextField
//                       label="Quantity"
//                       value={quantity}
//                       onChange={(e) => setQuantity(e.target.value)}
//                       sx={{ mr: 2 }}
//                     />
//                     <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mr: 2 }}>
//                       Add
//                     </Button>
//                     <Button variant="contained" color="secondary" onClick={handleEdit} sx={{ mr: 2 }}>
//                       Edit
//                     </Button>
//                     <Button variant="contained" color="error" onClick={handleDelete}>
//                       Delete
//                     </Button>
//                   </Box>
//                   <DataGrid
//                     rows={data}
//                     columns={columns}
//                     pageSize={5}
//                     onRowClick={handleRowClick}
//                     autoHeight
//                   />
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }//use this 


import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { ResponsiveBar } from '@nivo/bar';
import { useNavigate } from 'react-router-dom';
import { RiAccountCircleLine } from 'react-icons/ri';

const defaultTheme = createTheme();

const initialData = [
  { id: 1, name: 'Item 1', quantity: 10 },
  { id: 2, name: 'Item 2', quantity: 20 },
];

export default function AdminDashboard() {
  const [data, setData] = useState(initialData);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the logged-in email from localStorage
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    if (loggedInEmail) {
      setEmail(loggedInEmail);
    }
  }, []);

  const handleAdd = () => {
    if (name && quantity) {
      setData([...data, { id: Date.now(), name, quantity: Number(quantity) }]);
      setName('');
      setQuantity('');
    }
  };

  const handleEdit = () => {
    if (selectedRow && name && quantity) {
      setData(data.map((item) =>
        item.id === selectedRow.id ? { ...item, name, quantity: Number(quantity) } : item
      ));
      setSelectedRow(null);
      setName('');
      setQuantity('');
    }
  };

  const handleDelete = () => {
    if (selectedRow) {
      setData(data.filter((item) => item.id !== selectedRow.id));
      setSelectedRow(null);
      setName('');
      setQuantity('');
    }
  };

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    setName(params.row.name);
    setQuantity(params.row.quantity);
  };

  const handleHomeClick = () => {
    navigate('/'); // navigate to home page
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit" onClick={handleHomeClick}>
              Home
            </Button>
            {email && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <RiAccountCircleLine style={{ marginRight: '8px' }} />
                <Typography variant="body1">{email}</Typography>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            mt: 8,
            p: 3,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                  <ResponsiveBar
                    data={data}
                    keys={['quantity']}
                    indexBy="name"
                    margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'nivo' }}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Name',
                      legendPosition: 'middle',
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Quantity',
                      legendPosition: 'middle',
                      legendOffset: -40,
                    }}
                  />
                </Paper>
              </Grid>
              {/* CRUD Operations */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" gutterBottom>
                    Manage Items
                  </Typography>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <TextField
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ mr: 2 }}
                    />
                    <TextField
                      label="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      sx={{ mr: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mr: 2 }}>
                      Add
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleEdit} sx={{ mr: 2 }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>
                      Delete
                    </Button>
                  </Box>
                  <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    onRowClick={handleRowClick}
                    autoHeight
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

