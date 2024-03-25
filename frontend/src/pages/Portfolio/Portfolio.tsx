import React from "react";
import { Box, Typography, Link, Divider, Paper, LinearProgress, Button, IconButton, Chip } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
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

import Footer from "../Home/Footer";

type Props = {};

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

const portfolio = {
  "_id": {
    "$oid": "630f3d8e4f9d75e91a345600"
  },
  "user_data" : {
    "username": "zain-saiyed",
    "email": "zainuddin.s@dal.ca",
    "profile": {
      "first_name": "Zainuddin",
      "last_name": "Saiyed"
    }
  },
  "portfolioType": "dalhousie_template",
  "summary": ["I am currently on my Computer Science Ph.D fellowship as a first year student at Visualization Design Lab, supervised by Prof. Alexander Lex in Kahlert School of Computing, University of Utah. I graduated from Bangladesh University of Engineering and Technology in 2022 with a BSc in Computer Science and Engineering. After my graduation, I worked at IQVIA, a human data science company, as a part of the data science team. Parallel to this, I have a keen interest in Human-Computer Interaction (HCI) research that focuses on accessibility techniques, process-based data analysis and qualitative research techniques.", 
   "I conducted my undergraduate thesis in the last year on \"eDakterBari - A Human-Centered Solution Enabling Online Medical Consultation for Resource-Constrained Communities in Bangladesh.\" As part of my undergrad thesis, I worked with Dr. A. B. M. Alim Al Islam, Professor, CSE, BUET, in the field of HCI. In addition, I worked on two Exploratory Data Analysis-based research projects with Dr. Sriram Chellappan, Professor, Department of Computer Science and Engineering, University of South Florida. I aspire to study the social, psychological, and environmental issues that affect the local communities. To view my publications, please visit my Google Scholar profile.", 
   "Aside from my academic pursuits, dancing has always been a great passion of mine. I really enjoy exploring new places and getting acquainted with diverse cultures. As I have now moved into Salt lake city in Utah and Utah is quite famous for hiking, I tried to spend this summer weekends with minor hiking activities."],
  "twitter_link":"",
  "github_link":"",
  "linkedin_link":"",
  "gscholar_link":"",
  "projects": [
    {
      "title": "Personal Portfolio Website",
      "description": "A personal portfolio website showcasing my projects, skills, and achievements.",
      "completionDate": {
        "$date": "2022-05-05T00:00:00.000Z"
      },
      "status": "completed",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ],
      "githubLink": "https://github.com/example/portfolio",
      "images": [
        "portfolio1.jpg",
        "portfolio2.jpg"
      ],
      "project_id": {
        "$oid": "630f3d8e4f9d75e91a345600"
      }
    },{
      "title": "Personal Portfolio Website",
      "description": "A personal portfolio website showcasing my projects, skills, and achievements.",
      "completionDate": {
        "$date": "2022-05-05T00:00:00.000Z"
      },
      "status": "in-progress",
      "technologies": [
        "HTML",
      ],
      "githubLink": "https://github.com/example/portfolio",
      "images": [
        "portfolio1.jpg",
        "portfolio2.jpg"
      ],
      "project_id": {
        "$oid": "630f3d8e4f9d75e91a345600"
      }
    },{
      "title": "Personal Portfolio Website",
      "description": "A personal portfolio website showcasing my projects, skills, and achievements.",
      "completionDate": {
        "$date": "2022-05-05T00:00:00.000Z"
      },
      "status": "in-progress",
      "technologies": ["lol"
      ],
      "githubLink": "https://github.com/example/portfolio",
      "images": [
        "portfolio1.jpg",
        "portfolio2.jpg"
      ],
      "project_id": {
        "$oid": "630f3d8e4f9d75e91a345600"
      }
    }
  ],
  "education": [
    {
      "degree": "PH.D",
      "field_of_study": "Theory of Computation",
      "university": "University of Windsor",
      "start_date": {
        "$date": "2023-09-01T00:00:00.000Z"
      },
      "end_date": {
        "$date": "2025-05-01T00:00:00.000Z"
      },
      "grade_obtained": "4",
      "max_grade": "4.5",
      "description": "Advisr: Prof. Momo. Focused on Computing and machine learning."
    },
    {
      "degree": "Bachelor of Computer Science",
      "field_of_study": "Computer Science",
      "university": "Dalhousie University",
      "start_date": {
        "$date": "2018-09-01T00:00:00.000Z"
      },
      "end_date": {
        "$date": "2022-05-01T00:00:00.000Z"
      },
      "grade_obtained": "3.7",
      "max_grade": "4",
      "description": "Focused on software development and machine learning."
    },
    
  ],
  "experience": [
    {
      "company_name": "Tech Innovations Inc.",
      "company_link": "https://techinnovations.com",
      "role": "Software Developer Intern",
      "location": "Halifax, Canada",
      "start_date": {
        "$date": "2021-05-01T00:00:00.000Z"
      },
      "end_date": {
        "$date": "2021-08-31T00:00:00.000Z"
      },
      "description": "Developed and maintained several internal tools used across the company."
    }
  ],
  "skills": [
    {
      "name": "Java",
      "rating": 8
    },
    {
      "name": "Python",
      "rating": 7
    },
    {
      "name": "React",
      "rating": 6
    },
    {
      "name": "Matlab",
      "rating": 2
    },
    {
      "name": "JavaSript",
      "rating": 9
    },
    {
      "name": "C++",
      "rating": 5
    },
    {
      "name": "C#",
      "rating": 3
    }
  ],
  "achievements": [
    {
      "completionDate": {
        "$date": "2020-11-15T00:00:00.000Z"
      },
      "detail": "Dean's List 2020"
    },
    {
      "completionDate": {
        "$date": "2021-05-25T00:00:00.000Z"
      },
      "detail": "Winner of Local Hack Day Winner of Local Hack Day Winner of Local Hack Day: Build 2021"
    },
    {
      "completionDate": {
        "$date": "2021-05-25T00:00:00.000Z"
      },
      "detail": "Winner of Local Hack Day Winner of Local Hack Day Winner of Local Hack Day: Build 2021"
    },
    {
      "completionDate": {
        "$date": "2021-05-25T00:00:00.000Z"
      },
      "detail": "Winner of Local Hack Day Winner of Local Hack Day Winner of Local Hack Day: Build 2021"
    }
  ],
  "certifications": [
    {
      "title": "Certified Java Developer",
      "issuer": "Oracle",
      "date": {
        "$date": "2020-08-20T00:00:00.000Z"
      },
      "verification_link": "https://certification.oracle.com/verify",
      "expiry_date": {
        "$date": "2023-03-12T00:00:00.000Z"
      }
    },
    {
      "title": "Certified Java Developer",
      "issuer": "Oracle",
      "date": {
        "$date": "2020-08-20T00:00:00.000Z"
      },
      "verification_link": "https://certification.oracle.com/verify",
      "expiry_date": {
        "$date": "2023-03-12T00:00:00.000Z"
      }
    },
    {
      "title": "Certified Java Developer",
      "issuer": "Oracle",
      "date": {
        "$date": "2020-08-20T00:00:00.000Z"
      },
      "verification_link": "https://certification.oracle.com/verify",
      "expiry_date": {
        "$date": "2023-03-12T00:00:00.000Z"
      }
    },
    {
      "title": "Certified Java Developer",
      "issuer": "Oracle",
      "date": {
        "$date": "2020-08-20T00:00:00.000Z"
      },
      "verification_link": "https://certification.oracle.com/verify",
      "expiry_date": {
        "$date": "2023-03-12T00:00:00.000Z"
      }
    },
    {
      "title": "Certified Java Developer",
      "issuer": "Oracle",
      "date": {
        "$date": "2020-08-20T00:00:00.000Z"
      },
      "verification_link": "https://certification.oracle.com/verify",
      "expiry_date": {
        "$date": "2023-03-12T00:00:00.000Z"
      }
    }
  ],
  "createdAt": {
    "$date": "2022-06-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2022-06-15T00:00:00.000Z"
  },
  "resume_link": "https://www.soundczech.cz/temp/lorem-ipsum.pdf",
  "portfolioName": "Data Engineer",
  "default": false,
  "user_id": {
    "$oid": "60af884b5b50cabd3d270000"
  }
};

