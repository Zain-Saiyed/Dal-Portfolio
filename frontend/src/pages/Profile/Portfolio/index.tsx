import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";

import { DELETE, GET } from "utils/axios";
import { Button, IconButton, Loader } from "components";
import { useToast } from "hooks";

type Props = {};

const Portfolio = (props: Props) => {
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();

  const [portfolios, setPortfolios] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    fetchPortfolioList();
  }, []);

  const fetchPortfolioList = () => {
    setLoading(true);
    GET(`/api/profile/user/65f360189050f7fb6f800988/portfolios`)
      .then((res) => {
        setPortfolios(res.data.portfolios);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (portfolioId: string) => () => {
    DELETE(`/api/profile/portfolio/${portfolioId}/delete`)
      ?.then((res) => {
        showSuccess(res?.data?.resultMessage?.en);
      })
      ?.catch((err) => {
        showError("Failed to delete portfolio");
      })
      ?.finally(() => {
        fetchPortfolioList();
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container sx={{ width: "100%" }}>
      <Box display={"flex"} width={"100%"} justifyContent="right">
        <Button onClick={() => navigate("/profile/portfolio/create")}>
          Create Portfolio
        </Button>
      </Box>
      <Stack spacing={3} marginTop={2}>
        {portfolios?.map((item: any, index: number) => (
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
                {item?.configuration?.name}
              </Typography>
              <Typography variant="body2" color={"grey.500"}>
                {moment(item?.createdAt)?.format("MMM DD, YYYY")}
              </Typography>
            </Box>
            <Box>
              <Stack direction="row" justifyContent="flex-end">
                <IconButton
                  icon="edit"
                  onClick={() =>
                    navigate(`/profile/portfolio/${item?._id}/edit`, {
                      state: { portfolio: item },
                    })
                  }
                />
                <IconButton
                  icon="delete"
                  onClick={handleDelete(item?._id)}
                />
              </Stack>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default Portfolio;
