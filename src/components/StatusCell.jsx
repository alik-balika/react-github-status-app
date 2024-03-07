import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

const statusIcons = {
  operational: <CheckCircleIcon sx={{ color: "#28a745", fontSize: 30 }} />,
  degraded_performance: <ErrorIcon sx={{ color: "#b2a429", fontSize: 30 }} />,
  partial_outage: <ErrorIcon sx={{ color: "#b2a429", fontSize: 30 }} />,
  major_outage: <ErrorIcon sx={{ color: "red", fontSize: 30 }} />,
  maintenance: <BuildCircleIcon sx={{ color: "#3f51b5", fontSize: 30 }} />,
};

const StatusCell = ({ name, status }) => {
  const icon = statusIcons[status] || null;
  const description =
    status === "operational"
      ? "Normal"
      : status
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

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
          {name}
        </Typography>
        {icon}
      </Box>
      <Typography variant="body2" color="gray">
        {description}
      </Typography>
    </Box>
  );
};

StatusCell.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusCell;
