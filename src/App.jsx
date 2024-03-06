import React from "react";
import { CssBaseline } from "@mui/material";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <PageHeader />
      <PageContent />
    </div>
  );
};

export default App;
