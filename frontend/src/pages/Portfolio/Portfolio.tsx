import { useEffect, useState  } from "react";
import { useParams } from 'react-router-dom';
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
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocationCityIcon from '@mui/icons-material/LocationCity';

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

// const portfolio = {
  
//   "_id": {
//     "$oid": "630f3d8e4f9d75e91a345600"
//   },
//   "user_data" : {
//     "username": "zsaiyed",
//     "email": "zainuddin.s@dal.ca",
//     "profile": {
//       "first_name": "Zainuddin",
//       "last_name": "Saiyed"
//     }
//   },
//   "portfolioType": "dalhousie_template",
//   "summary": ["As a highly skilled and accomplished Machine Learning Engineer, I have a diverse background in software development, data science, and cloud computing. Throughout my career, I have demonstrated exceptional technical expertise across a wide range of domains, including Agile software development, DevOps, cloud infrastructure (AWS, GCP, Azure), programming (Java, C++, Python), web development (React, Flask, Streamlit), databases (MongoDB, SQL Server, MySQL), and machine learning (TensorFlow, Keras, Scikit-Learn).", 
//    "I have a deep understanding of software engineering best practices and I am adept at implementing robust, scalable, and maintainable systems. My professional experience includes roles as a Machine Learning Engineer at Poly9, VP Techlabs Pvt Ltd, and a Graduate Engineer Trainee at Vodafone Intelligent Solutions (VOIS). In these positions, I have demonstrated my ability to develop and deploy cutting-edge AI and machine learning solutions, optimize data processing and storage, and collaborate cross-functionally to deliver impactful results.", 
//    "I am proud to have been recognized for my achievements, winning awards at prestigious hackathons and challenges, which showcases my innovative problem-solving skills and entrepreneurial mindset. My diverse skill set, combined with my passion for technology and drive to deliver exceptional results, make me a valuable asset to any organization seeking to leverage the power of data and machine learning to drive business growth and innovation."
//   ],
//   "twitter_link":"",
//   "github_link":"https://github.com/Zain-Saiyed",
//   "linkedin_link":"https://ca.linkedin.com/in/zain-saiyed",
//   "gscholar_link":"https://scholar.google.com/citations?hl=en&user=3OrhaEMAAAAJ",
//   "projects": [
//     {
//       "title": "AI-Chess Game",
//       "description": "This project contains the 2-player chess and AI chess game implemented in Python programming language. In addition to this it also contains the executable files (in folders 2-Player Chess EXE and AI Chess EXE) for the same so that any user can play the game without having to download Python and rest of the dependencies required to run the python scripts.",
//       "completionDate": {
//         "$date": "2022-02-07T00:00:00.000Z"
//       },
//       "status": "n",
//       "technologies": ['Tensorflow','Keras','Firebase','Python','Android application development','Git'],
//       "github_link": "https://github.com/Zain-Saiyed/Chess-Game",
//       "demo_link": "https://github.com/Zain-Saiyed/Chess-Game?tab=readme-ov-file#download-and-play",
//       "images": [
//         "https://raw.githubusercontent.com/Zain-Saiyed/Chess-Game/master/welcome.JPG",
//         "https://raw.githubusercontent.com/Zain-Saiyed/Chess-Game/master/gameplay1.JPG",
//         "https://raw.githubusercontent.com/Zain-Saiyed/Chess-Game/master/gameplay6.JPG",
//         "https://raw.githubusercontent.com/Zain-Saiyed/Chess-Game/master/gameplay2.JPG",
//         "https://raw.githubusercontent.com/Zain-Saiyed/Chess-Game/master/gameplay3.JPG",
//         "https://raw.githubusercontent.com/Zain-Saiyed/Chess-Game/master/gameplay5.JPG",
//       ],
//       "project_id": {
//         "$oid": "630f3d8e4f9d75e91a345600"
//       }
//     },{
//       "title": "Converse Now",
//       "description": "Converse-Now, is an android application which predicts a captured image containing a Hand Sign to its coresponding Alphabet, and also outputs the coresponding probability of prediction. This app will provide a interface which will bridge the gap between the differently abled and the common mass. Other features are that: users can also Submit captured Images to us, with which we can further optimize and improve the neural network model for better accuracy and predictions.",
//       "completionDate": {
//         "$date": "2019-11-15T00:00:00.000Z"
//       },
//       "status": "completed",
//       "technologies": ['Tensorflow','Keras','Firebase','Python','Android application development','Git'],
//       "github_link": 'https://github.com/Zain-Saiyed/Converse_Now',
//       "images": [
//         "https://raw.githubusercontent.com/Zain-Saiyed/Converse_Now/master/Images/cover_app.jpg"
//       ],
//       "project_id": {
//         "$oid": "630f3d8e4f9d75e91a345601"
//       }
//     },{
//       "title": "Waste Classifier Application",
//       "description": "Recycle-ifier, is an android application which classifies whether the captured image contains Organic or Recycleable items and also outputs the coresponding probability of prediction. In addition to this users can also Submit captured Images to us, with which we can further optimize and improve the neural network model for better accuracy and predictions. The name Recycle-ifier is derived from two words which are- Recyclable and classifier. As the main function of the app is to classify if image has Recycleable or Organic items.",
//       "completionDate": {
//         "$date": "2020-03-15T00:00:00.000Z"
//       },
//       "status": "completed",
//       "technologies": ['Tensorflow','Keras','Firebase','Python','Android application development','Git'],
//       "github_link": 'https://github.com/Zain-Saiyed/Waste-Classifier-Application',
//       "demo_link":'https://github.com/Zain-Saiyed/Waste-Classifier-Application/blob/master/Images/recycleifier_demo.gif',
//       "images": [
//         "portfolio1.jpg",
//         "portfolio2.jpg"
//       ],
//       "project_id": {
//         "$oid": "630f3d8e4f9d75e91a345602"
//       }
//     }
//   ],
//   "education": [
//     {
//       "degree": "Masters in Applied Computer Science",
//       "field_of_study": "Computer Science",
//       "university": "Dalhousie University",
//       "start_date": {
//         "$date": "2023-05-01T00:00:00.000Z"
//       },
//       "end_date": {
//         "$date": "2024-09-01T00:00:00.000Z"
//       },
//       "grade_obtained": "4",
//       "max_grade": "4.3",
//       "description": "Learnt S.O.L.I.D. design principles, Design Patterns, MVC Archietcture. AWS, GCP and Azure Cloud Services. Serverless technologies."
//     },
//     {
//       "degree": "Bachelor of Computer Science Engineering",
//       "field_of_study": "Computer Science",
//       "university": "Symbiosis Institute of Technology",
//       "start_date": {
//         "$date": "2017-06-01T00:00:00.000Z"
//       },
//       "end_date": {
//         "$date": "2021-06-01T00:00:00.000Z"
//       },
//       "grade_obtained": "8.0",
//       "max_grade": "10",
//       "description": "Focused on software development and machine learning. Learning Analytics, Statistics, and Data modelling."
//     },
//   ],
//   "experience": [
//     {
//       "company_name": "Vodafone Intelligent Solutions",
//       "company_link": "https://www.vodafone.com/careers/professional-career-areas/shared-services",
//       "role": "Graduate Engineer Trainee",
//       "location": "Pune, India",
//       "start_date": {
//         "$date": "2021-05-01T00:00:00.000Z"
//       },
//       "end_date": {
//         "$date": "2022-05-31T00:00:00.000Z"
//       },
//       "description": "Worked on data warehouses and SQL databases optimizing pipelines for overall performance."
//     }
//   ],
//   "skills": [
//     {
//       "name": "AWS",
//       "rating": 9
//     },
//     {
//       "name": "GCP",
//       "rating": 9
//     },
//     {
//       "name": "Java",
//       "rating": 8
//     },
//     {
//       "name": "Machine Learning",
//       "rating": 8
//     },
//     {
//       "name": "Data Science",
//       "rating": 8
//     },
//     {
//       "name": "Python",
//       "rating": 8
//     },
//     {
//       "name": "SQL",
//       "rating": 9
//     },
//     {
//       "name": "React",
//       "rating": 6
//     },
//     {
//       "name": "PowerBI",
//       "rating": 6
//     },
//     {
//       "name": "JavaSript",
//       "rating": 9
//     },
//     {
//       "name": "C++",
//       "rating": 5
//     },
//     {
//       "name": "JIRA",
//       "rating": 6
//     },
//     {
//       "name": "TypeScript",
//       "rating": 2
//     }
//   ],
//   "achievements": [
//     {
//       "completionDate": {
//         "$date": "2024-03-01T00:00:00.000Z"
//       },
//       "detail": "Won Second place at Cognizant BrAInstrom challenge."
//     },
//     {
//       "completionDate": {
//         "$date": "2024-01-01T00:00:00.000Z"
//       },
//       "detail": "Qualified for a health & wellness Generative AI hackathon held in Dalhousie University."
//     },
//     {
//       "completionDate": {
//         "$date": "2019-09-01T00:00:00.000Z"
//       },
//       "detail": "Won First place in HERE Technologies Datathon by building an Android application."
//     }
//   ],
//   "research": [
//     {
//       "title": "Explainable Misinformation Detection Across Multiple Social Media Platforms",
//       "journal": "IEEE Access",
//       "publication_date": {
//         "$date": "2023-03-08T00:00:00.000Z"
//       },
//       "status":"completed",
//       "authors": ["GARGI JOSHI" , "ANANYA SRIVASTAVA" , "BHARGAV YAGNIK" , "MOHAMMED HASAN" ,"ZAINUDDIN SAIYED" , "LUBNA A. GABRALLA" , "AJITH ABRAHAM (Senior Member, IEEE)", "RAHEE WALAMBE", "KETAN KOTECHA"],
//       "description": "The abstract of the paper highlights the significant impact of Web Information Processing (W.I.P.) on modern society, emphasizing the prevalence of misinformation on social media platforms. The paper discusses the use of machine learning-based models to detect misinformation, addressing challenges due to the variety of social media platforms. It proposes integrating domain adaptation and explainable A.I. techniques to enhance generalized detection and provide transparent outcomes. By applying Domain Adversarial Neural Network (DANN) for detection and Local Interpretable Model-Agnostic Explanations (LIME) for explanation, the study focuses on combating COVID-19 misinformation as a case study. Results indicate improved classification performance with DANN, enhancing accuracy and A.U.C. metrics while ensuring trustworthy information processing to combat misinformation effectively.",
//       "methods": ["Deep Learning", "Natural Language Processing", "Domain Adaptation", "Web Scraping", "Misinformation Detection", "Explainable AI", "Covid-19"],
//       "publication_page": "https://ieeexplore.ieee.org/document/10064251",
//       "download_link": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10064251"
//     }
//   ],
//   "certifications": [
//     {
//       "title": "Deep learning specialization",
//       "issuer": "DeepLearning.ai - Coursera",
//       "date": {
//         "$date": "2020-11-20T00:00:00.000Z"
//       },
//       "expiry_date" : null, 
//       "verification_link": "https://drive.google.com/drive/folders/1YLIltgjAGm8jpMKfcqsqhS0flwjkFJt7"
//     },
//     {
//       "title": "Architecting with Google Compute Engine specialization",
//       "issuer": "Google Cloud - Coursera",
//       "date": {
//         "$date": "2020-08-20T00:00:00.000Z"
//       },
//       "expiry_date" : null,
//       "verification_link": "https://drive.google.com/drive/folders/1EJRlRCcOKUGHRTg7rrjXr9uDI9pNl_yT"
//     },
//     {
//       "title": "Machine Learning",
//       "issuer": "Stanford - Coursera",
//       "date": {
//         "$date": "2019-02-20T00:00:00.000Z"
//       },
//       "expiry_date" : null,
//       "verification_link": "https://drive.google.com/file/d/1dbPO7K3xpn7m6nhjfcOK-Lix6bZ8p0OI/view",
//     },
//   ],
//   "createdAt": {
//     "$date": "2022-06-01T00:00:00.000Z"
//   },
//   "updatedAt": {
//     "$date": "2022-06-15T00:00:00.000Z"
//   },
//   "resume_link": "https://www.soundczech.cz/temp/lorem-ipsum.pdf",
//   "portfolioName": "Software Developer",
//   "default": true,
//   "user_id": {
//     "$oid": "60af884b5b50cabd3d270000"
//   }
// };
interface PortfolioDetail {
  portfolioType: string;
  summary: string[];
  twitter_link: string,
  github_link: string,
  linkedin_link: string,
  gscholar_link: string,
  resume_link: string,
  projects: any[]; // Define the type structure for projects
  education: any[]; // Define the type structure for education
  experience: any[]; // Define the type structure for experience
  skills: any[]; // Define the type structure for skills
  achievements: any[]; // Define the type structure for achievements
  research: any[]; // Define the type structure for research
  certifications: any[]; // Define the type structure for certifications
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
  
