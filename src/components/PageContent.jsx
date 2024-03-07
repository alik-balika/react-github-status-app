import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StatusCell from "./StatusCell";

const PageContent = () => {
  const [components, setComponents] = useState([]);

  const fetchGithubStatus = () => {
    axios
      .get("https://www.githubstatus.com/api/v2/components.json")
      .then((response) => {
        setComponents(
          response.data.components.filter(
            (component) =>
              component.name !==
              "Visit www.githubstatus.com for more information"
          )
        );
      })
      .catch((error) => {
        console.error("Error fetching GitHub status:", error);
      });
  };

  useEffect(() => {
    fetchGithubStatus();
  }, []);

  const getMostRecentStatus = () => {
    fetchGithubStatus();
    toast("Status Up to Date.");
  };

  return (
    <Container
      sx={{
        mb: 4,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">Current status</Typography>
        <Button onClick={getMostRecentStatus}>Get Status</Button>
      </Box>

      <Paper elevation={2}>
        <Grid
          container
          mt={2}
          borderLeft="1px solid #e1e4e8"
          borderTop="1px solid #e1e4e8"
        >
          {components.map((component) => (
            <Grid item xs={12} md={6} key={component.id}>
              <StatusCell name={component.name} status={component.status} />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default PageContent;
