import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";

import StatusCell from "./StatusCell";

const PageContent = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
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
          {components.map((component) => (
            <Grid item xs={12} md={6} key={component.id}>
              <StatusCell name={component.name} status={component.status} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default PageContent;
