import { GET, POST } from "utils/axios";
import { isEmpty } from "utils/helpers";
import { useLayoutEffect, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Request() {
  const [projects, setProjects] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [checkboxesStates, setCheckboxesStates] = useState([
    false,
    false,
    false,
  ]);

  const fetchCollabRequests = async () => {
    GET(
      `/api/collaboration/fetch_collab_requests?user_id=6608aa6ead4a6a2f19709a24`
    )
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    isEmpty(projects) && fetchCollabRequests();
  }, []);

  useEffect(() => {}, [selectedCheckboxes]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = [...selectedCheckboxes];
    const index = updatedCheckboxes.indexOf(id);

    if (index > -1) {
      updatedCheckboxes.splice(index, 1);
    } else {
      updatedCheckboxes.push(id);
    }

    setSelectedCheckboxes(updatedCheckboxes);

    setCheckboxesStates((prevArray) => {
      const newCheckboxesStates = [...prevArray];
      if (id === "project") {
        newCheckboxesStates[0] = !newCheckboxesStates[0];
      } else if (id === "research") {
        newCheckboxesStates[1] = !newCheckboxesStates[1];
      } else if (id === "all") {
        newCheckboxesStates[2] = !newCheckboxesStates[2];
      }
      return newCheckboxesStates;
    });
  };

  const handleAccept = (
    project_title,
    project_id,
    sender_user_id,
    receiver_user_id,
    _id
  ) => {
    console.log(
      project_title + " " + sender_user_id + " " + receiver_user_id + " " + _id
    );
    POST("/api/collaboration/send_update", {
      _id: _id,
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      project: project_title,
      project_id: project_id,
      status: "ACCEPTED",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (
    title,
    project_id,
    sender_user_id,
    receiver_user_id,
    _id
  ) => {
    POST("/api/collaboration/send_update", {
      _id: _id,
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      project: title,
      project_id: project_id,
      status: "REJECTED",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                            onChange={() => handleCheckboxChange("project")}
                            checked={checkboxesStates[0]}
                          />
                        </label>
                        <div className="project-title m-0 px-2 ">Projects</div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label className="checkbox-label align-self-center">
                          <input
                            type="checkbox"
                            value="checkbox2"
                            onChange={() => handleCheckboxChange("research")}
                            checked={checkboxesStates[1]}
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
                            onChange={() => handleCheckboxChange("all")}
                            checked={checkboxesStates[2]}
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
            {projects?.length > 0 &&
              projects.map((project, index) => (
                <div key={index}>
                  {selectedCheckboxes.includes("project") ||
                  selectedCheckboxes.includes("all") ? (
                    <div>
                      {project.projects.map((project_obj, idx) => (
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
                                    key={project._id}
                                  >
                                    {"Project"}
                                  </button>
                                </div>
                              </div>
                              <div
                                className="card-buttons px-3"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                <button
                                  className="btn btn-success mx-1"
                                  onClick={() =>
                                    handleAccept(
                                      project_obj.title,
                                      project_obj._id,
                                      project.sender_user_id,
                                      project.receiver_user_id,
                                      project._id
                                    )
                                  }
                                >
                                  Accept
                                </button>
                                <button
                                  className="btn btn-danger mx-1"
                                  onClick={() =>
                                    handleReject(
                                      project_obj.title,
                                      project_obj._id,
                                      project.sender_user_id,
                                      project.receiver_user_id,
                                      project._id
                                    )
                                  }
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {selectedCheckboxes.includes("research") ||
                  selectedCheckboxes.includes("all") ? (
                    <div>
                      {project.researchs.map((research_obj, idx) => (
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
                                    key={project._id}
                                  >
                                    {"Research Study"}
                                  </button>
                                </div>
                              </div>
                              <div
                                className="card-buttons px-3"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                <button
                                  className="btn btn-success mx-1"
                                  onClick={() =>
                                    handleAccept(
                                      research_obj.title,
                                      research_obj._id,
                                      project.sender_user_id,
                                      project.receiver_user_id,
                                      project._id
                                    )
                                  }
                                >
                                  Accept
                                </button>
                                <button
                                  className="btn btn-danger mx-1"
                                  onClick={() =>
                                    handleReject(
                                      research_obj.title,
                                      research_obj._id,
                                      project.sender_user_id,
                                      project.receiver_user_id,
                                      project._id
                                    )
                                  }
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
