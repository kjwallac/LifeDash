import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Form() {
  const classes = useStyles();

  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  return (
    <>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" fullWidth>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              inputProps={{
                maxLength: 50,
              }}
              id="firstName"
              label="First Name"
              input
              type="text"
              required="true"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              inputProps={{
                maxLength: 50,
              }}
              id="lastName"
              label="Last Name"
              input
              type="text"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              inputProps={{
                maxLength: 4,
              }}
              id="bornDate"
              label="Year of Birth"
              type="number"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="bornDate" label="Year of Passing" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Year of Birth" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Quote" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Biography"
              fullWidth
              multiline
            >
              <input />
            </TextField>
          </Grid>
        </Grid>
      </div>
      {/* begin code to duplicate each time new photo is click */}
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`} className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid>
                <TextField
                  id="input-with-icon-grid"
                  label="Photo links"
                  onChange={(e) => handleChange(idx, e)}
                ></TextField>
              </Grid>
              <Grid item>
                <AddPhotoAlternateRoundedIcon
                  type="button"
                  onClick={() => handleAdd()}
                />
              </Grid>
            </Grid>
          </div>
        );
      })}
      {/* end code to duplicate each time new photo is click */}
    </>
  );
}
