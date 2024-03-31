import { useEffect, useState  } from "react";
import { useParams } from 'react-router-dom';
import { Box, Typography, Link, Divider, Paper, LinearProgress, Button, IconButton, Chip, Grid } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import { useNavigate } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EventIcon from '@mui/icons-material/Event';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedIcon from '@mui/icons-material/Verified';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PendingIcon from '@mui/icons-material/Pending';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LinkIcon from '@mui/icons-material/Link';
import GroupsIcon from '@mui/icons-material/Groups';

import { CircularProgress, Alert } from '@mui/material';

import axios from 'axios';

import Footer from "../Home/Footer";

type Props = {};

function trimDescriptionSummary(description:any, maxCharLength=350) {
  if (description.length <= maxCharLength) {
      return description;
  }

  // Find index of last whitespace before the max character length
  let whiteSpaceIndex = description.lastIndexOf(' ', maxCharLength - 1);

  // If no space is found before the maxLength, use maxLength directly
  if (whiteSpaceIndex === -1) {
    whiteSpaceIndex = maxCharLength;
  }

  // slice upto last whitespace's index & then trim any whitespaces at the end. Lastly append '... more'  
  let trimmedSummary = description.slice(0, whiteSpaceIndex).trim();

  return trimmedSummary;
}

const getProgressBarColor = (rating:any) => {
  if (rating >= 8) {
    return '#4867D5'; 
  } else if (rating >= 6 && rating < 8) {
    return '#27A562'; 
  } else if (rating >= 4 && rating < 6) {
    return '#FFC107'; 
  } else {
    return '#F44336'; 
  }
};

interface PortfolioDetail {
  portfolioType: string;
  summary: string[];
  twitter_link: string,
  github_link: string,
  linkedin_link: string,
  gscholar_link: string,
  resume_link: string,
  projects: any[]; 
  education: any[]; 
  experience: any[]; 
  skills: any[];          
  achievements: any[];    
  research: any[];        
  certifications: any[];  
  updatedAt: string;
  user_data: {
    email: string;
    first_name: string;
    last_name: string;
  };
}

