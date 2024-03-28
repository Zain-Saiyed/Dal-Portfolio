import { GET } from "utils/axios";
import { Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { isEmpty } from "utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import "../../css/MyProjects.css";
import { Button } from "components";

function MyProjects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const fetchProjects = async () => {
    // GET("/api/collaboration/fetch_projects/")
    //   .then((response) => {
    //     console.log(response.data);
    //     setProjects(response.data.projects);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const api_projects = [
      {
        _id: "660515d15c1765026660cc89",
        title: "Student Result Management",
        contributors: ["Boon", "Aaron", "Benjamin", "Benhur"],
        user_id: "65f360189050f7fb6f800988",
      },
      {
        _id: "660516745c1765026660cc8c",
        title: "Amazon clone using React",
        contributors: ["Zain", "Sushank", "Hatim"],
        user_id: "65f360189050f7fb6f800988",
      },
    ];

    setProjects(api_projects);
  };

  const fetchResearch = async () => {
    // GET("/api/collaboration/fetch_research/")

    //   .then((response) => {
    //     console.log(response.data);
    //     setResearch(response.data.research);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }
    //   );

    const api_research = [
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
      {
        _id: "6605172d5c1765026660cc8e",
        title:
          "Beyond A Gaussian Denoiser: Residual Learning Of Deep CNN For Image Denoising",
        contributors: ["Mohammed", "Hatim", "Jinay", "Zain"],
        user_id: "65f360189050f7fb6f800988",
      },
    ];

    setResearch(api_research);
  };

  useLayoutEffect(() => {
    isEmpty(projects) && fetchProjects();
    isEmpty(research) && fetchResearch();
  }, []);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = [...selectedCheckboxes];
    const index = updatedCheckboxes.indexOf(id);

    if (index > -1) {
      updatedCheckboxes.splice(index, 1);
    } else {
      updatedCheckboxes.push(id);
    }

    console.log(updatedCheckboxes);
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const isButtonEnabled = selectedCheckboxes.length > 0;

  const handleSendRequest = () => {
    console.log("Request sent for projects: ", selectedCheckboxes);
    alert(
      "Request sent successfully with " +
        selectedCheckboxes.length +
        " projects."
    );
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
                    My Projects
                  </Typography>
                </div>
                <form>
                  <div className="project">
                    {projects.map((project) => (
                      <div key={project.id} className="project-item p-3">
                        <label className="d-flex">
                          <input
                            type="checkbox"
                            value={project.id}
                            onChange={() => handleCheckboxChange(project._id)}
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
                        >
                          <div className="align-self-center px-2 mx-2">
                            Contributor's list:{" "}
                          </div>
                          <div
                            className="project-contributors"
                            style={{ flexWrap: "wrap" }}
                          >
                            {project.contributors.map((contributor, index) => (
                              <button className="round-button" key={index}>
                                {contributor}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </form>
              </>
            ) : (
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
                  No Projects available
                </Typography>
              </div>
            )}
          </div>
        </div>

        <div className="row d-flex">
          <div className="container p-5">
            {research?.length > 0 ? (
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
                    My Research Studies
                  </Typography>
                </div>
                <form>
                  <div className="research">
                    {research.map((project) => (
                      <div key={project.id} className="project-item p-3">
                        <label className="d-flex">
                          <input
                            type="checkbox"
                            value={project.id}
                            onChange={() => handleCheckboxChange(project._id)}
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
                        >
                          <div className="align-self-center px-2 mx-2">
                            Contributor's List:{" "}
                          </div>
                          <div
                            className="project-contributors"
                            style={{ flexWrap: "wrap" }}
                          >
                            {project.contributors.map((contributor, index) => (
                              <button className="round-button" key={index}>
                                {contributor}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </form>
              </>
            ) : (
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
                  No Research studies available
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center m-5">
        <Button
          label="Send Request"
          disabled={!isButtonEnabled}
          onClick={() => handleSendRequest()}
          sx={{ margin: 0 }}
        />
      </div>
    </>
  );
}

export default MyProjects;
