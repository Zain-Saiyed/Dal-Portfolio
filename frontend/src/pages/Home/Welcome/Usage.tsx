import React from 'react';
import { Typography, Grid, Paper} from '@mui/material';

const Usage = () => {
  return (
    <div style={{ flexGrow: 1, padding: '16px', maxWidth: '1100px', margin: '0 auto' }}>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom align="center">
              How DalPortfolios Benefits You?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '16px' }}>
                  <Typography variant="body1">
                    <strong>As a Student</strong> your visibility and recognition are enhanced through DalPortfolio, which facilitates networking and collaboration across disciplines, streamlining the job search process.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
              <Typography variant="body1">
                <strong>As a Professor and a Researcher</strong> you can benefit from DalPortfolio's enhanced visibility and cross-disciplinary collaboration through research networking opportunities.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="body1">
                <strong>As a Recruiter</strong> you can benefit from DalPortfolio's streamlined candidate evaluation process and access to a diverse talent pool, enhancing recruitment efficiency.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  
};

export default Usage;
