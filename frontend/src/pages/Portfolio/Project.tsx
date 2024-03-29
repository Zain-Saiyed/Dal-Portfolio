 import { useEffect, useState  } from "react";
import { useParams } from 'react-router-dom';
import { Box, Typography, Link, Paper, Button, Chip } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import GitHubIcon from '@mui/icons-material/GitHub';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PendingIcon from '@mui/icons-material/Pending';
import ReplyIcon from '@mui/icons-material/Reply';
import LinkIcon from '@mui/icons-material/Link';
import Carousel from "react-material-ui-carousel";
import { CircularProgress, Alert } from '@mui/material';


import axios from 'axios';


type Props = {};

interface ProjectDetail {
  title: string;
  description: string[];
  completionDate: string,
  status: string,
  github_link: string,
  demo_link: string,
  project_id: string,
  technologies: any[]; 
  images: any[]; 
  remarks: any[]; 
}

const Project = (props: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  
  const { user_name, project_id } = useParams();
  const [ project, set_project ] = useState<ProjectDetail | null>(null);
  const [ loading, set_loading ] = useState(true);
  const [ flag_failed, set_flag_failed ] = useState(false);
  
  const get_user_project_details = async () => {
    try {
      const response =  await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/project`, {
      user_name: user_name,
      project_id: project_id
    })
      console.log(response.data.project_detail);
      set_project(response.data.project_detail);
      set_loading(false);
    } catch (error) {
      console.log(error);
      set_flag_failed(true);
    }
  };

  useEffect(() => {
    get_user_project_details();
  }, [user_name, project_id]);
  
  if (loading && !flag_failed) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography style={{marginRight: "2rem"}}>Hang Tight! Loading Project details...</Typography>
      <CircularProgress color="warning" size={60} />
    </Box>;
  }
  
  if (!project) {
    return (
      <div>
        <Alert severity="warning" variant="filled">
          OOPS! Project not found for this user.
        </Alert>
        <Typography variant="body1" style={{ marginTop: "2rem" }}>
          Browser other projects by returning to <Link href={`/portfolio/${user_name}`}>Portfolio page</Link>.
        </Typography>
      </div>
    );
  }
  

  return (
    <Box sx={{ p: onMobile ? "2rem 0" : "3rem 0px 0px 0px" }}>
      <Box sx={{ zIndex: 1, width: "100%", maxWidth: "1300px", mx: "auto", px: onMobile ? "30px" : "50px", }} >
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
                {onMobile ? (
                  <>
                    <br />
                    <Button variant="contained" href={project.demo_link} startIcon={<LinkIcon/>} style={{marginTop: "1rem", background: "purple", color: "white"}}> 
                      View demo 
                    </Button>
                  </>
                ) : (
                    <Button variant="contained" href={project.demo_link} startIcon={<LinkIcon/>} style={{marginLeft: "1rem", background: "purple", color: "white"}}> 
                      View demo 
                    </Button>
                )}
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
                  {project.status} on {new Date(project.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </Box>

              <Typography sx={{ mt:"2rem", mb: "3rem", fontWeight: "bold" }}> Project Images: </Typography>

              <Carousel autoPlay interval={2200} animation="fade" indicators={true} navButtonsAlwaysVisible={!onMobile} navButtonsAlwaysInvisible={onMobile}>
                {project.images.map((image, index) => (
                  <Box key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={`${image}`} alt={`Image ${index + 1}`} style={{ width: 'auto', height: '30%', maxHeight: onMobile? '150px' : '550px' }} />
                  </Box>
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
