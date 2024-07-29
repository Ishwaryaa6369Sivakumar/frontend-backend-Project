// import React from 'react';
// import { Box, Container, Typography, Paper } from '@mui/material';

// export default function HomePage() {
//   return (
//     <Container maxWidth="md" sx={{ mt: 8 }}>
//       <Paper 
//         sx={{ 
//           p: 4, 
//           backgroundColor: 'background.default', 
//           boxShadow: 3,
//           borderRadius: 2,
//           borderColor: 'divider',
//           borderWidth: 1,
//           borderStyle: 'solid',
//         }}
//       >
//         <Typography 
//           variant="h3" 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 'bold', 
//             color: 'primary.main',
//             mb: 2,
//           }}
//         >
//           Welcome to the Inventory Management System
//         </Typography>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{ 
//             color: 'text.secondary',
//             mb: 2,
//           }}
//         >
//           The Inventory Management System is designed to help you efficiently manage your inventory.
//           You can add, edit, and delete items, and view a comprehensive chart of your current stock.
//         </Typography>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{ 
//             color: 'text.secondary',
//             mb: 2,
//           }}
//         >
//           Features include:
//         </Typography>
//         <Box component="ul" sx={{ pl: 3, mb: 0 }}>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Real-time inventory tracking
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Easy CRUD operations
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Intuitive user interface
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Comprehensive data visualization
//             </Typography>
//           </li>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }



import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1175477565/photo/asian-manager-man-doing-stocktaking-of-products-management-in-cardboard-box-on-shelves-in.jpg?s=2048x2048&w=is&k=20&c=U3LMhMQIFRBuL3A_nVQ61dMqHXwnE2mZx5wVSa46GbA=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            boxShadow: 3,
            borderRadius: 2,
            borderColor: 'divider',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Welcome to the Inventory Management System
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: 'text.secondary',
              mb: 2,
              textAlign: 'justify',
            }}
          >
            The Inventory Management System is designed to help you efficiently manage your inventory.
            You can add, edit, and delete items, and view a comprehensive chart of your current stock.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: 'text.secondary',
              mb: 2,
              textAlign: 'justify',
            }}
          >
            Features include:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 0 }}>
            <li>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                Real-time inventory tracking
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                Easy CRUD operations
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                Intuitive user interface
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                Comprehensive data visualization
              </Typography>
            </li>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
