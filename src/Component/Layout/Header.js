import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h7">Exercise database</Typography>
      </Toolbar>
    </AppBar>
  </div>
);
