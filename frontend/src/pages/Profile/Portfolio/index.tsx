import { Box, Container, Stack, Typography } from "@mui/material";
import { Button, Icon, IconButton } from "components";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Portfolio = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Container sx={{ width: "100%" }}>
      <Box display={"flex"} width={"100%"} justifyContent="right">
        <Button onClick={() => navigate("/profile/portfolio/create")}>
          Create Portfolio
        </Button>
      </Box>
      <Stack spacing={3} marginTop={2}>
        {["Full-stack Web Developer", "Devops Engineer", "AI Developer"].map(
          (text, index) => (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              sx={{
                border: "1px solid #F1F1F1",
                borderRadius: 3,
                padding: 2,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              <Box>
                <Typography variant="h6" component={"h6"}>
                  {text}
                </Typography>
                <Typography variant="body2" color={"grey.500"}>
                  Created at: 27th Jan 2024
                </Typography>
              </Box>
              <Box>
                <Stack direction="row" justifyContent="flex-end">
                  <IconButton icon="edit" />
                  <IconButton icon="delete" />
                </Stack>
              </Box>
            </Stack>
          )
        )}
      </Stack>
    </Container>
  );
};

export default Portfolio;
