import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import { executeApiRequest } from "../utils/apiHelper";
import Container from "@material-ui/core/Container";
// import CssBaseline from "@material-ui/core/CssBaseline";

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

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    bornDate: "",
    deathDate: "",
    quote: "",
    bio: "",
  });

  function genOnFieldChange(fieldName) {
    debugger;
    return (event) => {
      const newProfile = { ...profile, [fieldName]: event.target.value };
      setProfile(newProfile);
    };
  }

  async function submitProfile() {
    executeApiRequest("api/profile/create", "POST", profile);
  }

  // start adds additional input fields for photo links
  // function handleChange(i, event) {
  //   const values = [...fields];
  //   values[i].value = event.target.value;
  //   setFields(values);
  // }
  // function handleAdd() {
  //   const values = [...fields];
  //   values.push({ value: null });
  //   setFields(values);
  // }
  // end adds additional input fields for photo links

  return (
    <>
      <Container maxWidth="sm">
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
                value={profile.firstName}
                onChange={genOnFieldChange("firstName")}
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
                required="true"
                value={profile.lastName}
                onChange={genOnFieldChange("lastName")}
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
                required="true"
                value={profile.bornDate}
                onChange={genOnFieldChange("bornDate")}

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
                id="deathDate"
                label="Year of Passing"
                required="true"
                value={profile.deathDate}
                onChange={genOnFieldChange("deathDate")}
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
                id="quote"
                label="Quote"
                required="true"
                value={profile.quote}
                onChange={genOnFieldChange("quote")}
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
                id="bio"
                label="Biography"
                required="true"
                value={profile.bio}
                onChange={genOnFieldChange("bio")}

                multiline
              >
                <input />
              </TextField>
            </Grid>
          </Grid>
        </div>
        {/* begin code to duplicate each time new photo is click */}
        {/* {fields.map((field, idx) => {
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
        })} */}
        {/* end code to duplicate each time new photo is click */}
        <Grid className={classes.buttonRoot} item xs={3}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={submitProfile}
            >
              Save
            </Button>
          </ButtonGroup>
        </Grid>
      </Container>
    </>
  );
}
