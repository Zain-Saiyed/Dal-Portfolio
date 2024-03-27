import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Box, Typography, Link, Divider, Paper, LinearProgress, Button, IconButton, Chip } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import GitHubIcon from '@mui/icons-material/GitHub';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PendingIcon from '@mui/icons-material/Pending';
import ReplyIcon from '@mui/icons-material/Reply';
import LinkIcon from '@mui/icons-material/Link';

import axios from 'axios';

import Footer from "../Home/Footer";
import Carousel from "react-material-ui-carousel";

type Props = {};

const project = {
  "title": "Waste Classifier Application",
  "description": "Recycle-ifier, is an android application which classifies whether the captured image contains Organic or Recycleable items and also outputs the coresponding probability of prediction. In addition to this users can also Submit captured Images to us, with which we can further optimize and improve the neural network model for better accuracy and predictions. The name Recycle-ifier is derived from two words which are- Recyclable and classifier. As the main function of the app is to classify if image has Recycleable or Organic items.",
  "completionDate": {
    "$date": "2022-05-05T00:00:00.000Z"
  },
  "status": "completed",
  "technologies": [
    "Tensorflow",
    "Keras",
    "Python",
    "Android Application Development"
  ],
  "github_link": "https://github.com/Zain-Saiyed/Waste-Classifier-Application",
  "demo_link": "https://github.com/Zain-Saiyed/Waste-Classifier-Application",
  "images": [
    "https://raw.githubusercontent.com/Zain-Saiyed/Waste-Classifier-Application/master/Images/all_screens.jpg",
    "https://raw.githubusercontent.com/Zain-Saiyed/Waste-Classifier-Application/master/Images/splash_screen.png"
  ],
  "remarks": [
    "Download application APK by visiting the GitHub repository.",
    "IOS devices are currently not supported.",
    "Contact for more details about the application.",
  ],
  "project_id": {
    "$oid": "630f3d8e4f9d75e91a345600"
  }
};


const Project = (props: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  
  const { user_name } = useParams();
  const { project_id } = useParams();

  const get_user_project_details = async () => {
    try {
    const response = await axios.get(`https://localhost:3001/api/project/`, { params: {
      username: user_name,
      projectID: project_id
    }} )
      console.log(response.data);
  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_user_project_details();
  }, []);

  return (
    <Box sx={{ p: onMobile ? "50px 0" : "70px 0px 0px 0px" }}>
      <Box sx={{ zIndex: 1, width: "100%", maxWidth: "1300px", mx: "auto", px: "50px" }} >
        <Box sx={{ display: "flex", m: "0 -15px -15px -15px", flexWrap: "wrap", alignItems: "center", flexDirection: "row" }}>
          <Box
            sx={{ mb: "15px", px: "15px", flex: 1, flexBasis: "100%", justifyContent: "center" }}>

            <Box style={{marginBottom: "2rem"}}>
              <Button variant="contained" href={`/portfolio/${user_name}`} startIcon={<ReplyIcon/>}> View other projects </Button>
            </Box>

            <Box sx={{ pt: 0, pb: "60px" }}>
              <Typography sx={{ mb: "24px", fontSize: onMobile ? "4rem" : "6rem", lineHeight: "5rem", fontWeight: 600, textAlign: 'justify' }}>
                {project.title}
              </Typography>

              <Typography style={{ marginBottom:"1.5rem", textAlign: 'justify' }}>{project.description}</Typography>
              
              <Box>
                <Button variant="contained" href={project.github_link} startIcon={<GitHubIcon />}>
                  View on GitHub
                </Button>
                <Button variant="contained" href={project.demo_link} startIcon={<LinkIcon/>} style={{marginLeft: "1rem", background: "purple", color: "white"}}> View demo </Button>
              </Box>

              <Typography sx={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Technologies Used:</Typography>
              <Box style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                {project.technologies.map((tech_tool, index) => (
                  <Chip key={index} label={tech_tool} style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }} />
                ))}
              </Box>
              <Box style={{ display:"flex" }}>
                <Typography sx={{ fontWeight: 'bold' }}>STATUS:</Typography>
                  {project.status === "completed" ? (
                    <DoneAllIcon sx={{ marginLeft: '1rem', marginRight: '1rem', color: 'green' }} />
                  ) : (
                    <PendingIcon sx={{ marginLeft: '1rem', marginRight: '1rem', color: 'orange' }} />
                  )}
                  {project.status} on {new Date(project.completionDate.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </Box>

              <Typography sx={{ mt:"2rem", mb: "3rem", fontWeight: "bold" }}> Project Images: </Typography>

              <Carousel>
                {project.images.map((image, index) => (
                  <Paper key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={`${image}`} alt={`Image ${index + 1}`} style={{ width: 'auto', height: '30%', maxHeight: onMobile? '250px' : '550px' }} />
                  </Paper>
                ))}
              </Carousel>
              
              {project.remarks && (
                <Box style={{ marginTop: '1rem' }}>
                  <Typography style={{ fontWeight: "bold" }}>Remarks:</Typography>
                  <ul>
                    {project.remarks.map((remark, index) => (
                      <li key={index}>{remark}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