const Portfolio = (props: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  
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
              
              <Typography variant="h2" sx={{ mb: "24px", fontSize: "6rem", lineHeight: "5rem", fontWeight: 600, }} >
                {portfolio.user_data.profile.first_name.toUpperCase() + " " + portfolio.user_data.profile.last_name.toUpperCase()}
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
                  <TwitterIcon style={{ fontSize: 30, marginRight: "3rem", color: '#1DA1F2' }} />
                </a>
                <a href={portfolio.linkedin_link} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon style={{ fontSize: 30, marginRight: "3rem", color: '#0077B5' }} />
                </a>
                <a href={portfolio.github_link} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{ fontSize: 30, marginRight: "3rem", color: '#211F1F' }} />
                </a>
                <a href={portfolio.gscholar_link} target="_blank" rel="noopener noreferrer">
                  <SchoolIcon style={{ fontSize: 30, marginRight: "3rem", color: '#4285F4' }} />
                </a>
              </Box>

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> EDUCATION </Typography>
              
              {portfolio.education.map((item, index) => (
                <Paper key={index} elevation={3} style={{ padding: '20px', marginBottom: '2rem' }}>  {/* , backgroundColor: index === 0 ? '#ffffe0' : '#fff' */}
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: "1.75rem", fontWeight:"bold" }}>{item.university.toLocaleUpperCase()}</Typography>
                    <Typography>
                      {new Date(item.start_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </Typography>
                  </div>
                  <Typography> {item.degree} </Typography>
                  <Typography style={{ marginTop:"1.5rem" }}>{item.field_of_study}</Typography>
                  <Typography> CGPA : {item.grade_obtained}/{item.max_grade}</Typography>
                
                  <Typography style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Summary: </Typography>
                  <Typography style={{ fontStyle: "italic" }}>{item.description}</Typography>
                </Paper>
              ))}

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> WORK EXPERIENCE </Typography>
              
              {portfolio.experience.map((item, index) => (
                <Paper key={index} elevation={3} style={{ padding: '20px', marginBottom: '2rem' }}> {/* , backgroundColor: index === 0 ? '#ffffe0' : '#fff' */}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: "1.75rem", fontWeight: "bold" }}>{item.company_name}</Typography>
                    <Typography>
                      {new Date(item.start_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </Typography>
                  </div>
                  <Typography variant="body1">{item.role}</Typography>
                  <Typography variant="body1">{item.location}</Typography>
                  <Typography style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>Summary: </Typography>
                  <Typography style={{ fontStyle: "italic" }}>{item.description}</Typography>
                  <Typography style={{ marginTop: '1.5rem' }}>
                    <Link href={item.company_link} target="_blank" rel="noopener noreferrer">{item.company_name}</Link>
                  </Typography>
                </Paper>
              ))}

              <Divider/>

              <Typography sx={{ mt:"1rem", mb: "3rem", fontSize: "3rem" }}> PROJECTS </Typography>
              
              <div style={{ columnCount: 2, columnGap: '20px', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.projects.map((project, index) => (
                  <Paper key={index} elevation={3} style={{ marginBottom: '20px', breakInside: 'avoid' }}> {/* , backgroundColor: index % 2 === 0 ? '#F0F2EF' : '#fff' */}
                    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                      
                      { project.status === "completed" ? (
                        <DoneAllIcon sx={{ marginRight: '10px', color: 'green' }} />
                      ) : (
                        <PendingIcon sx={{ marginRight: '10px', color: 'orange' }} />
                      )}
                      <div>
                      <a key={index} href={"https://localhost:3000/projects/1"}>
                        <Typography style={{ fontSize: "1.5rem", marginBottom: "1rem", color: '#0d47a1' }}>{project.title}</Typography>
                      </a>
                        <Typography>{project.description}</Typography>
                        {project.technologies && project.technologies.length > 0 && (
                          <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                            {project.technologies.map((tech_tool, index) => (
                              <Chip key={index} label={tech_tool} style={{ marginRight: '0.5rem' }} />
                            ))}
                          </div>
                        )}
                        <Button variant="contained" href={project.githubLink} style={{marginTop:'1rem'}} startIcon={<GitHubIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} />} download>
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                  </Paper>
                ))}
              </div>



              

              <Divider/>

              <Typography sx={{ mt: "1rem", mb: "3rem", fontSize: "3rem" }}>SKILLS</Typography>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '75%', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.skills.map((skill, index) => (
                  <div key={index} style={{ width: '30%', marginBottom: '1.2rem' }}>
                    <Paper elevation={3} style={{ padding: '1.2rem', height: '100%', borderRadius: '3rem' }}>
                    {/* <Paper elevation={3} style={{ padding: '1.2rem', height: '100%' }}> */}
                      <Typography style={{ fontSize: '1.5rem' }}>{skill.name}</Typography>
                      <LinearProgress variant="determinate" value={skill.rating * 10}
                        sx={{ height: '10px', '& .MuiLinearProgress-bar': { backgroundColor: getProgressBarColor(skill.rating), } }}
                      />
                      <Typography style={{ fontSize: '1.15rem' }}>{skill.rating}/10</Typography>
                    </Paper>
                  </div>
                ))}
              </div>


              <Divider/>

              <Typography sx={{ mt: "1rem", mb: "3rem", fontSize: "3rem" }}>ACHIEVEMENTS</Typography>

              <div style={{ maxWidth: '80%', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.achievements.map((achievement, index) => (
                  <div key={index} style={{ marginBottom: '1.15rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <EventIcon sx={{ marginRight: '10px' }} />
                      <Paper elevation={3} style={{ width: '100%', padding: '20px' }}>  {/* , backgroundColor: index % 2 === 0 ? '#ffffe0' : '#fff' */}
                        <Typography variant="h6">{achievement.detail}</Typography>
                        <Typography style={{marginTop:"1rem"}}>
                          Completion Date: {new Date(achievement.completionDate.$date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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

              <Typography sx={{ mt: "1rem", mb: "3rem", fontSize: "3rem" }}>CERTIFICATIONS</Typography>

              <div style={{ columnCount: 2, columnGap: '20px', maxWidth: '900px', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.certifications.map((certification, index) => (
                  <Paper key={index} elevation={3} style={{ marginBottom: '20px', breakInside: 'avoid' }}> {/* , backgroundColor: index % 2 === 0 ? '#F0F2EF' : '#fff' */}
                    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                      <WorkspacePremiumIcon sx={{ marginRight: '10px', color: '#1976d2' }} />
                      <div>
                        <Typography style={{ fontSize: "1.5rem", marginBottom: "1rem", color: '#0d47a1' }}>{certification.title}</Typography>
                        <Typography >Issuer: {certification.issuer}</Typography>
                        <Typography >Issued Date: {new Date(certification.date.$date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                        <Typography >Expiry Date: {new Date(certification.expiry_date.$date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
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
              
              



              <Divider style={{marginTop: "2rem"}}/>

              <Typography sx={{ mt: "1rem", mb: "1rem", fontSize: "3rem" }}>CONTACT</Typography>
              <Typography sx={{ mb:"1rem" }}>Lets collaborate and work together:</Typography>
              <Button variant="contained" href={`mailto:${portfolio.user_data.email}`} startIcon={<EmailIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} />} download>
                Inbox Me
              </Button>
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
