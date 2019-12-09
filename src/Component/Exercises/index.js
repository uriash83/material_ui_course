import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    ovelflowY: "auto"
  }
};
//xs={12} wielkość pane
export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome",
    description = "Please select part on the left pane"
  }
}) => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>

              <List component="ul">
                {exercises.map(({ id, title }) => (
                  <ListItem button>
                    <ListItemText
                      primary={title}
                      onClick={() => onSelect(id)}
                    />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Paper}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption" style={{ marginTop: 10 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
