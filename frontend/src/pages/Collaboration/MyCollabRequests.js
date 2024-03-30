import { GET } from "utils/axios";
import { isEmpty } from "utils/helpers";
import { useLayoutEffect, useState } from "react";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Request() {
  const [works, setWorks] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [researches, setResearches] = useState([]);

  var projects = [
    {
      receiver_user_id: "bon",
      sender_user_id: "voyage",
      project_titles: [
        {
          _id: "660515d15c1765026660cc89",
          title: "Student Result Management System",
          contributors: ["Boon", "Aaron", "Benjamin", "Benhur"],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
      research_titles: [
        {
          _id: "6605172d5c1765026660cc8e",
          title: "Beyond A Gaussian Denoiser: ",
          contributors: ["Mohammed", "Hatim", "Jinay", "Zain"],
          user_id: "65f360189050f7fb6f800988",
        },
        {
          _id: "660516c05c1765026660cc8d",
          title:
            "Analysis of Russian students of the Web Development Market Operating Online on behance.com",
          contributors: [
            "Mohammed",
            "Hatim",
            "Boon",
            "Zainuddin",
            "Sushank",
            "Jinay",
            "Aaron",
          ],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
    },
    {
      receiver_user_id: "bon",
      sender_user_id: "voyage",
      project_titles: [
        {
          _id: "660515d15c1765026660cc89",
          title: "Student Result Management System",
          contributors: ["Boon", "Aaron", "Benjamin", "Benhur"],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
      research_titles: [
        {
          _id: "6605172d5c1765026660cc8e",
          title:
            "Beyond A Gaussian Denoiser: Residual Learning Of Deep CNN For Image Denoising",
          contributors: ["Mohammed", "Hatim", "Jinay", "Zain"],
          user_id: "65f360189050f7fb6f800988",
        },
        {
          _id: "660516c05c1765026660cc8d",
          title:
            "Analysis of Russian students of the Web Development Market Operating Online on behance.com",
          contributors: [
            "Mohammed",
            "Hatim",
            "Boon",
            "Zainuddin",
            "Sushank",
            "Jinay",
            "Aaron",
          ],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
    },
    {
      receiver_user_id: "bon",
      sender_user_id: "voyage",
      project_titles: [
        {
          _id: "660515d15c1765026660cc89",
          title: "Student Result Management System",
          contributors: ["Boon", "Aaron", "Benjamin", "Benhur"],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
      research_titles: [],
    },
    {
      receiver_user_id: "bon",
      sender_user_id: "voyage",
      project_titles: [
        {
          _id: "660515d15c1765026660cc89",
          title: "Student Result Management System",
          contributors: ["Boon", "Aaron", "Benjamin", "Benhur"],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
      research_titles: [],
    },
    {
      receiver_user_id: "bon",
      sender_user_id: "voyage",
      project_titles: [
        {
          _id: "660515d15c1765026660cc89",
          title: "Student Result Management System",
          contributors: ["Boon", "Aaron", "Benjamin", "Benhur"],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
      research_titles: [
        {
          _id: "660516c05c1765026660cc8d",
          title:
            "Analysis of Russian students of the Web Development Market Operating Online on behance.com",
          contributors: [
            "Mohammed",
            "Hatim",
            "Boon",
            "Zainuddin",
            "Sushank",
            "Jinay",
            "Aaron",
          ],
          user_id: "65f360189050f7fb6f800988",
        },
      ],
    },
  ];
  const researches = [];

  const fetchCollabRequests = async () => {
    GET(`/api/collaboration/fetch_collab_requests?user_id=bon`)
      .then((response) => {
        setWorks(response.data);

        const projectsList = [];
        const researchesList = [];

        for (const element of response.data) {
          projectsList.push(element.project_titles);
          researchesList.push(element.research_titles);
        }

        // setProjects(projectsList);
        projects = projectsList;
        console.log(projects.length);
        projects.map((project, index) => {
          console.log(project + " " + index);
        });
        // setResearches(researchesList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    isEmpty(projects) && fetchCollabRequests();
  }, []);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = [...selectedCheckboxes];
    const index = updatedCheckboxes.indexOf(id);

    if (index > -1) {
      updatedCheckboxes.splice(index, 1);
    } else {
      updatedCheckboxes.push(id);
    }

    setSelectedCheckboxes(updatedCheckboxes);
  };

  return (
    <>
      <div className="container box">
        <div className="row d-flex">
          <div className="container p-5">
            {projects?.length > 0 ? (
              <>
                <div className="text-center">
                  <Typography
                    variant="h2"
                    sx={{
                      mb: "24px",
                      fontSize: "38px",
                      lineHeight: 1.1,
                      fontWeight: 600,
                    }}
                  >
                    My Collaboration Requests
                  </Typography>
                </div>
                <form>
                  <div className="project">
                    <div
                      className="d-flex justify-content-around"
                      style={{ flexWrap: "wrap" }}
                    >
                      <div className="d-flex align-items-center">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="checkbox1"
                            onChange={() => handleCheckboxChange("checkbox1")}
                          />
                        </label>
                        <div className="project-title m-0 px-2 ">Projects</div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label className="checkbox-label align-self-center">
                          <input
                            type="checkbox"
                            value="checkbox2"
                            onChange={() => handleCheckboxChange("checkbox2")}
                          />
                        </label>
                        <div className="project-title m-0 px-2">
                          Research Studies
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label className="checkbox-label align-self-center">
                          <input
                            type="checkbox"
                            value="checkbox3"
                            onChange={() => handleCheckboxChange("checkbox3")}
                          />
                        </label>
                        <div className="project-title m-0 px-2">All</div>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="no-project">No projects available</div>
            )}
          </div>
        </div>

        <div className="container px-5 rcard">
          <div className="col">
            {projects.map((project, index) => (
              <div key={index}>
                {/* <div>Receiver User ID: {project.receiver_user_id}</div> */}

                {project.project_titles.map((project_obj, idx) => (
                  <div className="row-md-4 mb-4" key={project.id}>
                    <div className="card d-flex">
                      <div className="card-body d-flex align-items-center">
                        <div className="flex-grow-1">
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "24px",
                            }}
                            className="card-title"
                          >
                            {project_obj.title}
                          </Typography>
                          <div className="card-tags">
                            <button
                              disabled
                              className="btn btn-outline-primary btn-sm mr-2"
                              key={project.id}
                            >
                              {"Project"}
                            </button>
                          </div>
                        </div>
                        <div
                          className="card-buttons px-3"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <button className="btn btn-success mx-1">
                            Accept
                          </button>
                          <button className="btn btn-danger mx-1">
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {project.research_titles.map((research_obj, idx) => (
                  <div className="row-md-4 mb-4" key={project.id}>
                    <div className="card d-flex">
                      <div className="card-body d-flex align-items-center">
                        <div className="flex-grow-1">
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "24px",
                            }}
                            className="card-title"
                          >
                            {research_obj.title}
                          </Typography>
                          <div className="card-tags">
                            <button
                              disabled
                              className="btn btn-outline-primary btn-sm mr-2"
                              key={project.id}
                            >
                              {"Research Study"}
                            </button>
                          </div>
                        </div>
                        <div
                          className="card-buttons px-3"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <button className="btn btn-success mx-1">
                            Accept
                          </button>
                          <button className="btn btn-danger mx-1">
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
