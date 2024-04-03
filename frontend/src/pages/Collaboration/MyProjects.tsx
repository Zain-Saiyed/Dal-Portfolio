import React, { useState, useLayoutEffect } from "react";
import { GET, POST } from "utils/axios";
import { Typography } from "@mui/material";
import { isEmpty } from "utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../css/MyProjects.css";
import { Button } from "components";
import { useAppStore } from "store";

function MyProjects() {
  const [state, dispatch] = useAppStore();
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [selectedProjectCheckboxes, setSelectedProjectCheckboxes] = useState<string[]>([]);
  const [selectedResearchCheckboxes, setSelectedResearchCheckboxes] = useState<string[]>([]);

  const fetchProjects = async () => {
    GET(`/api/collaboration/fetch_projects?user_id=65f360189050f7fb6f800988`)
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchResearch = async () => {
    GET("/api/collaboration/fetch_research?user_id=65f360189050f7fb6f800988")
      .then((response) => {
        console.log(response.data);
        setResearch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    isEmpty(projects) && fetchProjects();
    isEmpty(research) && fetchResearch();
  }, []);

  const handleProjectCheckboxChange = (id: string) => {
    setSelectedProjectCheckboxes((prevCheckboxes) => {
      const index = prevCheckboxes.indexOf(id);
      const updatedCheckboxes = [...prevCheckboxes];
      if (index > -1) {
        updatedCheckboxes.splice(index, 1);
      } else {
        updatedCheckboxes.push(id);
      }
      console.log(updatedCheckboxes);
      return updatedCheckboxes;
    });
  };

  const handleResearchCheckboxChange = (id: string) => {
    setSelectedResearchCheckboxes((prevCheckboxes) => {
      const index = prevCheckboxes.indexOf(id);
      const updatedCheckboxes = [...prevCheckboxes];
      if (index > -1) {
        updatedCheckboxes.splice(index, 1);
      } else {
        updatedCheckboxes.push(id);
      }
      console.log(updatedCheckboxes);
      return updatedCheckboxes;
    });
  };

  const isButtonEnabled =
    selectedProjectCheckboxes.length > 0 ||
    selectedResearchCheckboxes.length > 0;

  const handleSendRequest = () => {
    if (!isEmpty(state?.currentUser)) {
      console.log("User is logged in", state?.currentUser);
      POST("/api/collaboration/send_request", {
        receiver_user_id: "6608aa6ead4a6a2f19709a24",
        sender_user_id: "6608aa6ead4a6a2f19709a24",
        projects: selectedProjectCheckboxes,
        researchs: selectedResearchCheckboxes,
        status: "PENDING",
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("User is not logged in");
      GET("/api/collaboration/fetch_user?user_id=660ad8968b4666dbfb9643fd").then((response) => {
        console.log(response.data);
        const email = response.data.email;
        console.log("email: ", email);

        const subject = encodeURIComponent("Opportunity: Interview Inquiry");
        window.location.href = `mailto:${email}?subject=${subject}`;
      }).catch((error) => {
        console.log(error);
      });
    }

    console.log("projects: ", selectedProjectCheckboxes);
    console.log("research: ", selectedResearchCheckboxes);
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
                    {projects.map((project: any) => (
                      <div key={project.id} className="project-item p-3">
                        <label className="d-flex">
                          <input
                            type="checkbox"
                            value={project.id}
                            onChange={() =>
                              handleProjectCheckboxChange(project.id)
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
                        >
                          <div className="align-self-center px-2 mx-2">
                            Contributor's list:{" "}
                          </div>
                          <div
                            className="project-contributors"
                            style={{ flexWrap: "wrap" }}
                          >
                            {project.contributors.map((contributor: any, index: number) => (
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
                    {research.map((project: any) => (
                      <div key={project.id} className="project-item p-3">
                        <label className="d-flex">
                          <input
                            type="checkbox"
                            value={project.id}
                            onChange={() =>
                              handleResearchCheckboxChange(project.id)
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
                        >
                          <div className="align-self-center px-2 mx-2">
                            Contributor's List:{" "}
                          </div>
                          <div
                            className="project-contributors"
                            style={{ flexWrap: "wrap" }}
                          >
                            {project.contributors.map((contributor: any, index: number) => (
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
