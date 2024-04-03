import { GET, POST } from "utils/axios";
import { isEmpty } from "utils/helpers";
import { useLayoutEffect, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useAppStore } from "store";

function Request() {
  const [state] = useAppStore();
  const [senderUserId, setSenderUserId] = useState("");
  const [receiverUserId, setReceiverUserId] = useState("");

  var receiver_user_id = "";

  const [collabRequests, setProjects] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  // const [checkboxesStates, setCheckboxesStates] = useState([true, true, true]);

  const fetchCollabRequests = async () => {
    console.log(state?.currentUser?._id);
    if (!state?.currentUser?._id) {
      return;
    }
    const logged_in_user_id = state?.currentUser._id;
    GET(`/api/collaboration/fetch_collab_requests?user_id=${logged_in_user_id}`)
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    isEmpty(collabRequests) && fetchCollabRequests();
  }, []);

  useEffect(() => {}, [selectedCheckboxes]);

  // const handleCheckboxChange = (id) => {
  //   const updatedCheckboxes = [...selectedCheckboxes];
  //   const index = updatedCheckboxes.indexOf(id);

  //   if (index > -1) {
  //     updatedCheckboxes.splice(index, 1);
  //   } else {
  //     updatedCheckboxes.push(id);
  //   }

  //   setSelectedCheckboxes(updatedCheckboxes);

  //   setCheckboxesStates((prevArray) => {
  //     const newCheckboxesStates = [...prevArray];
  //     if (id === "project") {
  //       newCheckboxesStates[0] = !newCheckboxesStates[0];
  //     } else if (id === "research") {
  //       newCheckboxesStates[1] = !newCheckboxesStates[1];
  //     } else if (id === "all") {
  //       newCheckboxesStates[2] = !newCheckboxesStates[2];
  //     }
  //     return newCheckboxesStates;
  //   });
  // };

  const handleAccept = (
    project_title,
    sender_user_id,
    receiver_user_id,
    _id
  ) => {
    console.log(
      project_title,
      " : ",
      sender_user_id,
      " : ",
      receiver_user_id,
      " : ",
      _id
    );
    POST("/api/collaboration/send_update", {
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      project_title: project_title,
      status: "ACCEPTED",
      _id: _id,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (
    project_title,
    sender_user_id,
    receiver_user_id,
    _id
  ) => {
    console.log(
      project_title,
      " : ",
      sender_user_id,
      " : ",
      receiver_user_id,
      " : ",
      _id
    );
    POST("/api/collaboration/send_update", {
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      project_title: project_title,
      status: "REJECTED",
      _id: _id,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const [checkedProjects, setCheckedProjects] = useState([]);

  // const handleCheckboxChange = (projectId, senderUserId, receiverUserId) => {
  //   if (checkedProjects.includes(projectId)) {
  //     // If project is already checked, remove it from the list
  //     setCheckedProjects(checkedProjects.filter((id) => id !== projectId));
  //   } else {
  //     // If project is not checked, add it to the list
  //     setCheckedProjects([...checkedProjects, projectId]);
  //   }
  //   console.log(
  //     `Sender User ID: ${senderUserId}, Receiver User ID: ${receiverUserId}`
  //   );
  // };

  return (
    <>
      <div className="container box">
        <div className="row d-flex">
          <div className="container p-5">
            {collabRequests.length > 0 ? (
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
            ) : (
              <div className="text-center">
                <Typography
                  sx={{
                    mb: "24px",
                    fontSize: "24px",
                    lineHeight: 1.1,
                    fontWeight: 600,
                  }}
                >
                  No Collaboration Requests yet...
                </Typography>
              </div>
            )}
          </div>
          <div>
            {collabRequests.map((collab_request) => (
              <>
                {/* <h3>Project ID: {project._id}</h3>
          <p>Receiver User ID: {project.receiver_user_id}</p>
          <p>Sender User ID: {project.sender_user_id}</p> */}

                <div className="container px-5 rcard">
                  <div className="col">
                    {collab_request.projects.map((proj) => (
                      <div
                        className="row-md-4 mb-4"
                        key={collab_request.project_id}
                      >
                        <div className="card d-flex">
                          <div className="card-body d-flex align-items-center">
                            <div className="flex-grow-1">
                              {/* <input
                            type="checkbox"
                            value={collab_request._id}
                            checked={checkedProjects.includes(
                              collab_request._id
                            )}
                            onChange={() =>
                              handleCheckboxChange(
                                collab_request._id,
                                collab_request.sender_user_id,
                                collab_request.receiver_user_id
                              )
                            }
                          /> */}
                              <Typography
                                sx={{
                                  fontSize: "18px",
                                  lineHeight: "24px",
                                }}
                                className="card-title"
                              >
                                {proj.project_id}
                              </Typography>
                            </div>
                            <div
                              className="card-buttons px-3"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              <button
                                className="btn btn-success mx-1"
                                onClick={() =>
                                  handleAccept(
                                    proj.project_id,
                                    collab_request.sender_user_id,
                                    collab_request.receiver_user_id,
                                    collab_request._id
                                  )
                                }
                              >
                                Accept
                              </button>
                              <button
                                className="btn btn-danger mx-1"
                                onClick={() =>
                                  handleReject(
                                    proj.project_id,
                                    collab_request.sender_user_id,
                                    collab_request.receiver_user_id,
                                    collab_request._id
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
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
