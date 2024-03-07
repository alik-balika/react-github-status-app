import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import StatusCell from "./StatusCell";

const PageContent = () => {
  return (
    // TODO LOSE THE MX: 32, use a min/max width maybe?
    <Container
      sx={{
        mb: 4,
      }}
    >
      <Typography variant="h4">Current status</Typography>

      <Paper elevation={2}>
        <Grid
          container
          mt={2}
          borderLeft="1px solid #e1e4e8"
          borderTop="1px solid #e1e4e8"
        >
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatusCell />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PageContent;
