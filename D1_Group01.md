# Dal Portfolio
Dal Portfolio is a comprehensive University Portfolio Management System designed to streamline the presentation of academic and professional achievements. It provides an intuitive interface for students, faculty, and researchers to curate and showcase their portfolios seamlessly. From project details and academic accomplishments to skills and certifications, Dal Portfolio serves as a centralized hub for users to showcase their professional journey at a single platform.
 
- _Date Created_: 28 FEB 2024
- _Last Modification Date_: 28 FEB 2024
- _Git URL_: https://git.cs.dal.ca/patrawala/csci-5709-grp-01
- _Deployment URL_: https://csci-5709-group-1-dal-portfolio.netlify.app/
 
#### Individual branch URLs
 
  - [Hatim Patrawala](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/hatim)
  - [Mohammed Kothaliya](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/mohammed)
  - [Sushank Saini](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/sushank)
  - [Boon Undrajavarapu](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/boon)
  - [Jinay Shah](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/jinay)
  - [Zainuddin Saiyed](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/zainuddin)
 
## Authors
 
- [Hatim Patrawala](ht760280@dal.ca) - _(Owner)_
- [Mohammed Kothaliya](mh478572@dal.ca) - _(Owner)_
- [Sushank Saini](sushank.saini@dal.ca) - _(Owner)_
- [Boon Undrajavarapu](bn540239@dal.ca) - _(Owner)_
- [Jinay Shah](jn851778@dal.ca) - _(Owner)_
- [Zainuddin Saiyed](zainuddin.s@dal.ca) - _(Owner)_
 
