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