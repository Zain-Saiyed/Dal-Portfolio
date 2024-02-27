import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import "./TextGradientHighlight.css";

const Usage = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        padding: "16px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: "24px",
                fontSize: "38px",
                lineHeight: 1.1,
                fontWeight: 600,
                marginBottom: "16px",
                position: "relative",
                textAlign: "center",
              }}
            >
              How DalPortfolio{" "}
              <span className="highlightsubtext">BENEFITS </span> You?
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: "16px" }}>
                  <Typography
                    sx={{
                      maxWidth: "auto",
                      fontSize: "18px",
                      textAlign: "center",
                      padding: "24px",
                    }}
                  >
                    <span className="highlightsubtext">
                      <strong>Students‎‎</strong>{" "}
                    </span>{" "}
                    can increase their visibility and recognition through
                    DalPortfolio, which facilitates networking and collaboration
                    across disciplines, streamlining the job search process.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography
                sx={{
                  maxWidth: "auto",
                  fontSize: "18px",
                  textAlign: "center",
                  padding: "24px",
                }}
              >
                <span className="highlightsubtext">
                  <strong>Professors & Researchers ‎‎</strong>
                </span>
                can benefit from DalPortfolio's enhanced visibility and
                cross-disciplinary collaboration through research networking
                opportunities.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography
                sx={{
                  maxWidth: "auto",
                  fontSize: "18px",
                  textAlign: "center",
                  padding: "24px",
                }}
              >
                <span className="highlightsubtext">
                  <strong>Recruiters</strong>{" "}
                </span>
                can benefit from DalPortfolio's streamlined candidate evaluation
                process and access to a diverse talent pool, enhancing
                recruitment efficiency.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Usage;
