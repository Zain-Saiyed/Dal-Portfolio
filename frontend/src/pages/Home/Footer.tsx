import { useNavigate } from "react-router-dom";
import { Grid, Stack, TextField, Typography } from "@mui/material";

import { useOnMobile } from "hooks";
import { useAppStore } from "store";
import { Button, Icon, Link } from "components";
import DalPortfolioDark from "assets/images/dal_portfolio_black_bg.png";
import DalPortfolioLight from "assets/images/dal_portfolio_white_bg.png";

type Props = {};

const Footer = (props: Props) => {
  const onMobile = useOnMobile();
  const navigate = useNavigate();
  const [state] = useAppStore();

  const iconStyles = {
    cursor: "pointer",
    "&:hover": {
      color: "#0467fb",
      transition: "0.3s ease-out",
    },
  };

  return (
    <Stack
      sx={{
        padding: "4rem 0 2rem 0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        component="section"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mb: "24px",
          p: "24px",
        }}
      >
        <Typography sx={{ mb: "24px", fontSize: "24px" }}>
          Join our exclusive membership to receive the latest news and trends
        </Typography>
        <Typography sx={{ mb: "24px", fontSize: "20px" }}>
          You can unsubscribe at any time.
        </Typography>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...(onMobile && { flexDirection: "column", width: "80%" }),
          }}
        >
          <TextField label="Your Email" size="small" />
          <Button label="Subscribe" />
        </form>
      </Stack>
      <Grid
        spacing={2}
        container
        sx={{
          width: "100%",
          display: "flex",
          maxWidth: "1000px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6" sx={{ mb: "16px" }}>
              About Us
            </Typography>
            <Link href="/">How it works</Link>
            <Link href="/">Testimonials</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h6" sx={{ mb: "16px" }}>
              Contact Us
            </Typography>
            <Link href="/">Contact</Link>
            <Link href="/">Support</Link>
          </Stack>
        </Grid>
      </Grid>
      <Stack component="section" sx={{ maxWidth: "1000px", width: "100%" }}>
        <Stack
          sx={{
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            m: "40px auto 0 auto",
          }}
          direction={onMobile ? "column" : "row"}
        >
          <Link
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              width: "200px",
              mb: "16px",
            }}
          >
            <img
              src={!!state?.darkMode ? DalPortfolioDark : DalPortfolioLight}
              alt="Company Logo"
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
                verticalAlign: "middle",
              }}
            />
          </Link>
          <Typography
            variant="subtitle2"
            sx={{ mb: onMobile ? "30px" : "none" }}
          >
            DalPortfolio &copy; {new Date().getFullYear()} All rights reserved
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "240px",
            }}
          >
            <Icon name="facebook" sx={iconStyles} />
            <Icon name="instagram" sx={iconStyles} />
            <Icon name="youtube" sx={iconStyles} />
            <Icon name="twitter" sx={iconStyles} />
            <Icon name="linkedin" sx={iconStyles} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
