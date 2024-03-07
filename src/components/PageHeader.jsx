import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";

const PageHeader = () => {
  const [src, setSRC] = useState(
    "https://user-images.githubusercontent.com/19292210/60553863-044dd200-9cea-11e9-987e-7db84449f215.png"
  );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isSmallScreen) {
      setSRC(
        "https://user-images.githubusercontent.com/19292210/60553865-044dd200-9cea-11e9-859c-d6f266e2f01f.png"
      );
    } else {
      setSRC(
        "https://user-images.githubusercontent.com/19292210/60553863-044dd200-9cea-11e9-987e-7db84449f215.png"
      );
    }
  }, [isSmallScreen]);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white", p: 0.5 }}>
        <Toolbar>
          <GitHubIcon fontSize="large" sx={{ mr: 1, color: "black" }} />
          <Typography variant="h4" color="black">
            Github Status
          </Typography>
        </Toolbar>
      </AppBar>
      <img
        src={src}
        alt="Github header"
        style={{
          height: "auto",
          width: "100%",
        }}
      />
    </div>
  );
};

export default PageHeader;