  const { user_name } = useParams();
  const [portfolio, set_portfolio] = useState<PortfolioDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const get_user_portfolio_details = async () => {
    try {
      const response =  await axios.post(`http://localhost:3001/api/portfolio`, {
      user_name: user_name
    })
      console.log(response.data.portfolio_detail);
      set_portfolio(response.data.portfolio_detail);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_user_portfolio_details();
  }, [user_name]);
  
  if (loading) {
    return <div>Loading restaurant details...</div>;
  }

  if (!portfolio) {
    return <div>Portfolio not found.</div>;
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
                  
                  <Box style={{ display: 'flex', flexDirection: onMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: "1.75rem", fontWeight:"bold", marginBottom: "0.5rem" }}>{item.university.toLocaleUpperCase()}</Typography>
                    {!onMobile && (
                      <Typography>
                        {new Date(item.start_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </Typography>
                    )}
                  </Box>
                  <Typography style={{ fontWeight:"bold" }}> {item.degree} </Typography>
                  {onMobile && (
                    <Typography>
                      {new Date(item.start_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
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
                        {new Date(item.start_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </Typography>
                    )}
                  </div>
                  <Typography style={{fontWeight: "bold"}}>{item.role}</Typography>
                  {onMobile && (
                    <Typography>
                      {new Date(item.start_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {new Date(item.end_date.$date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
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
                            <Typography style={{ fontSize: "1.5rem", color: '#0d47a1', textAlign: onMobile ? "left" : "justify" }}>{project.title} <OpenInNewIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} /></Typography>
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
                        {/* <Typography>{project.description.length > 350 ? project.description.slice(0, 350).trim() + '... more'  : project.description}</Typography> */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                            {project.technologies.map((tech_tool:string, index:number) => (
                              <Chip key={index} label={tech_tool} style={{ margin: onMobile ? '0.25rem' : '0.5rem' }} />
                            ))}
                          </div>
                        )}
                        <Button variant="contained" href={project.github_link} style={{marginTop:'1rem'}} startIcon={<GitHubIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} />} download>
                          View on GitHub
                        </Button>
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
                      <Typography style={{ fontSize: "1.5rem", marginBottom: "1rem", color: '#0d47a1' }}>{publication.title} <OpenInNewIcon style={{ verticalAlign: "middle", marginRight: "5px", color: 'black' }} /></Typography>

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

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '75%', margin: '0 auto', marginBottom: '2rem' }}>
                {portfolio.skills.map((skill, index) => (
                  <div key={index} style={{ width: '30%', marginBottom: '1.2rem' }}>
                    <Paper elevation={3} style={{ padding: '1.2rem', height: '100%', borderRadius: '1rem' }}>
                    {/* <Paper elevation={3} style={{ padding: '1.2rem', height: '100%' }}> */}
                      <Typography style={{ fontSize: '1.15rem' }}>{skill.name}</Typography>
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
