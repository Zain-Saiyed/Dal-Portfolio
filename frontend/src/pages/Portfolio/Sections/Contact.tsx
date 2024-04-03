// Author: Zainuddin Saiyed

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useOnMobile, useOnTablets } from "hooks";
import { Icon } from "components";
import { useNavigate } from "react-router-dom";


type Props = {
  id: string;
  portfolio: any;
};

const Contact = ({ id, portfolio }: Props) => {
  const onMobile = useOnMobile();
  const onTablets = useOnTablets();
  const navigate = useNavigate();

    return (
      <section id={id} style={{ minHeight: "50vh", padding: "3rem" }}>
        <Box sx={{ p: onMobile ? "100px 0" : "160px 0px 0px 0px" }}>
          <Box sx={{ my: "auto" }}>
            <Box
              sx={{
                mb: "2rem",
                flex: 1,
                flexBasis: "50%",
                justifyContent: "center",
                ...(onTablets && {
                  maxWidth: "100%",
                  flexBasis: "100%",
                  display: "flex",
                  justifyContent: "center",
                }),
                ...(onMobile && {
                  maxWidth: "100%",
                  flexBasis: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }),
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: onMobile?"3rem": "4rem",
                  lineHeight: "5.5rem",
                  fontWeight: 700,
                }}
              >
                CONTACT ME
              </Typography>

              <Typography sx={{ mb: "1rem" }}>
                Let's Connect and Collaborate! Say Hello and Start the Conversation.
              </Typography>

              <Box>
                <Button variant="contained" href={`mailto:${portfolio.bio.email}`} startIcon={<Icon name="email" style={{ verticalAlign: "middle", marginRight: "5px", color:'black'}} />}>
                Inbox Me
                </Button>
                {onMobile ? (
                  <>
                    <br />
                    <Button variant="contained" onClick={() => navigate(`/my-projects/${portfolio.user_id}`)} startIcon={<Icon name="groups"/>} style={{marginTop: "1rem", background: "blue", color: "white"}}> 
                      Collaborate
                    </Button>
                  </>
                ) : (
                    <Button variant="contained" onClick={() => navigate(`/my-projects/${portfolio.user_id}`)} startIcon={<Icon name="groups"/>} style={{marginLeft: "1rem", background: "blue", color: "white"}}> 
                      Collaborate
                    </Button>
                )}
              </Box>
              
            </Box>
          </Box>
        </Box>
      </section>
    );
};

export default Contact;
