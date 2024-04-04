# CSCI 5709 Assignment 3 

* *Date Created*: April 03, 2024
* *Last Modification Date*: April 03, 2024
* *Assignment (Project) URL*: https://csci-5709-group-1-dal-portfolio.netlify.app/
* *GitLab individual URL for Assignment 3*: https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/boon
* *GitLab group URL for Assignment 3*: https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/main?ref_type=heads
* *Assignment (Project Feature) URL*:
    - The collaboration feature within the deployed application is accessible only to signed-up users due to its nature of facilitating interactions and collaborations. As a result, the direct access to the feature URL is not be feasible.
    - However, external users who attempt to access the collaboration feature URL will be seamlessly redirected to their default mail application. This redirection ensures that potential collaborators, even if not registered users, can easily initiate communication with existing users to facilitate collaboration. 
    - #### Steps to navigate to access Collaboration feature
        - Internal Collaboration (For registered users)
            - Sender sends Collaboration Request
                - Entry point #1:
                    - Login
                    - Click on "SEARCH" button on the navigation bar on top
                    - On any of the listings, click on "Collaborate"
                    - This will open "My Projects" page with the logged in user's list of projects.
                    - The user can select any number of projects for which they are looking for cllaboraters
                    - This will send an email to the receiver about this potential collaboration opportunity.

                - Entry point #2
                    - Click on "SEARCH" button on the navigation bar on top
                    - On any of the listings, click on "Visit Portfolio"
                    - The listed user's portfolio page will be opened.
                    - At the bottom of the page, there is a "Collaborate" button.
                    - This will open "My Projects" page with the logged in user's list of projects.
                    - The user can select any number of projects for which they are looking for cllaboraters
                    - This will send an email to the receiver about this potential collaboration opportunity.

            - Receiver can accept/reject the request
                - Login
                - After logging in, the "PROFILE" button will be visible on the navigation bar
                - In this Profile page, there is an option on the left side bar called "Collaboration Requests"
                - This will display all the requests they have obtained.

        - External Collaboration 
            - Entry point #1:
                - Click on "SEARCH" button on the navigation bar on top
                - On any of the listings, click on "Collaborate"
                - This will open the mail app with the listed user's email ID.
            - Entry point #2:
                - Click on "SEARCH" button on the navigation bar on top
                - On any of the listings, click on "Visit Portfolio"
                - The listed user's portfolio page will be opened.
                - At the bottom of the page, there is a "Collaborate" button.
                - This will open the mail app with the listed user's email ID.

## Authors
* [Boon Undrajavarapu](boon@dal.ca) - *Full Stack Developer*

