import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

 
type Props = {}
 
const Feature = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
  <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 2 }}>
    {icon}
    <Typography variant="h6" sx={{ marginTop: 1, marginBottom: 1 }}> 
      {title}
    </Typography>
    <Typography variant="body2"> 
      {description} 
    </Typography>
  </Box>
);
 
const Features = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 
  const features = [
    {
      icon: <AccountCircleIcon fontSize="large" />,
      title: 'Authentication',
      description: 'Secure signup and sign-in with easy recovery options.'
    },
    {
      icon: <HomeIcon fontSize="large" />,
      title: 'Home Page',
      description: 'Extensive robust search capabilities with easy navigation.'
    },
    {
      icon: <SearchIcon fontSize="large" />,
      title: 'Search/Discover Portfolios',
      description: 'Efficiently find portfolios with advanced filters.'
    }, 
    {
      icon: <PersonIcon fontSize="large" />,
      title: 'User Profile',
      description: 'Showcase your skills with editable templates.'
    },
  ];
 
  return (
    <Box sx={{ flexGrow: 1, padding: isMobile ? 2 : 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Features
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Feature {...feature} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
 
 
export default Features