import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ReplyDisplay = ({email,date,description}) => {
    return (
        <Grid container justifyContent="center" style={{padding:'5px'}} >
            <Grid item xs={12} md={8} lg={6}> 
                <Card variant="outlined" style={{ background: '#DDDDDD', padding: '16px', width: '100%' }}>
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            Reply from {email} on {date}
                        </Typography>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );

}
export default ReplyDisplay;