



// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LoginIcon from '@mui/icons-material/Login';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import { SiCoursera } from 'react-icons/si';
// import { FaBook } from 'react-icons/fa';
// import { HiUsers } from 'react-icons/hi2';
// import { RiAdminFill } from 'react-icons/ri'; // Import the RiAdminFill icon
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Footer from '../footer/Footer';
// import bgd from '../../assets/bg.png';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function Dashboard() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [usersOpen, setUsersOpen] = React.useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handleUsersClick = () => {
//     setUsersOpen(!usersOpen);
//   };

//   const handleNavigate = (path) => {
//     navigate(path); // Navigate to the specified path
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
       
//       }}
//     >
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             IIM - Inventory Management System
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {[
//             // { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//             { text: 'LoginPage', icon: <LoginIcon />, path: '/login' },
//             { text: 'Register', icon: <AppRegistrationIcon />, path: '/register' },
//             // { text: 'Courses', icon: <SiCoursera size={24} />, path: '/courses' },
//           ].map((item) => (
//             <ListItem key={item.text} disablePadding>
//               <ListItemButton onClick={() => handleNavigate(item.path)}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {[ 'Users', 'Admin'].map((text, index) => (
//             <React.Fragment key={text}>
//               <ListItem disablePadding>
//                 <ListItemButton onClick={text === 'Users' ? handleUsersClick : null}>
//                   <ListItemIcon>
//                     {index === 0 ? <FaBook size={24} />
//                       : index === 1 ? <HiUsers size={24} />
//                         : index === 2 ? <RiAdminFill size={24} />
//                           : index % 2 === 0 ? <InboxIcon />
//                             : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                   {text === 'Users' ? (usersOpen ? <ExpandLess /> : <ExpandMore />) : null}
//                 </ListItemButton>
//               </ListItem>
//               {text === 'Users' && usersOpen && (
//                 <List component="div" disablePadding>
//                   <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('/learners')}>
//                     <ListItemText primary="Learners" />
//                   </ListItemButton>
//                 </List>
//               )}
//             </React.Fragment>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open} sx={{backgroundImage:`url(${bgd})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     '@media (max-width: 600px)': {
//         margin: '20px',
//         width: '80%',
//         height: 'auto',
//         borderRadius: '10%',
//         opacity:0.1,
        
//     }}}>
//         <DrawerHeader />
//         <Typography paragraph>
//           An inventory management system is a crucial 🛳️ tool for businesses of all sizes to efficiently track and manage their inventory levels, orders,🎉 sales, and deliveries. It allows companies to maintain the right balance of stock in their warehouses 📉and to optimize inventory levels,🔖 ensuring they can meet customer demand without overstocking or understocking.🛒📊📚
//         </Typography>

//         <Typography paragraph>
//           Modern inventory management systems leverage advanced technologies like barcode scanning,🗂️ RFID, and cloud computing to automate and streamline the inventory tracking process.📈Furthermore, these systems support various inventory management techniques, such as just-in-time (JIT), first-in-first-out (FIFO), and last-in-first-out (LIFO), allowing businesses to choose the method that best suits their operational needs🔴. By adopting an effective inventory management system, 💡businesses can improve their inventory accuracy, reduce human errors, and ultimately increase their profitability and customer satisfaction.
//         </Typography>

//         <Typography paragraph>
//           They can integrate with other business systems, such as accounting and CRM software, to provide a comprehensive view of the company's🔖 operations. This integration enables better decision-making by offering insights into sales trends, stock levels, and product performance.✅🛍️
//         </Typography>
//         <Footer />
//       </Main>
//     </Box>
//   );
// }//original




import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { SiCoursera } from 'react-icons/si';
import { FaBook } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi2';
import { RiAdminFill } from 'react-icons/ri'; // Import the RiAdminFill icon
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from '../footer/Footer';
import bga from '../../assets/bg.png';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [usersOpen, setUsersOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUsersClick = () => {
    setUsersOpen(!usersOpen);
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            IIM - Inventory Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'About', icon: <DashboardIcon />, path: '/about' }, 
            { text: 'Home', icon: <DashboardIcon />, path: '/home' }, // Added Home button
            { text: 'LoginPage', icon: <LoginIcon />, path: '/login' },
            { text: 'Register', icon: <AppRegistrationIcon />, path: '/register' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Users', 'Admin'].map((text, index) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton onClick={text === 'Users' ? handleUsersClick : null}>
                  <ListItemIcon>
                    {index === 0 ? <FaBook size={24} />
                      : index === 1 ? <HiUsers size={24} />
                        : index === 2 ? <RiAdminFill size={24} />
                          : index % 2 === 0 ? <InboxIcon />
                            : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {text === 'Users' ? (usersOpen ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItemButton>
              </ListItem>
              {text === 'Users' && usersOpen && (
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('/learners')}>
                    <ListItemText primary="Learners" />
                  </ListItemButton>
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Main open={open} sx={{
        backgroundImage:`url(https://media.istockphoto.com/id/1175477565/photo/asian-manager-man-doing-stocktaking-of-products-management-in-cardboard-box-on-shelves-in.jpg?s=612x612&w=0&k=20&c=GcVKTyTzsAnMV-HcGdSt_bQ9CBnPfa6MDTPeEqyjVrE=)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '@media (max-width: 600px)': {
            margin: '20px',
            width: '80%',
            height: 'auto',
            borderRadius: '10%',
            opacity:0.1,
        }}}>
        <DrawerHeader />
        <Typography paragraph>
         <h3> An inventory management system is a crucial 🛳️ tool for businesses of all sizes to efficiently track and manage their inventory levels, orders,🎉 sales, and deliveries. It allows companies to maintain the right balance of stock in their warehouses 📉and to optimize inventory levels,🔖 ensuring they can meet customer demand without overstocking or understocking.🛒📊📚


          An inventory management system is a crucial 🛳️ tool for businesses of all sizes to efficiently track and manage their inventory levels, orders,🎉 sales, and deliveries. It allows companies to maintain the right balance of stock in their warehouses 📉and to optimize inventory levels,🔖 ensuring they can meet customer demand without overstocking or understocking.🛒📊📚



          An inventory management system is a crucial 🛳️ tool for businesses of all sizes to efficiently track and manage their inventory levels, orders,🎉 sales, and deliveries. It allows companies to maintain the right balance of stock in their warehouses 📉and to optimize inventory levels,🔖 ensuring they can meet customer demand without overstocking or understocking.🛒📊📚</h3>

        </Typography>

        <Typography paragraph>
          <h3>Modern inventory management systems leverage advanced technologies like barcode scanning,🗂️ RFID, and cloud computing to automate and streamline the inventory tracking process.📈Furthermore, these systems support various inventory management techniques, such as just-in-time (JIT), first-in-first-out (FIFO), and last-in-first-out (LIFO), allowing businesses to choose the method that best suits their operational needs🔴. By adopting an effective inventory management system, 💡businesses can improve their inventory accuracy, reduce human errors, and ultimately increase their profitability and customer satisfaction.</h3>
        </Typography>

        <Typography paragraph>
         <h3> They can integrate with other business systems, such as accounting and CRM software, to provide a comprehensive view of the company's🔖 operations. This integration enables better decision-making by offering insights into sales trends, stock levels, and product performance.✅🛍️


          They can integrate with other business systems, such as accounting and CRM software, to provide a comprehensive view of the company's🔖 operations. This integration enables better decision-making by offering insights into sales trends, stock levels, and product performance.✅🛍️

✅🛍️</h3>
        </Typography>
        <Footer />
      </Main>
    </Box>
  );
}//use this


