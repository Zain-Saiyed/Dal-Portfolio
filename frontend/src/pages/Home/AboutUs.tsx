import Footer from 'pages/Home/Footer';
import React from 'react';
import { Grid, Box, Avatar, Container, Typography, Paper, useMediaQuery, useTheme, List, ListItem, Link } from '@mui/material';
import MohammedPic from "assets/images/mohammed.jpg";
import JinayPic from "assets/images/jinay.jpg"
type Props = {}

const AboutUs = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            About Us
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Goal at Dal Portfolio: Empowering Creativity and Professional Growth
            </Typography>
            <Typography paragraph>
              At Dal Portfolio, our primary goal is to bridge the gap between talent and opportunity by providing a dynamic platform that empowers both emerging and established professionals to showcase their work, connect with peers, and discover new opportunities. We aim to create a vibrant community where creativity flourishes, skills are honed, and achievements are celebrated.
            </Typography>
            <Typography paragraph>
              Our platform is designed to:
            </Typography>
            <Box sx={{ ml: 2 }}>
              <Typography component="div" variant="body1">
                <ol>
                  <li><strong>Showcase Excellence:</strong> Enable professionals from various industries to create comprehensive, visually appealing portfolios that highlight their skills, projects, and accomplishments.</li>
                  <li><strong>Foster Connections:</strong> Facilitate meaningful connections within a global network of professionals, encouraging collaboration, mentorship, and the sharing of ideas and resources.</li>
                  <li><strong>Enhance Visibility:</strong> Improve visibility for individual talents and projects, connecting our members with potential employers, clients, and collaborators worldwide.</li>
                  <li><strong>Support Continuous Learning:</strong> Provide resources, insights, and tools that support professional development, helping our members stay ahead in their respective fields.</li>
                </ol>
              </Typography>
            </Box>
            <Typography paragraph>
              By integrating cutting-edge technologies and design principles, we aim to provide a seamless experience that not only highlights the unique talents and accomplishments of our users but also facilitates meaningful connections within the professional community. Whether you are a student, a professional, or an organization, the Dal Portfolio project is committed to helping you stand out in a competitive landscape, enabling you to achieve your career aspirations and objectives.
            </Typography>
            <Typography paragraph>
              We believe in the power of showcasing talent and the importance of connections in driving professional growth and success. Our commitment lies in creating a platform that not only serves as a portfolio showcase but also as a catalyst for opportunities, inspiring our members to reach their full potential. Our ultimate aim is to become the leading digital platform for portfolio management and professional networking, recognized for our commitment to quality, reliability, and user satisfaction.          </Typography>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            Our Team
          </Typography>

          <Box sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: '8px',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start', 
            gap: 5,
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <Box sx={{
              width: isMobile ? '100%' : 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Avatar
                src={MohammedPic}
                alt="Mohammed Kothaliya"
                sx={{
                  width: 160,
                  height: 200,
                  border: '1px solid #ffd400',
                  mb: isMobile ? 2 : 0,
                }}
              />
            </Box>
            <Box sx={{
              textAlign: isMobile ? 'center' : 'left',
            }}>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                Mohammed Noor ul Hasan Kothaliya
              </Typography>
              <Link href="mailto:mh478572@dal.ca" >
                mh478572@dal.ca
              </Link>
            </Box>
          </Box>
          
          <Box sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: '8px',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start', 
            gap: 5,
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <Box sx={{
              width: isMobile ? '100%' : 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Avatar
                src={JinayPic}
                alt="Jinay Shah"
                sx={{
                  width: 160,
                  height: 200,
                  border: '1px solid #ffd400',
                  mb: isMobile ? 2 : 0,
                }}
              />
            </Box>
            <Box sx={{
              textAlign: isMobile ? 'center' : 'left',
            }}>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                Jinay Shah
              </Typography>
              <Link href="mailto:jn851778@dal.ca" >
                jn851778@dal.ca
              </Link>
            </Box>
          </Box>

        </Paper>
      </Container>
      <Box>
        <Footer />
      </Box>
    </div>

  );
}

export default AboutUs