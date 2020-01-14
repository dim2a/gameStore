import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: 300,
  },
  myInput: {
    width: 300,
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={props.submitForm}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={props.inputHandler}
        className={classes.myInput}
      />
    </form>
  );
}
