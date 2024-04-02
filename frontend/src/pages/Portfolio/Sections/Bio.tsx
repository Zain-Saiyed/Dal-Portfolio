import { Box, Link, Stack, Typography } from "@mui/material";
import { Icon } from "components";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

type Props = {
  id: string;
  portfolio: any;
};

const Bio = ({ id, portfolio }: Props) => {

  return (
    <section id={id} style={{ minHeight: "100vh", padding: "3rem", display: "flex" }} >
      <Box sx={{ my: "auto" }}>
        <Box sx={{ marginBottom: 5 }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "5rem",
              lineHeight: "5.5rem",
              fontWeight: 700,
            }}
          >
            {portfolio.bio.first_name.toUpperCase() + " " + portfolio.bio.last_name.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {portfolio.bio.address+", "+portfolio.bio.city+", "+portfolio.bio.country}
            <Link href={`mailto:${portfolio.bio.email}`} style={{ marginLeft: "1rem" }} >
              <AlternateEmailIcon style={{ verticalAlign: "middle", marginRight: "0.25rem", color:'#fcd405'}} /> 
              {portfolio.bio.email}
            </Link> 
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography>
           {portfolio.bio.about}
          </Typography>
        </Box>
        <Stack direction={"row"} spacing={2}>
          <a href={portfolio.bio.twitter} target="_blank" rel="noopener noreferrer">
            <Icon name="twitter" sx={{ fontSize: "30px" }} />
          </a>
          <a href={portfolio.bio.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" sx={{ fontSize: "30px" }} />
          </a>
          <a href={portfolio.bio.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" sx={{ fontSize: "30px" }} />
          </a>
          <a href={portfolio.bio.gscholar} target="_blank" rel="noopener noreferrer">
            <Icon name="education" sx={{ fontSize: "30px" }} />
          </a>
          <a href={portfolio.bio.facebook} target="_blank" rel="noopener noreferrer">
            <Icon name="facebook" sx={{ fontSize: "30px" }} />
          </a>
          <a href={portfolio.bio.instagram} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" sx={{ fontSize: "30px" }} />
          </a>
          <a href={portfolio.bio.youtube} target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" sx={{ fontSize: "30px" }} />
          </a>
        </Stack>
      </Box>
    </section>
  );
};

export default Bio;
