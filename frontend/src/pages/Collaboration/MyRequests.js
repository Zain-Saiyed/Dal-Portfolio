import { React, useRef, useState } from "react";
import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Request() {
  const projects = [
    {
      title: "Planning and The Psychology of Web Development",
      type: ["Project"],
      id: 123,
    },
    {
      title: "Avoiding mistakes in Web development",
      type: ["Project"],
      id: 456,
    },
    {
      title: "Usability and the Web Experience - Usability Principles",
      type: ["Research"],
      id: 789,
    },
  ];

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
              <div className="row-md-4 mb-4" key={project.id}>
                <div className="card d-flex">
                  <div className="card-body d-flex align-items-center">
                    <div className="card-index p-3">{index + 1}</div>

                    <div className="flex-grow-1">
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "24px",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <div className="card-tags">
                        {project.type.map((work_type) => (
                          <button
                            disabled
                            className="btn btn-outline-primary btn-sm mr-2"
                            key={work_type}
                          >
                            {work_type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="card-buttons px-3">
                      <button className="btn btn-success mx-1">Accept</button>
                      <button className="btn btn-danger mx-1">Reject</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
