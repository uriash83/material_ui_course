import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  //nie działa
  FormControl: {
    backgroundColor: "red"
  }
});

class Create extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    console.log('change'+this.state.exercise)
    this.setState({
      exercise: { ...this.state.exercise, [name]: value }
    });
  };

  handleOnSubmit = () => {
    const { exercise } = this.state;
    console.log('fdsaf'+this.state.exercise)
    this.props.onCreate(exercise);
  };
  render() {
    const {
        open,
        exercise: { title, description, muscles }
      } = this.state,
      { muscles: categories } = this.props;
    const classes = this.props;
    return (
      <Fragment>
        <Button color='secondary' size="small" aria-label="add" onClick={this.handleToggle}>
          <AddIcon />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="alert-dialog-title">Create new Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form bleow
            </DialogContentText>
            <form>
              <TextField
                label="Title"
                value={title}
                variant="filled"
                className={classes.FormControl}
                onChange={this.handleChange("title")}
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={muscles}
                  onChange={this.handleChange("muscles")}
                >
                  {categories.map(category => (
                    <MenuItem value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                label="Description"
                value={description}
                multiline
                rowsMax="4"
                variant="filled"
                onChange={this.handleChange("description")}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              autoFocus
              variant="contained"
              onClick={this.handleOnSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Create);
