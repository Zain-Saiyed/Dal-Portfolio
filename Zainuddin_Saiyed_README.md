# CSCI 5709 Assignment 3 

* *Date Created*: March 29, 2024
* *Last Modification Date*: April 03, 2024
* *Assignment (Project) URL*: https://csci-5709-group-1-dal-portfolio.netlify.app/
* *Assignment (Project Feature) URL*: https://main--csci-5709-group-1-dal-portfolio.netlify.app/portfolio/660ba6e509278cf966dcfb0d
* *GitLab individual URL for Assignment 3*: https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/zainuddin?ref_type=heads
* *GitLab group URL for Assignment 3*: https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/main?ref_type=heads


* *Frontend URL*: https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/main/frontend?ref_type=heads
* *Backend URL*: https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/main/backend?ref_type=heads


## Authors
* [Zainuddin Saiyed](zainuddin.s@dal.ca) - *Full Stack Developer*

## Built With
* [NodeJS](https://nodejs.org/en) - The open-source, JavaScript runtime environment for building backend applications.
* [ExpressJS](https://expressjs.com/) - A web application framework for Node.js.
* [React](https://react.dev/) React - The web framework used for building the frontend components which the user can interact with. Used for creating dynamic and responsive user interfaces for Dal Portfolio project.
* [MongoDB](https://www.mongodb.com/) - The NoSQL Database for storing data in the form of documents and collections.
* [Material UI](https://mui.com/material-ui/) - Comprehensive UI Framework with open source React components, adhering to the material design specification. Used for creating a consistent and seamless/elegant user interface design in Dal Portfolio project.
* [Yarn](https://yarnpkg.com/) - Used as package manager that acts as the project manager.

## Deployment
This repository is mirrored on GitHub deployed to Netlify (frontend) and Render (Backend).

## Feature and its related tasks developed 
### Feature: 
* Portfolio Template
### Related Tasks:
* View Portfolio template
* View Project details
* Contact and Collaborate with user

## List of files authored
### Frontend
* [frontend\src\pages\Portfolio\index.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/index.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Bio.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Bio.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Certifications.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Certifications.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Contact.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Contact.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Education.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Education.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Projects.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Projects.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Resume.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Resume.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Skills.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Skills.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\WorkExperience.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/WorkExperience.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Project.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Project.tsx?ref_type=heads)
* [frontend\src\hooks\textColor.ts](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/hooks/textColor.ts?ref_type=heads)

### Backend
* [backend\src\api\controllers\portfolio\index.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/controllers/portfolio/index.js?ref_type=heads)
* [backend\src\api\controllers\portfolio\portfolio\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/controllers/portfolio/portfolio/portfolio.js?ref_type=heads)
* [backend\src\api\controllers\portfolio\portfolio\project.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/controllers/portfolio/portfolio/project.js?ref_type=heads)
* [backend\src\api\routes\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/routes/portfolio.js?ref_type=heads)
* [backend\src\models\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/models/portfolio.js?ref_type=heads)

## Frontend Routes
* **/portfolio/:portfolio_id**: This route displays the portfolio details corresponding to the portfolio_id. This si done by fetching the required details from the Backend.

## Backend APIs
* **/portfolio/:portfolo_id**: This api retrives the portolio details from the portfolio collection. This fulfills the functionality of displaying the portfolio details on the portfolio Sections in the frontend for a user.
* **/portfolio/:portfolio_id/project**: This api fulfills the functionality of retrieving all the project details for a project_id present in the portfolio (identified by portfolio_id).

## Sources Used / Referenes

### 1. [frontend\src\pages\Portfolio\Sections\Bio.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Bio.tsx?ref_type=heads)

*Lines 64 - 135*

```
<Stack direction={"row"} spacing={2}>
  {!!portfolio?.bio?.twitter && (
    <a
      href={portfolio.bio?.twitter}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="twitter" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.linkedin && ( 
    <a
      href={portfolio.bio?.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="linkedin" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.github && ( 
    <a
      href={portfolio.bio?.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="github" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.gscholar && ( 
    <a
      href={portfolio.bio?.gscholar}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="education" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.facebook && ( 
    <a
      href={portfolio.bio?.facebook}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="facebook" sx={{ fontSize: "30px" }} />
    </a>
  )}

  {!!portfolio?.bio?.instagram && ( 
    <Icon
      component={"a"}
      href="portfolio.bio?.instagram"
      style={{ color: "inherit" }}
      name="instagram"
      sx={{ fontSize: "30px" }}
    />
  )}
  {!!portfolio?.bio?.youtube && ( 
    <a
      href={portfolio.bio?.youtube}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="youtube" sx={{ fontSize: "30px" }} />
    </a>
  )}
</Stack>

```

The code above was created by referring the code in [[1]](https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable), and [[2]](https://mui.com/material-ui/react-stack/) as shown below, respectively : 

```
[1]
<a href="https://www.kaiostech.com/store/" target="_blank" rel="noreferrer">
  KaiStore
</a>
```
```
[2]
import * as React from 'react';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
}
```

- <!---Why---> [1]'s Code was used because I wanted to use the link without any vulnerability.
- <!---How---> The code in [1] was implemented by setting the attributes of the Anchor tag with specific values.
- <!---How---> [1]'s Code was modified with specific specific styling properties and setting a custom href fetched from the API response. 


- <!---Why---> [2]'s Code was used because I wanted to a way to arrange the social media links in a row horizontally.
- <!---How---> The code in [2] was implemented by using Stack from Material UI.
- <!---How---> [2]'s Code was modified by having a setting the drection property to row with a spacing of 2 pixels. Additionally, this Stack used is then influenced by a outer Section tag and the inner link and custom Icon component which sets display properties. 

### 2. [frontend\src\pages\Portfolio\Sections\Skills.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Skills.tsx?ref_type=heads)
*Lines 76 - 102*
```
  {portfolio.skills.map((skill: any, index: number) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Paper
        elevation={3}
        style={{
          padding: "1.2rem",
          height: "100%",
          borderRadius: "1rem",
        }}
      >
        <Typography style={{ fontSize: "1.15rem" }}>
          {skill.name}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={skill.rating * 20}
          sx={{
            height: "10px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: getProgressBarColor(skill.rating),
            },
          }}
        />
        <Typography style={{ fontSize: "1.15rem" }}>
          {skill.rating}/5
        </Typography>
      </Paper>
    </Grid>
  ))}
```
The code above was created by adapting the code in [[3]](https://mui.com/material-ui/react-paper/), [[4]](https://mui.com/system/typography/), [[5]](https://mui.com/material-ui/react-grid/) and [[6]](https://mui.com/material-ui/api/linear-progress/).

- <!---Why---> I referred to the code from [2] to create a container with an elevated surface for distinction.
- <!---How---> The implementation of the code in [2] involved using the Paper component from Material UI.
- <!---How---> Modifications were made to [2]'s code to include specific styling attributes, like padding, borderRadius and height. 



- <!---Why---> [3]'s Code was referred to customize the text within the Paper container.
- <!---How---> The code in [3] was implemented by using Typography from Material UI.
- <!---How---> [3]'s Code was modified by having a different display property i.e fontSize from the body of the page.



- <!---Why---> [4]'s Code was reffered to make the skills application component responsive and using MUI Grids is one of approaches.
- <!---How---> The code in [4] was implemented by using MUI Grid component. 
- <!---How---> Modifications were made to [4]'s code by addding parameters targetting different screen sizes such as small, medium, and large. This is used in addition to the custom in-built checker of onMobile() or onTablet() view.



- <!---Why---> [5]'s Code was reffered to display progress bars representing skill ratings within the Skills application component.
- <!---How---> The code in [5] was implemented by using MUI LinearProgress component and dynamically adjusting its value based on the skill rating multiplied by 20. 
- <!---How---> Modifications were made to [5]'s code to customize its appearance by modifying the height of the progress bar, dynamically changing the background color of the progress bar based on the skill rating through utility functions.


### 3. [frontend\src\pages\Portfolio\Sections\Certifications.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Certifications.tsx?ref_type=heads)

*Lines 94 - 100*
```
{new Date(
  certification.issue_date
).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})}
```

*Lines 106 - 112*
```
{new Date(
  certification.expiry_date
).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})}
```

The code above was created by adapting the code in [[6]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) as shown below: 

```
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString('de-DE', options));
```
- <!---Why---> [6]'s Code was used to extract the Month and Year only from the datetime object, specifically to display the certification issue date.
- <!---How---> [6]'s Code was implemented using in-built JavaScript Date() and .toLocaleString() functions. 
- <!---How---> Modifications were made to [6]'s Code by modifying the options within the .toLocaleDateString() function to specify the desired format for displaying the date.

### 4. [frontend\src\pages\Portfolio\index.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/index.tsx?ref_type=heads)
*Lines 90 - 92*
```
  useEffect(() => {
    fetchPortfolio();
  }, []);
```
The code above was created by adapting the code in [[7]](https://www.w3schools.com/react/react_useeffect.asp).

- <!---Why---> The [7]'s Code was referred to call teh backend API to fetch all the portfolio details for that user.
- <!---How---> [7]'s code was implemented by using the useEffect() hook present in React.js 
- <!---How---> Modifications were done in [7]'s code by integrating a GET API call and implementing a try-catch block to effectively manage potential failures and screen loading scenarios.


### 5. [backend\src\models\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/models/portfolio.js?ref_type=heads)

*Lines 4 - 153*

```
const configurationSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    _id: false,
  }
);

const bioSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    about: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    youtube: { type: String },
    gscholar: { type: String },
    other_url: { type: String },
    photo_url: { type: String },
  },
  {
    _id: false,
  }
);

const educationSchema = new Schema(
  {
    degree: { type: String, required: true },
    field_of_study: { type: String, required: true },
    university: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    grade_obtained: { type: String },
    max_grade: { type: String },
    description: { type: String },
  },
  {
    _id: false,
  }
);

const experienceSchema = new Schema(
  {
    company_name: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    company_url: { type: String },
    description: { type: String },
  },
  {
    _id: false,
  }
);

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["completed", "in-progress"],
      required: true,
    },
    project_url: { type: String },
  },
  {
    _id: false,
  }
);

const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    _id: false,
  }
);

const certificationSchema = new Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    issue_date: { type: Date, required: true },
    expiry_date: { type: Date },
    verification_link: { type: String },
  },
  {
    _id: false,
  }
);

const portfolioSchema = new Schema(
  {
    configuration: {
      type: configurationSchema,
      required: true,
    },
    bio: {
      type: bioSchema,
      required: true,
    },
    education: {
      type: [educationSchema],
      required: true,
    },
    experience: {
      type: [experienceSchema],
      required: true,
    },
    projects: {
      type: [projectSchema],
      required: true,
    },
    skills: {
      type: [skillSchema],
      required: true,
    },
    certifications: {
      type: [certificationSchema],
      required: true,
    },
    resume: {
      type: String,
    },
    is_default: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    collection: "portfolios",
  }
);

const Portfolio = model("Portfolio", portfolioSchema);

```
The code above was referred from the code in [[8]](https://mongoosejs.com/docs/guide.html) as shown below: 

```
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
const Blog = mongoose.model('Blog', blogSchema);

```
- <!---Why---> [8]'s Code was used because I wanted to create a schema for my Portfolio collection, and the multiple sub-sections inside it. This is to have a modularised portfolio data mdoel for accessing portfolio collections.
- <!---How---> [8]'s code was implemented by using Mongoose, an Object Data Modeling (ODM) library compatible with MongoDB and Node.js.
- <!---How---> Modifications were made to the code from [8] by designing a nested schema for portfolio section, by specifying enumerations, required flags, default values, and required portfolio sub-sections.

## Additional Notes
* Portfolio design is kept simple, minimalistic and professional for showcasing a portfolio of user's belinging to a Tech and Non-Tech background. Few Inspirations taken from Dalhosuie University's webpage(s).
* Multiple Vlaidation checks to render portfolio data and components as desired according to the template.
* Option to contact via Email and collaborate through teh Dal-Portfolio application both are provided, to include interaction of internal and external users with the Dal Portfolio application users. This is to provide complete connectivity and usecase with no loose ends.

## Acknowledgments

* Thanks to the creators and contributors of Material-UI for providing a comprehensive UI toolkit for React, instrumental in building this web application.
* Gratitude to Dalhousie University for the inspiration behind the theme and design of the application. The logo and styling guideline were inspired by the official Dalhousie University website.
* The Dal Portfolio Logo was inspired by Dalhousie logo but was created from scratch using [Canva](https://www.canva.com/)

## Future Work
* In the future, the functionality can be expanded by integrating multiple templates, each with its own unique aesthetic design.