## Deployment
### Frontend
The app has been set up on [Netlify](https://www.netlify.com/) through a process that involves replicating the GitLab repository onto GitHub, which is then linked to Netlify. This method facilitates a seamless and ongoing integration and deployment process, guaranteeing that any recent updates are directly and automatically published to the active site.
### Backend

The Node.js backend has been configured on [Render](https://render.com/) by mirroring the GitLab repository to GitHub, which is subsequently connected to Render. This approach ensures continuous and automated integration and deployment, allowing any recent changes to be instantly and automatically rolled out to the live site.

 
## Features
 
The Dal Portfolio web application is designed to showcase the talents and achievements of Dalhousie University's community. Our platform is intuitively structured, offering a seamless user experience across several key pages, each tailored to highlight different facets of our community and platform capabilities. Here's an overview of our main features:
 
### Landing Page
 
Our landing page is crafted to immediately capture the visitor's attention and guide them through the essence of what Dalhousie University stands for.
 
- **Hero Section**: A compelling call-to-action that appeals to our audience, encouraging them to explore further and generate leads.
- **Benefits and Usage**: This section outlines the core benefits of joining our platform and how users can leverage it to showcase their achievements and network.
- **Features**: A detailed rundown of what our platform offers, highlighting unique tools and functionalities.
- **Testimonials**: Real-life testimonials from our community members, showcasing their experiences and the impact of our platform on their professional journeys.
 
### FAQs Page
 
Designed to address common inquiries, our FAQs page provides immediate answers to our community's questions, facilitating a smoother user experience and reducing the need for direct inquiries.
 
### Contact Us Page
 
An easily navigable page for users to reach out with their questions, suggestions, or feedback. We ensure that every voice is heard and valued.
 
### About Us Page
 
Get to know more about the mission, vision, and people behind the Dal Portfolio project.
 
- **Goals/Vision**: A deep dive into our long-term objectives and what we aspire to achieve with the Dal Portfolio platform.
- **Our Team**: Meet the talented individuals who have poured their passion and skills into creating and maintaining this platform.
 
### Common Sections for Navigation
 
Every page features a consistently designed header and footer for effortless navigation across the platform. The header includes links to all main sections and a logo, while the footer provides additional resources and contact information.
 
### Dark and Light Mode Toggle
 
Understanding the diverse preferences of our users, we've implemented a toggle feature allowing users to switch between light and dark modes. This feature enhances accessibility and user comfort, catering to different viewing conditions and personal preferences.
 
 
## Built With
 
* [React](https://react.dev/) - The web framework used for building the frontend  user interfaces. Used for creating dynamic and responsive user interfaces for Dal Portfolio project.
 
* [Material UI](https://mui.com/material-ui/) - Comprehensive UI Framework with open source React components, adhering to the material design specification. Used for creating a consistent and seamless/elegant user interface design in Dal Portfolio project.
 
* [Yarn](https://yarnpkg.com/) - Used as package manager that acts as the project manager.
* [TypeScript](https://www.typescriptlang.org/) - A strongly typed JavaScript language which adds syntax for types. Used to enhance code maintainability and catch potential errors early in Dal Portfolio project.

* [NodeJS](https://nodejs.org/en) - The open-source, cross-platform JavaScript runtime environment.
* [ExpressJS](https://expressjs.com/) - The fast, unopinionated, minimalist web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - The developer data platform.
* [React](https://react.dev/) - The web framework used for building the user interface.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) - JavaScript runtime for executing JavaScript validations and checks.
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
* [Nodemailer](https://www.nodemailer.com/) - Module for email sending.
 
## Getting Started
 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
 
### Prerequisites
 
Before running this project locally, ensure you have the following software installed:
 
- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Yarn: [https://yarnpkg.com/](https://yarnpkg.com/)
 
### Installing
 
Follow these steps to get a development environment running:
 
1. Clone the repository:
   ```
   git clone https://git.cs.dal.ca/patrawala/csci-5709-grp-01
   ```
2. Navigate to the project directory:
   ```
   cd frontend
   ```
3. Install dependencies with Yarn:
   ```
   yarn install
   ```
4. Start the development server:
   ```
   yarn start
   ```
5. Visit `http://localhost:3000` to view the application.
 

## Backend API and Frontend Functionality

This section explains how the backend API endpoints are mapped to the corresponding frontend functionality, ensuring a seamless flow between client and server operations.

### 1. User Registration
- **Backend Endpoint:** `POST /api/user/register`
- **Frontend Functionality:** `SignUpForm.tsx`
  - This functionality allows users to create a new account. The frontend form collects the user's information and sends it to the backend endpoint. Upon successful registration, users receive an email for verification.

### 2. Email Verification
- **Backend Endpoint:** `GET /api/user/verify-email/:username/:verificationCode`
- **Frontend Functionality:** `EmailVerificationPage.tsx`
  - After signing up, users must verify their email address. The frontend interacts with this endpoint to validate the user's email using the verification code sent to their email address.

### 3. User Login
- **Backend Endpoint:** `POST /api/user/login`
- **Frontend Functionality:** `LoginForm.tsx`
  - Users log in to the system using their credentials. The frontend sends these to the backend for authentication. Successful login grants access and JWT tokens for session management.

### 4. Refresh Token
- **Backend Endpoint:** `POST /api/user/refresh-token`
- **Frontend Functionality:** Integrated in Axios interceptors (`axios.ts`)
  - This endpoint is used to refresh the access token when it expires. The frontend interceptor automatically handles this process, ensuring the user session remains active without manual re-login.

### 5. Session Details
- **Backend Endpoint:** `GET /api/user/session`
- **Frontend Functionality:** Utilized for session validation (`fetchSessionAPI` in `session.ts`)
  - Fetches the current session details to verify user authentication status and to maintain session state across the application.

### 6. Forgot Password
- **Backend Endpoint:** `POST /api/user/forgot-password`
- **Frontend Functionality:** `ForgotPassword.tsx`
  - Allows users to request a password reset link if they forget their password. The backend sends a secure link to the user's email, facilitating password reset.

### 7. Reset Password
- **Backend Endpoint:** `POST /api/user/reset-password`
- **Frontend Functionality:** `ResetPassword.tsx`
  - Users can reset their password using the link received in their email. This page lets users enter a new password, which is then updated in the backend system.

### 8. Logout
- **Backend Endpoint:** `POST /api/user/logout`
- **Frontend Functionality:** `useLogout` hook (`useLogout.ts`)
  - This process securely logs out the user by clearing the session and tokens in both frontend storage and the backend system.

### 9. Add Post
* **/addpost**: This api fulfills the functionality of adding a new post in the StartThreadForm.js frontend component.

### 10. Add Reply
* **/addreply**: This api fulfills the functionality of submitting a reply in DiscussionPost.js frontend component.

### 11. Delete Post
* **/deletepost**: This api fulfills the functionality of deleting a post in MainPost.js frontend component.

### 12. Delete Reply
* **/deletereply**: This api fulfills the functionality of deleting a reply in  ReplyDisplay.js frontend component.

### 13. Get All Posts
* **/getallposts**: This api fulfills the functionality of displaying posts in  DiscussionForumPage.js frontend component. The values fetched here are transferred as a state to DiscussionThreadPage.js when a particular post is opened to view all replies posted on it.

### 14. Search page
* **/search-page**: This API fulfills the functionality of search page based on different filter option in search.tsx. 


## List of files authored by Mohammed
### Frontend
* frontend/src/pages/Auth/SignUpForm.tsx
* frontend/src/pages/Auth/LoginForm.tsx  
* frontend/src/pages/Auth/EmailVerificationPage.tsx 
* frontend/src/pages/Auth/ForgotPassword.tsx
* frontend/src/pages/Auth/ResetPassword.tsx
* frontend/src/pages/Auth/Logout.tsx    
* frontend/src/utils/axios.ts 
* frontend/src/utils/token-service.js
* frontend/src/utils/session.ts
* frontend/src/hooks/useLogout.ts


### Backend
* backend/src/utils/sendEmail.js
* backend/src/utils/sendResetEmail.js
* backend/src/models/resetpassword.js
* backend/src/models/verification.js
* backend/src/api/controllers/user/getSessionDetails.js
* backend/src/api/controllers/user/verifyEmail.js
* backend/src/api/controllers/user/auth/register.js
* backend/src/api/controllers/user/auth/login.js 
* backend/src/api/controllers/user/auth/refreshTokenController.js 
* backend/src/api/controllers/user/auth/forgotPassword.js
* backend/src/api/controllers/user/auth/resetPassword.js
* backend/src/api/controllers/user/auth/logout.js
* backend/src/api/middlewares/auth.js
* backend/src/api/routes/user.js

## List of files authored by Sushank Saini
### Frontend
* frontend\src\components\DiscussionForum\banner.js
* frontend\src\components\DiscussionForum\DeleteConfirmation.js
* frontend\src\components\DiscussionForum\DiscussionPost.js
* frontend\src\components\DiscussionForum\DiscussionPrompt.js
* frontend\src\components\DiscussionForum\MainPost.js
* frontend\src\components\DiscussionForum\ReplyDisplay.js
* frontend\src\components\DiscussionForum\StartThreadForm.js
* frontend\src\pages\DiscussionForum\DiscussionForumPage.js
* frontend\src\pages\DiscussionForum\DiscussionThreadPage.js
* frontend\src\components\DiscussionForum\authorizationFailureDialog.js
* frontend\src\components\DiscussionForum\loginFailureDialog.js

### Backend
* backend\src\api\controllers\discussionforum\addpost.js
* backend\src\api\controllers\discussionforum\addreply.js
* backend\src\api\controllers\discussionforum\deletepost.js
* backend\src\api\controllers\discussionforum\deletereply.js
* backend\src\api\controllers\discussionforum\getallposts.js
* backend\src\api\controllers\discussionforum\index.js
* backend\src\api\routes\discussionforum.js
* backend\src\models\discussionforum\mainpost.js
 
## List of files authored by Jinay Shah
### Frontend
* frontend\src\pages\home\search.tsx

### Backend
* backend\src\api\controllers\portfolio_search\index.js
* backend\src\api\controllers\portfolio_search\search\search.js
* backend\src\api\routes\portfolio_search.js

## Sources Used
 
#### `backend/src/api/controllers/user/auth/register.js`
- **Lines 10-40**: This section uses `bcryptjs` for password hashing and integrates `mongoose` models for saving the user and email verification data.
```javascript

  const { error, value } = validateRegister(req.body);
  if (error) {
    logger("00025", req?.user?._id ?? "", error.details[0].message, "Validation Error", req);
    return res.status(400).json(errorHelper("00025", req, getText("en", "00025")));
  }

  const { username, email, password, ...otherDetails } = value;

  try {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      console.log("Username already exists");
      logger("00032", req?.user?._id ?? "", "Username already exists", "Conflict", req);
      return res.status(409).json(errorHelper("00032", req, getText("en", "00032")));
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      logger("00033", req?.user?._id ?? "", "Email already exists", "Conflict", req);
      return res.status(409).json(errorHelper("00033", req, getText("en", "00033")));
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating new user...");
    let newUser = new User({
      username,
      email,
      password: hashedPassword,
      ...otherDetails,
      isVerified: false
    });

```
  - **Original Source:** Basic password hashing methods and MongoDB user creation patterns are documented in official `bcryptjs` and `mongoose` tutorials.
  - **Modification:** Customized to meet security standards of our application, integrating `bcryptjs` for encrypting user passwords before storing them in the database, ensuring that even in the case of a data breach, the actual user passwords remain protected.

#### `backend/src/utils/sendEmail.js`
- **Lines 5-25**: Implements functionality to send an email using `nodemailer`.
```javascript
const mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: 'Verify your email address',
  html: `<a href="${verificationLink}">Verify Email</a>`
};
await transporter.sendMail(mailOptions);
```
  - **Original Source:** `nodemailer` library usage in sending emails.
  - **Modification:** Developed a function to automate sending of verification emails post-registration, including a link for the user to verify their account, enhancing security by ensuring that email addresses are verified before account activation.

#### `frontend/src/pages/Auth/SignUpForm.tsx`
- **Lines 262-412**: User registration interface implementation.
```jsx
const SignUpForm = () => {
  // form state management and handlers
  return (
   <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className={classes.container}>
                <Paper component="main" elevation={3} sx={{ p: isMobile ? 2 : 4, mb: 4 }} className={classes.paper}>

                    <Typography component="h3" variant="h5">
                        Join the Dal Community!
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <OutlinedInput id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} label="First Name" />
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <OutlinedInput id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} label="Last Name" />
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <OutlinedInput id="username" name="username" value={formData.username} onChange={handleChange} label="Username" error={!!errors.username} />
                            {errors.username && <FormHelperText error>{errors.username}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput id="email" name="email" value={formData.email} onChange={handleChange} label="Email" error={!!errors.email} />
                            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                        </FormControl>


                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.password}
                            />
                            {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                        </FormControl>

                        <Box className={classes.passwordRequirements}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasEightCharacters ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        8 characters
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasUpperCase ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        An uppercase
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasSpecialChar ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        A special character
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasNumber ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        A number
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>


                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                label="Confirm Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.confirmPassword}
                            />
                            {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword}</FormHelperText>}
                        </FormControl>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Create Account
                        </Button>
                        {loading && <CircularProgress />}

                    </form>

                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Verify Your Email</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please check your inbox for the verification link. If verification is done, proceed to login.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Close</Button>
                            <Button onClick={() => {navigate('/login'); }}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Container>
            <Footer />

        </div>
  );
};
```
  - **Original Source:** Material-UI form components and layout design.
  - **Modification:** Developed a customized form for user registration, integrating validations and state management with React hooks, tailored to capture all necessary user information securely.

#### `frontend/src/utils/axios.ts`
- **Lines 5-58**: Setup of Axios instance with interceptors.
```javascript
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = tokenService.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.url === "/api/user/logout") {
      config.data = { refreshToken: tokenService.getRefreshToken() };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      instance
        .post("/api/user/refresh-token", {
          refreshToken: tokenService.getRefreshToken(),
        })
        ?.then((res) => {
          const { accessToken, refreshToken } = res.data;
          tokenService.setAccessToken(accessToken);
          tokenService.setRefreshToken(refreshToken);
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        })
        ?.catch((err) => {
          console.error("Error refreshing token:", err);
          tokenService.clearTokens();
          history.replace("/login");
          return Promise.reject(err);
        });

      return instance(originalRequest);
    }
    return Promise.reject(error);
});

```
  - **Original Source:** Axios HTTP client library documentation.
  - **Modification:** Integrated a request interceptor to automatically attach JWT access tokens to outgoing requests, supporting a secure and seamless user experience while interacting with protected backend routes.

### Password Management and Security

#### `backend/src/api/controllers/user/auth/forgotPassword.js`
-  Backend logic for handling forgot password functionality.

  - **Original Source:** Email sending logic is typically showcased in `nodemailer` examples.
  - **Modification:** Enhanced to include generation 4 uuid of a secure, one-time link sent to the user's email for password reset, ensuring the process is secure and user-friendly.

#### `frontend/src/pages/Auth/ForgotPassword.tsx`
- Builds the forgot password interface for users.
  - **Original Source:** Form handling and dialog presentations in Material-UI examples.
  - **Modification:** Customized to create a specific user flow for requesting a password reset, including error handling and success feedback, ensuring a smooth user experience.



Across the project, the integration of third-party libraries was carefully adjusted to align with the app's security, usability, and aesthetic requirements. Each employed library, like Material-UI for the frontend and `nodemailer` for email functionalities, was not merely used out-of-the-box but was extensively customized to fulfill the specific needs of the DalPortfolio platform. This includes the user interface design, secure email processing in backend operations, and ensuring robust session management through secure token handling in Axios requests, showcasing a comprehensive and thoughtful integration of these tools to build a secure and cohesive application.


### frontend\src\components\DiscussionForum\banner.js

*Lines 8- 29*

```
const Banner = () => {
  return (
    <Grid justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper style={{ background: '#FFC300', padding: '30px', textAlign: 'center', maxWidth: '100%', margin: 0 }}>
        <Grid justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Public Sans', display: 'inline' }}>
            DalPortfolio  
          </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
          <Typography variant="h5" style={{ color: 'black', fontFamily: 'Public Sans', display: 'inline'  }}>
            Discussions
          </Typography>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

```

The code above was created by adapting the code in [[1]](https://mui.com/material-ui/react-paper/), [[2]](https://mui.com/system/typography/) and [[3]](https://mui.com/material-ui/react-grid/) as shown below, respectively : 

```
[1]
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}
```
```
[2]
import * as React from 'react';
import Box from '@mui/material/Box';

export default function Variant() {
  return (
    <div>
      <Box sx={{ typography: 'subtitle2' }}>subtitle2</Box>
      <Box sx={{ typography: 'body1' }}>body1</Box>
      <Box sx={{ typography: 'body2' }}>body2</Box>
    </div>
  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TextAlignment() {
  return (
    <Typography component="div">
      <Box sx={{ textAlign: 'justify', m: 1 }}>
        Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
        fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
      </Box>
      <Box sx={{ textAlign: 'left', m: 1 }}>Left aligned text.</Box>
      <Box sx={{ textAlign: 'center', m: 1 }}>Center aligned text.</Box>
      <Box sx={{ textAlign: 'right', m: 1 }}>Right aligned text.</Box>
    </Typography>
  );
}
```
```
[3]
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>

```
- <!---Why---> [1]'s Code was used because I wanted a container that would have elevated surface.
- <!---How---> The code in [1] was implemented by using the Paper component of Material UI.
- <!---How---> [1]'s Code was modified  to have specific styling properties such as background color and text alignment. 

- <!---Why---> [2]'s Code was used because I wanted to customize the text within the Paper container.
- <!---How---> The code in [2] was implemented by using Typography from Material UI.
- <!---How---> [2]'s Code was modified by having a different display property i.e inline, font family and font weights. 

- <!---Why---> [3]'s Code was used because I wanted to make my application component responsive and using MUI Grids is one of the many options to do so.
- <!---How---> The code in [3] was implemented by using MUI Grid component. 
- <!---How---> [3]'s Code was modified by adding more parameters for different types of screens like small, medium and large.

### frontend\src\components\DiscussionForum\DiscussionPrompt.js

*Lines 17 - 35*
```
return (
      <>
      {!isStartDiscussionOpen && (
        <Paper style={{ background: '#DDDDDD', padding: '16px', textAlign: 'center', minHeight: '212px', top: 200 }}>
          <Typography variant="h5" style={{ marginTop: '20px', color: 'black', fontWeight: 500 }}>
            Do you have a question or an idea to share?
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: '20px', color: 'white', backgroundColor: 'black' }}
            onClick={handleStartDiscussionClick}
          >
            Start a Discussion
          </Button>
        </Paper>
      )}
      {isStartDiscussionOpen && <StartDiscussion onClose={() => setStartDiscussionOpen(false)} />}
    </>
);
```
Just like for banner.js page, the code above was created by adapting the code in [[1]](https://mui.com/material-ui/react-paper/), [[2]](https://mui.com/system/typography/) and [[3]](https://mui.com/material-ui/react-grid/).

- <!---Why---> [1]'s Code was used because I wanted an container that would have elevated surface.
- <!---How---> The code in [1] was implemented by using the Paper component of Material UI.
- <!---How---> [1]'s Code was modified  to have specific styling properties such as background color and text alignment. 

- <!---Why---> [2]'s Code was used because I wanted to customize the text within the Paper container.
- <!---How---> The code in [2] was implemented by using Typography from Material UI.
- <!---How---> [2]'s Code was modified by having a different display property i.e inline, font family and fontweights. 

- <!---Why---> [3]'s Code was used because I wanted to make my application component responsive and using MUI Grids is one of the many options to do so.
- <!---How---> The code in [3] was implemented by using MUI Grid component. 
- <!---How---> [3]'s Code was modified by adding more parameters for different types of screens like small, medium and large.

### frontend\src\components\DiscussionForum\StartThreadForm.js

*Lines 50 - 58*
```
    date: new Date().toLocaleString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // To use 24-hour format
          }),
```
The code above was created by adapting the code in [[4]](https://stackoverflow.com/questions/22347521/change-time-format-to-24-hours-in-javascript) as shown below: 

```
new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    hourCycle: 'h23',
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
```
- <!---Why---> [4]'s Code was used because I wanted to have Date in the desired format along with the timestamp for when a new post was submitted.
- <!---How---> The code in [4] was implemented by using in-built JavaScript library funcions i.e. Date() and .toLocaleString(). 
- <!---How---> [4]'s Code was modified by assigning different variables or properties to the options of the functions.

*Lines 92 - 117*
```
 <TextField
          label={`Title (${title.length}/${maxTitleCharacters})`}
          fullWidth
          value={title}
          onChange={handleTitleChange}
          multiline
          maxRows={3}
          placeholder='Maximum 200 characters'
          error={errorTitle}
          helperText={errorTitle ? `Title cannot be more than ${maxTitleCharacters} characters` : ''}
          margin="normal"
        />
        <TextField
          label={`Description (${description.length}/${maxDescriptionCharacters})`}
          fullWidth
          required
          multiline
          rows={4}
          maxRows={7}
          placeholder='Maximum 6000 characters'
          value={description}
          onChange={handleDescriptionChange}
          error={errorDescription}
          helperText={errorDescription ? `Description cannot be more than ${maxDescriptionCharacters} characters` : ''}
          margin="normal"
        />
```
The code above was created by adapting the code in [[5]](https://mui.com/material-ui/react-text-field/) as shown below:

```
<TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
<TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
```
- <!---Why---> [5]'s Code was used because I wanted to have two text fields to take input for the discussion thread from the user.
- <!---How---> The code in [5] was implemented by using MUI TextField component. 
- <!---How---> [5]'s Code was modified by adding a customized helperText which shows an error message to the user if the number of characters are more than the maximum limit.

### frontend\src\pages\DiscussionForum\DiscussionForumPage.js
*Lines 11 - 28*
```
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await GET('api/discussionforum/get-all-posts');
        if (response.data && response.data.listOfPosts && Array.isArray(response.data.listOfPosts)) {
          setPosts(response.data.listOfPosts);
        } 
        else {
          console.error('Invalid data format:', response.data);
        }
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);
```
The code above was created by adapting the code in [[6]](https://www.w3schools.com/react/react_useeffect.asp).

- <!---Why---> [6]'s Code was used because I wanted to implement side effect when all the discussion posts are fetched.
- <!---How---> The code in [6] was implemented by using the useEffect() hook of React.js 
- <!---How---> [6]'s Code was modified by adding get api call and having try-catch block to handle errors.

### frontend\src\components\DiscussionForum\DeleteConfirmation.js
*Lines 07 - 39*
```
<Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-confirmation-modal"
      aria-describedby="delete-confirmation-message"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          textAlign: 'center',
        }}
      >
        <Typography id="delete-confirmation-message" variant="h6" gutterBottom>
          Are you sure you want to delete this post?
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button onClick={onConfirm} variant="contained" sx={{ mr: 2,color: 'white', backgroundColor: 'black' }}>
            Yes
          </Button>
          <Button onClick={onClose} variant="outlined" sx={{ mr: 2,color: 'black',borderColor: 'black' }}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
```
The code above was created by adapting the code in [[7]](link) as shown below: 
```
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
```
- <!---Why---> [7]'s Code was used because I wanted to implement a dialog box that would pop up to ask for the confirmation if the user wanted to delete something.
- <!---How---> The code in [7]'s was implemented by using MUI's Modal component that provides a solid foundation for creating dialogs, popovers etc.
- <!---How---> [7]'s Code was modified as modal is not getting triggered by a Buttpn but based on the condition that whether the Delete icon is clicked or not. Secondly, the modal has been customized to add text and buttons. Moreover, various styling properties such as bgcolor, border, boxShadow, p, minWidth, and textAlign are applied to the Box component to control its appearance and layout.

### frontend\src\components\DiscussionForum\StartThreadForm.js, frontend\src\components\DiscussionForum\DiscussionPost.js, frontend\src\components\DiscussionForum\ReplyDisplay.js and frontend\src\components\DiscussionForum\MainPost.js, frontend\src\components\DiscussionForum\authorizationFailureDialog.js,frontend\src\components\DiscussionForum\loginFailureDialog.js

*Lines 129-137* for StartThreadForm.js

```
 <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                   <DialogTitle>Success</DialogTitle>
                     <DialogContent>
                      <Typography>Posted Sucessfully!</Typography>
                     </DialogContent>
                <DialogActions>
                   <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
                </DialogActions>
          </Dialog>

```
*Lines 124-132* for DiscussionPost.js

```
   <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                   <DialogTitle>Success</DialogTitle>
                     <DialogContent>
                      <Typography>Reply Posted Sucessfully!</Typography>
                     </DialogContent>
                <DialogActions>
                   <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
                </DialogActions>
                </Dialog>

```
*Lines 79-87* for ReplyDisplay.js

```
 <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Reply deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleCloseSuccessModal}>Close</Button>
        </DialogActions>
      </Dialog>

```
*Lines 89-96* for MainPost.js

```
<Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Post deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleCloseSuccessModal}>Close</Button>
        </DialogActions>
      </Dialog>

```
*Lines 04-16* for authorizationFailureDialog.js
```
const AuthorizationFailureDialog = ({ open, onClose, handleCloseAuthorizationFailureModal }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Authorization Failure</DialogTitle>
      <DialogContent>
        <Typography>You are not authorized to delete this.</Typography>
      </DialogContent>
      <DialogActions>
        <Button style={{ color: 'black' }} onClick={handleCloseAuthorizationFailureModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
```
*Lines 04-16* for loginFailureDialog.js
```
const LoginFailureDialog = ({ open, onClose, handleCloseLoginFailureModal }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login Failure</DialogTitle>
      <DialogContent>
        <Typography>You are not logged in. Please login and try again.</Typography>
      </DialogContent>
      <DialogActions>
        <Button style={{ color: 'black' }} onClick={handleCloseLoginFailureModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
```
The code above was created by adapting the code in [[8]](https://mui.com/material-ui/react-dialog/).

- <!---Why---> [8] Code was used because I wanted to show success and failure messages to the user as pop up.
- <!---How---> The code in [8] was implemented by using MUI's Dialog component which is a type of modal window that appears in front of app content to provide critical information or ask for a decision.
- <!---How---> [8]'s Code was adapted to include the optional related components such as Dialog actions to have a Button in the dialog.

### backend\src\models\discussionforum\mainpost.js

*Lines 02- 22*

```
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const replySchema= new Schema ({  //schema represents a document in a collection
    userName: String,
    description: String,
    date: String
});

const mainPostSchema=new Schema ({   //schema represents a document in a collection
    userName: String,
    title: String,
    description : String,
    date: String,
    replies:[replySchema]},
    {
        timestamps: true //for createdAt and updatedAt fields
    });

const DiscussionPost= mongoose.model("DiscussionPost", mainPostSchema); //model will be a collection in the db.

```
The code above was created by adapting the code in [[9]](https://mongoosejs.com/docs/guide.html) as shown below: 

```
import mongoose from 'mongoose';
const { Schema } = mongoose;

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
- <!---Why---> [9]'s Code was used because I wanted to create a schema for my DiscussionForum collection so that there is uniformity among others who utilize that collections.
- <!---How---> The code in [9] was implemented by using Mongoose which is a Object Data Modeling (ODM) library for MongoDB and Node.js
- <!---How---> [NAME](link)'s Code was modified by created a nested schema for list of replies and keeping the timestamp to true so that each document will have the fields createdAt and updatedAt.

### backend\src\api\controllers\discussionforum\addpost.js, backend\src\api\controllers\discussionforum\addreply.js, backend\src\api\controllers\discussionforum\deletepost.js,backend\src\api\controllers\discussionforum\deletereply.js,backend\src\api\controllers\discussionforum\getallposts.js

The above files use the static helper functions for CRUD operations provided by the Mongoose model[[10]](https://mongoosejs.com/docs/queries.html) and the Mongoose document save() method [[11]](https://mongoosejs.com/docs/documents.html#updating-using-save). The methods used are highlighted below:

```
Model.find()
Model.save()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndUpdate()
```
### search.js (backend\src\api\controllers\portfolio_search\search\search.js)

*Lines 5-43*

```
export default async (req, res) => {
    try {
        console.log(req.body);
        const searchString = req.body.search;
        console.log(searchString);
        console.log("inside try");
        const regex = new RegExp(searchString, 'i');
        const query = { $or: [
          {'bio.first_name': { $regex: regex } },
          {'bio.last_name': { $regex: regex } },
          {'bio.email': { $regex: regex } },
          {'bio.about': { $regex: regex } },
          {'bio.city' : {$regex:regex}},
          {'bio.country' : {$regex:regex}},
          {'bio.about' : {$regex:regex}},
          {'education.degree': { $regex: regex } },
          {'education.field_of_study': { $regex: regex } },
          {'education.university': { $regex: regex } },
          {'experience.company_name': { $regex: regex } },
          {'experience.role': { $regex: regex } },
          {'projects.title': { $regex: regex } },
          {'projects.description': { $regex: regex } },
          {'skills.name': { $regex: regex } },
          {'certifications.title': { $regex: regex } },
        ] };

        const result = await Portfolio.find(query);
        
        res.status(200).json({
            resultMessage: { en: "Fetched documents successfully", fr: "Documents récupérés avec succès" },
            resultCode: "00703",
            listOfDocuments: result
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json(errorHelper("00704", req, "Error fetching documents"));
    }
};
```

The code above was created by adapting the code from [MongoDB](https://www.mongodb.com/docs/v4.2/reference/operator/query/regex/) &
The code above was created by adapting the code from [StackOverflow]( https://stackoverflow.com/questions/48404592/async-post-function-in-nodejs ) as follows:

```
{ <field>: { $regex: /pattern/, $options: '<options>' } }
{ <field>: { $regex: 'pattern', $options: '<options>' } }
{ <field>: { $regex: /pattern/<options> } }

```
```
app.post('/test', function () {
    let user = 'User';
    let query = 'SELECT [Password] as password FROM [Table] where [User] = ' + SqlString.escape(user);

    let password = (async function () {
        try {
            let pool = await sql.connect(dbConfig);
            let result = await pool.request()
                .query(querys);
            console.dir(result.recordset[0].password) //Value here is OK
            return result.recordset[0].password
        } catch (err) {
            // ... error checks
        }
    })()
    console.log(password); //here I am getting "Promise { pending }"
});
```

- The code was implemented by me for searching document based on search string using **Regex**. I was going through internet to find the solution for this problem and I reffered MongoDB site for fetching document based on regex. So I took reference of [MongoDB](https://www.mongodb.com/docs/v4.2/reference/operator/query/regex/)

- The code was implemented by me for creating the POST API  for  my **SEARCH PAGE**  feature in Assignment 3 in CSCI-5709. I was going through the internet for how to create POST in Node.js framework. Then, I found this site where REST Api is created in Node.js. So I took reference of [StackOverflow]( https://stackoverflow.com/questions/48404592/async-post-function-in-nodejs )

- The given [StackOverflow]( https://stackoverflow.com/questions/48404592/async-post-function-in-nodejs )'s  code was used as a reference to learn how to create REST API's and send/receive data with server.


### search.tsx (frontend\src\pages\Home\search.tsx)

*Lines (174-239)*

```
<Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Department</InputLabel>
                <Select
                  value={filters.department}
                  onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                  label="Department"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Health Sciences">Health Sciences</MenuItem>
                  <MenuItem value="Law">Law</MenuItem>
                  <MenuItem value="Business & Economics">Business & Economics</MenuItem>
                  <MenuItem value="Natural Science">Natural Sciences</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Experience</InputLabel>
                <Select
                  value={filters.experience}
                  onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  label="Experience"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="lessThanSixMonths">Less than 6 months</MenuItem>
                  <MenuItem value="lessThanOneYear">Less than 1 year</MenuItem>
                  <MenuItem value="lessThanTwoYears">Less than 2 years</MenuItem>
                  <MenuItem value="twoToFiveYears">2 to 5 years</MenuItem>
                  <MenuItem value="moreThanFiveYears">More than 5 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Academic Level</InputLabel>
                <Select
                  value={filters.academicLevel}
                  onChange={(e) => setFilters({ ...filters, academicLevel: e.target.value })}
                  label="Academic Level"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="undergraduate">Undergraduate</MenuItem>
                  <MenuItem value="graduate">Graduate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
```

The code above was created by adapting the code from [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react)

```
class ItemList extends React.Component {
  constructor(props) {
    super(props)
this.changeItem = this.changeItem.bind(this)
this.state = {
value: 'all' // this would be the initial value
}
    changeItem(event) {
this.setState({value: event.target.value} // where the value will be changed 
}
  }

  render() {
    return (
      <>
      <select onChange={this.changeItem} value:{event.target.value}>
        <option value='all'>all</option>
        <option value='cats'>fruits</option>
        <option value='dogs'>vegetables</option>
      </select>
        <div className="item-list">
          {this.props.items.map((item) =>
          <SingleItem key={item.id}
          item={item} />
          )}
        </div>
      </>
    );
  }
}
```

- The code was created by me for creating drop down filter for **SEARCH PAGE**  feature in Assignment 3 in CSCI-5709. I was learning how to create such dropdown with different option and I came across this code which implements filter with option. So I took reference of [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react).

- The given [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react)'s  code was used as a reference to learn how to create drop down filter.

- The above code was created by me after understanding the concept from [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react).


*Lines (253-309)*

```
{searchPerformed && filteredResults.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#ffd600', fontWeight: 'bold', marginBottom: '30px' }}>
                Search Results
              </Typography>
              {filteredResults.map((document, index) => (
                <Card key={index} sx={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', '&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }, marginBottom: '20px' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#ffd600', fontWeight: 'bold', textAlign: 'left' }}>
                    <strong>Profile:</strong> {document.configuration?.name || 'No Title'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Name:</strong> {document.bio?.first_name || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Email:</strong> {document.bio?.email || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Education:</strong> {document.education?.[0]?.field_of_study || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Degree:</strong> {document.education?.[0]?.degree || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Past Experience:</strong> {document.experience?.[0]?.role || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Skills:</strong> 
                    {document.skills.map((skill: { name: string }, id: number) => (
                    <span key={id}>{skill.name}{id !== document.skills.length - 1 ? ', ' : ''}</span>
                    ))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handlePortfolioClick(document._id)}>Visit Portfolio</Button>
                  </CardActions>
                  <CardActions>
                    <Button size="small" onClick={() => handleCollaborateClick(document.user_id)}>Collaborate</Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          ) : (
            searchPerformed && <Typography sx={{ textAlign: 'center', color: 'red', marginTop: 2 }}>No results found.</Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="secondary" onClick={handleBackToHomeClick}>
              Back to Home Page
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
  
};

```
The code above was created by adapting the code from [React](https://mui.com/material-ui/react-card/)

```
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
```
- The code was created by me for creating card **SEARCH PAGE**  feature in Assignment 3 in CSCI-5709. I was learning how to create such card  with button and I came across this code which implements card with button. So I took reference of [React](https://mui.com/material-ui/react-card/).

- The given [React](https://mui.com/material-ui/react-card/)'s  code was used as a reference to learn how to create card in react.

- The above code was created by me after understanding the concept from [React](https://mui.com/material-ui/react-card/).



### Material-UI Components Customization
 
All Material-UI components used in this project were extensively customized to fit the design requirements of the Dal Portfolio web application. This involved theme customization for colors, component overrides for paddings and margins, and responsive design adjustments using Material-UI's grid system. For example, the `Testimonials` component was adapted from Material-UI's `Carousel` component documentation:
 
- Original Source: [https://mui.com/components/carousel/](https://mui.com/components/carousel/)
- Customization: Adjusted carousel settings, integrated custom media queries for responsive design, and added personalized styling and layout adjustments to fit our design schema.
 
_NOTE: The Material UI component is used in all the pages that are rendered to display to the client._
 
## Material Icons
Icons such as CollaborationIcon and CustomizationIcon from Material Icons were used in Features section in Landin Page. The color scheme, margins, and responsive behavior have been customized to align with the design language of the DalPortfolio application.
 
### Features.tsx
*Lines 32 - 73*
 
- _File path:_ `frontend\src\pages\Home\Welcome\`
```
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
    {
      icon: <TemplateIcon fontSize="large" />,
      title: 'Tailored Templates',
      description: 'Default templates tailored for various university sfaculties.'
    },
    {
      icon: <ForumIcon fontSize="large" />,
      title: 'Discussion Forums',
      description: 'Collaborative learning and knowledge sharing.'
    },
    {
      icon: <CollaborationIcon fontSize="large" />,
      title: 'Collaboration',
      description: 'Enhance communication with internal and external users.'
    },
    {
      icon: <CustomizationIcon fontSize="large" />,
      title: 'Custom Templates',
      description: 'Flexible content creation with customizable templates.'
    },
  ];
```
The icon attribute in the JSON is the Material UI icon used for representing each feature of the DalPortfolio project.
 
### AboutUs.tsx
*Lines 43*
 
- _File path:_ `frontend\src\pages\Home\`
```
<EmailIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'#fcd405'}} />
```
This is a Email Icon imported from Material UI icons library, to display a envelop besides the conatct email fro aesthetic purposes.
 
### ConatctUs.tsx
*Lines 150-152, 206-208, 263-265, 320-322, 370-372*
 
- _File path:_ `frontend\src\pages\Home\`
```
<EmailIcon
    style={{ verticalAlign: "middle", marginRight: "5px" }}
/>
```
This is a Email Icon imported from Material UI icons library, to display a envelop besides the conatct email fro aesthetic purposes.
 
 
Images used in the "About Us" page were generated using [GPT4](https://openai.com/gpt-4) and are placeholders for illustrative purposes:
 
- `test1.jpg` to `test8.jpg` in [AboutUS.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Home/AboutUs.tsx?ref_type=heads) are fictional representations created to enhance the user interface design.
 
The project structure and initial setup were inspired by the public repository [https://github.com/karpolan/react-typescript-mui-with-auth-starter](https://github.com/karpolan/react-typescript-mui-with-auth-starter), but were heavily modified to meet the specific features and functionalities of the Dal Portfolio project, including custom flows, page layouts, and TypeScript integration.

## Acknowledgments
 
- Thanks to the creators and contributors of Material-UI for providing a comprehensive UI toolkit for React, instrumental in building this web application.
- Gratitude to Dalhousie University for the inspiration behind the theme and design of the application. The logo and styling cues were inspired by the official Dalhousie University website.
- The Dal Portfolio Logo was inspired by Dalhousie logo but was created from scratch usung [Canva](https://www.canva.com/)
- Appreciation for the developer community for sharing valuable insights and knowledge, which have been crucial in implementing various features of this project.