const Portfolio = (props: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  const navigate = useNavigate();
  
  const { user_name } = useParams();
  const [ portfolio, set_portfolio ] = useState<PortfolioDetail | null>(null);
  const [ loading, set_loading ] = useState(true);
  const [ flag_failed, set_flag_failed ] = useState(false);

  const get_user_portfolio_details = async () => {
    try {
      const response =  await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio`, {
      user_name: user_name
    });
      console.log(response.data.portfolio_detail);
      set_portfolio(response.data.portfolio_detail);
      set_loading(false);
    } catch (error) {
      console.log(error);
      set_flag_failed(true);
    }
  };

  useEffect(() => {
    get_user_portfolio_details();
  }, [user_name]);
  
  if (loading && !flag_failed) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography style={{marginRight: "2rem"}}>Loading Portfolio details...</Typography>
      <CircularProgress color="warning" size={60} />
    </Box>;
  }

  if (!portfolio) {
    return (
      <div>
        <Alert severity="warning" variant="filled">
          OOPS! Portfolio not found for this user.
        </Alert>
        <Typography variant="body1" style={{ marginTop: "2rem" }}>
          Try visiting the <Link href="/search">search page</Link> to find the portfolio you are looking for.
        </Typography>
      </div>
    );
  }


  return (
    <Box sx={{ p: onMobile ? "100px 0" : "160px 0px 0px 0px" }}>
      <Box sx={{ zIndex: 1, width: "100%", maxWidth: "1300px", mx: "auto", px: onMobile ? "30px" : "50px", }} >
        <Box sx={{ display: "flex", m: "0 -15px -15px -15px", flexWrap: "wrap", alignItems: "center", flexDirection: "row", }} >
          <Box
            sx={{ mb: "15px", px: "15px", flex: 1, flexBasis: "50%", justifyContent: "center",
              ...(onTablets && { maxWidth: "100%", flexBasis: "100%", display: "flex", justifyContent: "center", }), 
              ...(onMobile && { maxWidth: "100%", flexBasis: "100%", display: "flex", flexDirection: "column", justifyContent: "center", }), 
            }} >

            <Box sx={{ pt: 0, pb: "60px", ...((onTablets || onMobile) && { pb: "65px" }), }} >
              
              <Typography sx={{ mb: "24px", fontSize: onMobile ? "4rem" : "6rem", lineHeight: "5rem", fontWeight: 600, }} >
                {portfolio.user_data.first_name.toUpperCase() + " " + portfolio.user_data.last_name.toUpperCase()}
              </Typography>

              <Typography sx={{ fontSize: "18px", lineHeight: "16px", fontWeight: 700, letterSpacing: "1.4px", marginBottom: "3rem", }} >
                <Link href={`mailto:${portfolio.user_data.email}`} >
                  <AlternateEmailIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'#fcd405'}} /> 
                </Link>
                {portfolio.user_data.email}
              </Typography>
              
              <Typography sx={{ maxWidth: "100%", mb: "35px", fontSize: "1.15rem", lineHeight: "1.5rem", textAlign: 'justify' }}>
                {portfolio.summary.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </Typography>

              <Box style={{marginBottom: "3rem"}}>
                <a href={portfolio.twitter_link} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon style={{ fontSize: 30, marginRight: onMobile? "1rem" : "3rem", color: '#1DA1F2' }} />
                </a>
                <a href={portfolio.linkedin_link} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon style={{ fontSize: 30, marginRight: onMobile? "1rem" : "3rem", color: '#0077B5' }} />
                </a>
                <a href={portfolio.github_link} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{ fontSize: 30, marginRight: onMobile? "1rem" : "3rem", color: '#211F1F' }} />
                </a>
                <a href={portfolio.gscholar_link} target="_blank" rel="noopener noreferrer">
                  <SchoolIcon style={{ fontSize: 30, marginRight: onMobile? "1rem" : "3rem", color: '#4285F4' }} />
                </a>
              </Box>

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> EDUCATION </Typography>
              
              {portfolio.education.map((item, index) => (
                <Paper key={index} elevation={3} style={{ padding: '20px', marginBottom: '2rem' }}>  {/* , backgroundColor: index === 0 ? '#ffffe0' : '#fff' */}
                  
                  <Box style={{ display: 'flex', flexDirection: onMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: "1.75rem", fontWeight:"bold", marginBottom: "0.5rem" }}>{item.university.toLocaleUpperCase()}</Typography>
                    {!onMobile && (
                      <Typography>
                        {new Date(item.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </Typography>
                    )}
                  </Box>
                  <Typography style={{ fontWeight:"bold" }}> {item.degree} </Typography>
                  {onMobile && (
                    <Typography>
                      {new Date(item.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </Typography>
                  )}
                  
                  <Typography>{item.field_of_study}</Typography>
                  <Typography> CGPA : {item.grade_obtained}/{item.max_grade}</Typography>
                
                  <Typography style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Summary: </Typography>
                  <Typography style={{ fontStyle: "italic" }}>{item.description}</Typography>
                </Paper>
              ))}

              

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> WORK EXPERIENCE </Typography>
              
              {portfolio.experience.map((item, index) => (
                <Paper key={index} elevation={3} style={{ padding: '20px', marginBottom: '2rem' }}> {/* , backgroundColor: index === 0 ? '#ffffe0' : '#fff' */}
                  <div style={{ display: 'flex', flexDirection: onMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: "1.75rem", fontWeight: "bold" }}>{item.company_name}</Typography>
                    {!onMobile && (
                      <Typography>
                        {new Date(item.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </Typography>
                    )}
                  </div>
                  <Typography style={{fontWeight: "bold"}}>{item.role}</Typography>
                  {onMobile && (
                    <Typography>
                      {new Date(item.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </Typography>
                  )}
                  <Typography>{item.location}</Typography>

                  <Typography style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Summary: </Typography>
                  <Typography style={{ fontStyle: "italic" }}>{item.description}</Typography>
                  <Typography style={{ marginTop: '1.5rem' }}>
                    <LocationCityIcon style={{verticalAlign: "middle"}} /> <Link href={item.company_link} target="_blank" rel="noopener noreferrer">{item.company_name}</Link>
                  </Typography>
                </Paper>
              ))}

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> PROJECTS </Typography>
              
              <div style={{ columnCount: onMobile ? 1 : 2, columnGap: '20px', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
                  {portfolio.projects.map((project, index) => (
                  <Paper key={index} elevation={3} style={{ marginBottom: '20px', breakInside: 'avoid' }}> {/* , backgroundColor: index % 2 === 0 ? '#F0F2EF' : '#fff' */}
                    <div style={{  alignItems: 'center', padding: '20px' }}>
                      
                      <Box style={{textAlign: 'justify'}}>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "1rem" }}>
                          <a key={index} href={`/portfolio/${user_name}/project/${project.project_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography style={{ fontSize: "1.5rem", fontWeight: 'bold', color: '#0d47a1', textAlign: onMobile ? "left" : "justify" }}>{project.title} <OpenInNewIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} /></Typography>
                          </a>
                          { project.status === "completed" ? (
                            <DoneAllIcon sx={{ color: 'green' }} />
                          ) : (
                            <PendingIcon sx={{ color: 'orange' }} />
                          )}
                        </Box>
                        <Typography>
                          <a key={index} href={`/portfolio/${user_name}/project/${project.project_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {trimDescriptionSummary(project.description)}
                            {project.description.length > 350 && 
                                <b><i>... more</i></b>
                            }
                          </a>
                        </Typography>
                        
                        {project.technologies && project.technologies.length > 0 && (
                          <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                            {project.technologies.map((tech_tool:string, index:number) => (
                              <Chip key={index} label={tech_tool} style={{ margin: onMobile ? '0.25rem' : '0.5rem' }} />
                            ))}
                          </div>
                        )}
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
                      </Box>
                    </div>
                  </Paper>
                ))}
              </div>

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> RESEARCH EXPERIENCE </Typography>

              <div style={{ columnGap: '20px', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.research.map((publication, index) => (
                  <Paper key={index} elevation={3} style={{ marginBottom: '20px', breakInside: 'avoid' }}>
                    
                    <div style={{ alignItems: 'center', padding: '20px' }}>
                      <Typography style={{ fontSize: "1.5rem", fontWeight: 'bold', marginBottom: "1rem", color: '#0d47a1' }}>{publication.title} <OpenInNewIcon style={{ verticalAlign: "middle", marginRight: "5px", color: 'black' }} /></Typography>

                        <Typography style={{ textAlign: "justify", marginBottom:"1rem"}}>{publication.description}</Typography>
                        
                        {publication.status === "completed" ? (
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <DoneAllIcon sx={{ marginRight: '1rem', color: 'green' }} />
                            <Typography style={{ color: 'green' }}>Completed</Typography>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <PendingIcon sx={{ marginRight: '10px', color: 'orange' }} />
                            <Typography style={{ color: 'orange' }}>In Progress</Typography>
                          </div>
                        )}
                        <Typography style={{ textAlign: "justify", marginTop:"1rem", marginBottom:"1rem"}}>Journal: {publication.journal}</Typography>
                        <Typography style={{marginTop:"1rem"}}>
                          Completion Date: {new Date(publication.publication_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </Typography>
                        <Typography style={{ textAlign: "justify", marginTop:"1rem"}}>Tags:</Typography>

                        {publication.methods && publication.methods.length > 0 && (
                          <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                            {publication.methods.map((method:string, index:number) => (
                              <Chip key={index} label={method} style={{ margin: '0.5rem' }} />
                            ))}
                          </div>
                        )}
                        <Button variant="contained" href={publication.publication_page} style={{ marginTop: '1rem', marginRight: '1rem' }} startIcon={<OpenInNewIcon style={{ verticalAlign: "middle", marginRight: "5px", color: 'black' }} />} target="_blank">
                          View Publication
                        </Button>
                        <Button variant="contained" href={publication.download_link} style={{ marginTop: '1rem' }} startIcon={<GitHubIcon style={{ verticalAlign: "middle", marginRight: "5px", color: 'black' }} />} target="_blank">
                          Download PDF
                        </Button>
                    </div>
                  </Paper>
                ))}
              </div>
              
              <Divider/>

              <Typography sx={{ mt: "1rem", mb: "3rem", fontSize: "3rem" }}>SKILLS</Typography>

              <Grid container spacing={2} style={{ maxWidth: '75%', margin: '0 auto', marginBottom: '2rem' }}>
                  {portfolio.skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper elevation={3} style={{ padding: '1.2rem', height: '100%', borderRadius: '1rem' }}>
                        <Typography style={{ fontSize: '1.15rem' }}>{skill.name}</Typography>
                        <LinearProgress variant="determinate" value={skill.rating * 10}
                          sx={{ height: '10px', '& .MuiLinearProgress-bar': { backgroundColor: getProgressBarColor(skill.rating), } }}
                        />
                        <Typography style={{ fontSize: '1.15rem' }}>{skill.rating}/10</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>



              <Divider/>

              <Typography sx={{ mt: "1rem", mb: "3rem", fontSize: onMobile? "2.5rem" : "3rem" }}>ACHIEVEMENTS</Typography>

              <div style={{ maxWidth: '80%', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.achievements.map((achievement, index) => (
                  <div key={index} style={{ marginBottom: '1.15rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <EventIcon sx={{ marginRight: '10px' }} />
                      <Paper elevation={3} style={{ width: '100%', padding: '20px' }}>  {/* , backgroundColor: index % 2 === 0 ? '#ffffe0' : '#fff' */}
                        <Typography variant="h6">{achievement.detail}</Typography>
                        <Typography style={{marginTop:"1rem"}}>
                          Completion Date: {new Date(achievement.completionDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </Typography>
                      </Paper>
                    </div>
                    {index !== portfolio.achievements.length - 1 && 
                      <div style={{ width: '2px', height: '1.5rem', backgroundColor: '#aaa', margin: '0 auto', marginTop: "1rem" }}></div>
                    }
                  </div>
                ))}
              </div>
              
              <Divider/>

              <Typography sx={{ mt: "1rem", mb: "3rem", fontSize: onMobile? "2.5rem" : "3rem" }}>CERTIFICATIONS</Typography>

              <div style={{ columnCount: onMobile? 1: 2, columnGap: '20px', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.certifications.map((certification, index) => (
                  <Paper key={index} elevation={3} style={{ marginBottom: '20px', breakInside: 'avoid' }}> {/* , backgroundColor: index % 2 === 0 ? '#F0F2EF' : '#fff' */}
                    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                      <WorkspacePremiumIcon sx={{ marginRight: '10px', color: '#1976d2' }} />
                      <div>
                        <Typography style={{ fontSize: "1.5rem", marginBottom: "1rem", color: '#0d47a1' }}>{certification.title}</Typography>
                        <Typography >Issuer: {certification.issuer}</Typography>
                        <Typography >Issued Date: {new Date(certification.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                        {(certification.expiry_date || certification.expiry_date!=null) && (
                          <Typography>Expiry Date: {new Date(certification.expiry_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                          <Typography>
                            <Link href={certification.verification_link} target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>Verify Certification</Link>
                          </Typography>
                          <VerifiedIcon sx={{ marginLeft: '10px', color: 'green' }} />
                        </div>
                      </div>
                    </div>
                  </Paper>
                ))}
              </div>

              <Divider/>

              <Typography sx={{ mt: "1rem", mb: "1rem", fontSize: "3rem" }}>RESUME</Typography>
              <Typography sx={{ mb:"1rem" }}>Learn more about my skills and experience, Download my resume:</Typography>
              <Button variant="contained" href={portfolio.resume_link} download>
                Download Resume
              </Button>

              <Divider style={{marginTop: "2rem"}}/>
              
              <Typography sx={{ mt: "1rem", mb: "1rem", fontSize: "3rem" }}>CONTACT</Typography>
              <Typography sx={{ mb:"1rem" }}>Lets collaborate and work together:</Typography>
              
              <Box>
                <Button variant="contained" href={`mailto:${portfolio.user_data.email}`} startIcon={<EmailIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} />}>
                Inbox Me
                </Button>
                {onMobile ? (
                  <>
                    <br />
                    <Button variant="contained" onClick={() => navigate("/collaborate")} startIcon={<GroupsIcon/>} style={{marginTop: "1rem", background: "blue", color: "white"}}> 
                      Collaborate
                    </Button>
                  </>
                ) : (
                    <Button variant="contained" onClick={() => navigate("/collaborate")} startIcon={<GroupsIcon/>} style={{marginLeft: "1rem", background: "blue", color: "white"}}> 
                      Collaborate
                    </Button>
                )}
              </Box>

              {/* <Button variant="contained" href={portfolio.resume_link} download>
                Schedule a Meeting
              </Button> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Portfolio;
