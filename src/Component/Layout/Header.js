import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Create from "../Dialog/Create";

export default ({ muscles, onExerciseCreate }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h7"
          color="inherit"
          style={{ flex: 1 }} //żeby był po prawej stronie
        >
          Exercise database
        </Typography>
        <Create muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  </div>
);
