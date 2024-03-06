import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StatusCell = () => {
  return (
    <Box
      sx={{
        borderRight: "1px solid #e1e4e8",
        borderBottom: "1px solid #e1e4e8",
        px: 2.5,
        py: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" fontWeight="bold">
          Git Operations
        </Typography>
        <CheckCircleIcon sx={{ color: "#28a745" }} />
      </Box>
      <Typography variant="body2" color="gray">
        Normal
      </Typography>
    </Box>
  );
};

export default StatusCell;
