import React from "react";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};
//xs={12} wielkość pane
export default props => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.Paper}>Left Pane</Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Paper}>Center Pane</Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Paper}>Right Pane</Paper>
    </Grid>
  </Grid>
);
