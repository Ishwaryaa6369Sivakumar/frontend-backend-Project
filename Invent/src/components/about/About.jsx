// import React from 'react';
// import { Box, Container, Typography, Paper } from '@mui/material';

// export default function AboutPage() {
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
//             textAlign: 'center',
//           }}
//         >
//           About the Inventory Management System
//         </Typography>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{ 
//             color: 'text.secondary',
//             mb: 2,
//             textAlign: 'justify',
//           }}
//         >
//           The Inventory Management System is a comprehensive solution for managing your inventory efficiently and effectively. It provides a user-friendly interface that allows you to keep track of your stock in real-time, ensuring that you never run out of essential items.
//         </Typography>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{ 
//             color: 'text.secondary',
//             mb: 2,
//             textAlign: 'justify',
//           }}
//         >
//           Our system offers a range of features designed to simplify inventory management:
//         </Typography>
//         <Box component="ul" sx={{ pl: 3, mb: 2 }}>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Real-time tracking of inventory levels.
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Easy addition, editing, and deletion of items.
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Comprehensive data visualization with charts and graphs.
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               User-friendly interface for seamless navigation.
//             </Typography>
//           </li>
//           <li>
//             <Typography variant="body1" sx={{ color: 'text.primary' }}>
//               Detailed reports and analytics.
//             </Typography>
//           </li>
//         </Box>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{ 
//             color: 'text.secondary',
//             textAlign: 'justify',
//           }}
//         >
//           Whether you are a small business or a large enterprise, our Inventory Management System is designed to meet your needs and help you maintain optimal inventory levels at all times.
//         </Typography>
//       </Paper>
//     </Container>
//   );
// }


import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper 
        sx={{ 
          p: 4, 
          backgroundColor: 'background.default', 
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
          About the Inventory Management System
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
          The Inventory Management System is a comprehensive solution for managing your inventory efficiently and effectively. It provides a user-friendly interface that allows you to keep track of your stock in real-time, ensuring that you never run out of essential items.
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
          Our system offers a range of features designed to simplify inventory management:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Real-time tracking of inventory levels.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Easy addition, editing, and deletion of items.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Comprehensive data visualization with charts and graphs.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              User-friendly interface for seamless navigation.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Detailed reports and analytics.
            </Typography>
          </li>
        </Box>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            color: 'text.secondary',
            textAlign: 'justify',
          }}
        >
          Whether you are a small business or a large enterprise, our Inventory Management System is designed to meet your needs and help you maintain optimal inventory levels at all times.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleHomeClick}
          >
            Go to Home Page
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