## Built With
* [NodeJS](https://nodejs.org/en) - The open-source, cross-platform JavaScript runtime environment.
* [ExpressJS](https://expressjs.com/) - The fast, unopinionated, minimalist web framework for Node.js
* [ReactJS](https://react.dev/) - The web framework used for Frontend code.
* [MongoDB](https://www.mongodb.com/) - The developer data platform.
## Feature and its related tasks developed by Boon
### Feature: 
* Collaboration
### Related Tasks:
1. External collaboration request
    - Send an email.
2. Internal collaboration request
    - Send a collaboration request.
    - Accept a collaboration request.
    - Reject a collaboration request.

## List of files authored by Boon

### Backend

* backend/src/api/controllers/collaboration/fetch_projects.js
* backend/src/api/controllers/collaboration/fetch_research.js
* backend/src/api/controllers/collaboration/fetchCollabRequestsById.js
* backend/src/api/controllers/collaboration/fetchProjectByid.js
* backend/src/api/controllers/collaboration/fetchResearchByid.js
* backend/src/api/controllers/collaboration/fetchUserById.js
* backend/src/api/controllers/collaboration/index.js
* backend/src/api/controllers/collaboration/send_request.js
* backend/src/api/controllers/collaboration/send_update.js

* backend/src/api/routes/collaboration_route.js

* backend/src/models/collabProject.js
* backend/src/models/collabRequests.js
* backend/src/models/collabResearch.js

### Frontend

* frontend/src/pages/Collaboration/MyProjects.js
* frontend/src/pages/Collaboration/MyCollabRequests.js
* frontend/src/pages/Collaboration/index.js

## Backend function/api and its corresponding frontend functionality that is fulfilled
* **/fetch_projects**: 
    - This endpoint is used to retrieve a list of projects.
    - It would return information about various projects available in the system, such as their titles, descriptions, statuses, contributors, etc.
    - Clients can use this endpoint to display a list of projects to users or to fetch specific project details.

* **/fetch_research**: 
    - Similar to **/fetch_projects**, this endpoint retrieves a list of research studies.
    - It returns details about research studies, including titles, descriptions, statuses, contributors, etc.
    - Clients can use this endpoint to display research studies or fetch specific research study details.

* **/fetch_project/:_id**:
    - This endpoint fetches details about a specific project identified by its ID.
    - Clients can provide the ID of the project they're interested in, and the server responds with detailed information about that project.

* **/fetch_research_study/:_id**: 
    - Like **/fetch_project/:_id**, this endpoint fetches details about a specific research study.
    - Clients provide the ID of the research study they want to fetch, and the server responds with the corresponding details.

* **/send_request**: 
    - This endpoint is used to send collaboration requests between users.
    - It accepts data such as the sender's user ID, receiver's user ID, details of projects or research studies being requested, and any additional metadata.
    - The server processes the request and performs the necessary actions, such as storing the request in a database.
* **/fetch_collab_requests**: 
    - This endpoint retrieves a list of collaboration requests.
    - It would return pending requests.
    - Clients can use this endpoint to display collaboration requests to users or to fetch specific request details.

* **/send_update**: 
    - This endpoint is used to update the status or details of a collaboration request.
    - Clients use this endpoint to accept or reject requests, update request metadata, or perform other related actions.

* **/fetch_user**: 
    - This endpoint retrieves information about a specific user.
    - It returns details such as the user's name, email, profile picture, social media links, etc.
    - Clients might use this endpoint to fetch user profiles for display or to access specific user details for application logic.

## Sources Used

#### backend/src/api/controllers/collaboration/fetch_projects.js, 

*Line 10*

    const projects = await Portfolio.findOne({ user_id }, "projects");

#### backend/src/api/controllers/collaboration/fetch_research.js, 

*Line 9*

    const research_studies = await CollabResearchStudies.find({ user_id });

#### backend/src/api/controllers/collaboration/fetchCollabRequestsById.js,

*Line 16*

    const collab_requests = await CollabRequests.find({     receiver_user_id });

#### backend/src/api/controllers/collaboration/fetchProjectByid.js, 

*Line 9*

    const project = await CollabProjects.find({ _id: ObjectId(id) }); // Fetch document by _id

#### backend/src/api/controllers/collaboration/fetchResearchByid.js, 

*Line 9*

    const project = await CollabResearchStudies.find({ _id: ObjectId(id) }); // Fetch document by _id

#### backend/src/api/controllers/collaboration/fetchUserById.js, 

*Line 17*

    const user = await User.findOne({ _id: user_id });

#### backend/src/api/controllers/collaboration/send_request.js, 

*Lines 44 - 46*

    const receiver_user_obj = await User.findOne({
      _id: ObjectId(receiver_user_id),
    });

#### backend/src/api/controllers/collaboration/send_update.js

*Lines 33-37*

    const projectUpdateResult = await CollabRequests.updateOne(
      filter,
      projectUpdate,
      projectArrayFilters
    );

All the above snippets are about retrieving or writing or updating data in MongoDB using Mongoose. These are adapted from [freecodecamp](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/) post about How to Use MongoDB + Mongoose with Node.js. 

```
    const doc = await CompletedSchema.findOne(info)
    doc.slug = 'something-else'
    await doc.save()
```

```
    const res = await CompletedSchema.updateOne(<condition>, <query>).lean()
```

The reason I have to take reference from [freecodecamp](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/) article is that it demonstrates how to find, find only one, update a document in MongoDB using Mongoose.

I referenced the [freecodecamp](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/) article as a resource to gain clarity on the syntax required for certain operations, such as find and findOne, in Mongoose. This was necessary due to my unfamiliarity with the syntax at the time of implementation.


#### backend/src/api/controllers/collaboration/send_request.js

*Lines 54 - 76*

```
var transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL, // DalPortfolio email ID
      to: receiver_user_obj.email, // potential collaborator email ID
      subject: "Please respond to the Collaboration Request",
      text: "You received a collaboration request based on your profile. Please respond to the request at your conveinence.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
```

The above code snippet is about sending a mail using nodemailer. This is adapted from [w3schools](https://www.w3schools.com/nodejs/nodejs_email.asp).

```
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

```

- My code uses environment variables **process.env.EMAIL** and **process.env.EMAIL_PASSWORD** to store the DalPortfolio's official email and password, respectively.
    - These environment variables are used for securely storing sensitive information without hardcoding them into the source code.

- The email content in my code is dynamic and personalized. It includes placeholders like **receiver_user_obj.email** to dynamically populate the recipient's email address.

- Additionally, the email subject and text message are customized to indicate a collaboration request based on the recipient's profile.

## Artificial Intelligence Tools Used
[ChatGPT 3.5](https://chat.openai.com/)

Prompt Used on _ChatGPT_

```
code snippet to iterate over a js array and display in a react component

```

The code prompt above was used to generate the code shown below:

```
Here's how you can iterate over a JavaScript array and display its elements in a React component:


import React from 'react';

function MyComponent() {
  // Sample array
  const myArray = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h1>Array Elements</h1>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;


In this example, we use the `map` function to iterate over each element of the `myArray` array. We then render a list item (`<li>`) for each element, setting the `key` attribute to the `index` of the element for React's reconciliation process. Finally, we display the array elements inside an unordered list (`<ul>`).
```

#### frontend/src/pages/Collaboration/MyProjects.js

*Lines 152 - 184*

```
div className="project">
                    {projects.map((project) => (
                      <div
                        key={project.title}
                        className="project-item p-3 d-flex align-items-center"
                        style={{ maxWidth: "500px", margin: "auto" }}
                      >
                        <label className="d-flex">
                          <input
                            type="checkbox"
                            value={project.title}
                            onChange={() =>
                              handleProjectCheckboxChange(project.title)
                            }
                          />
                          <div className="project-title mx-4 px-2">
                            <Typography
                              sx={{
                                fontSize: "18px",
                                lineHeight: "24px",
                              }}
                            >
                              {project.title}
                            </Typography>
                          </div>
                        </label>
                        <div
                          className="d-flex px-5 py-3"
                          style={{ whiteSpace: "nowrap" }}
                        ></div>
                      </div>
                    ))}
                  </div>
```
- The code in the `MyProjects.js` file, specifically lines 152 - 184, has been implemented based on the logic provided by ChatGPT-3.5.

- While the initial code snippet was generated by ChatGPT-3.5, I have made modifications to align it with my design decisions and requirements.

- The modified code snippet utilizes the React's component-based architecture to dynamically render a list of project items based on an array of project data. This approach adheres to React's best practices for efficient rendering and component reusability.

- The projects array serves as the data source containing information about each project, including unique identifiers (id), titles, and contributors. Through the use of the map function, each project object within the array is iterated over, and a corresponding _div_ element is generated dynamically for rendering.

- Within each generated _div_, essential project details are displayed, including a checkbox input element for selection, the project title, and a list of contributors presented as individual buttons. The key prop assigned to each dynamically rendered _div_ ensures React's efficient rendering and reconciliation process by uniquely identifying each rendered component.

- Furthermore, the implementation of the onChange event handler for the checkbox input demonstrates the responsiveness of the user interface, allowing users to interact with and update the state of individual project items.

## Acknowledgments

* The successful completion of the Dalportfolio project would not have been possible without the collective effort and support of all contributors and stakeholders. 
* The project has not only provided valuable technical experience but also fostered personal and professional growth.
* As we look ahead, we are excited about the future possibilities and opportunities for further innovation and collaboration in the React development ecosystem in our professional career.


## Future Work
* Plan to incorporate features that facilitate interview scheduling and management.
* Implement functionalities for sending interview invitations and tracking responses.
* Enhance user experience with features such as interview reminders and notifications.
