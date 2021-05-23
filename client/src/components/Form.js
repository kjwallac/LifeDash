import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import { executeApiRequest, notifyUser } from "../utils/apiHelper";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddImageDialog from "./AddImageDialog";

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
    bornDate: 1900,
    deathDate: 1901,
    quote: "",
    bio: "",
    profileImage: "",
    images: [],
    socialLinks: [],
    qrCode: "qrcodehere",
    status: "public",
    createdAt: new Date(),
  });

  const [profileId, setProfileId] = useState("");
  const [imageCaptureDialogOpen, setImageCaptureDialogOpen] = useState(false);

  function genOnFieldChange(fieldName) {
    return (event) => {
      const newProfile = { ...profile, [fieldName]: event.target.value };
      setProfile(newProfile);
    };
  }

  function onAddImageClick() {
    // setUrlCapture(true);
    setImageCaptureDialogOpen(true);
  }

  function onImageUrlCapture(url) {
    setImageCaptureDialogOpen(false);
    if (url) {
      profile.images.push(url);
      setProfile({
        ...profile,
      });
    }
  }

  async function submitProfile() {
    if (profileId) {
      await executeApiRequest(
        `/api/profile/update/${profileId}`,
        "PUT",
        profile
      );
      notifyUser("Profile has been updated");
      window.location.href = `/profile/${profileId}`;
    } else {
      const newProfile = await executeApiRequest(
        "/api/profile/create",
        "POST",
        profile
      );
      setProfileId(newProfile._id);
      notifyUser("Profile has been created");
      window.location.href = `/profile/${newProfile._id}`;
    }
    console.log(profile);
  }

  return (
    <>
      <AddImageDialog
        onUrlCapture={onImageUrlCapture}
        dialogOpen={imageCaptureDialogOpen}
      />
      <Container maxWidth="sm">
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="dense"
                fullWidth
                inputProps={{
                  maxLength: 50,
                }}
                id="firstName"
                label="First Name"
                type="text"
                required
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
                type="text"
                required
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
                required
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
                type="number"
                required
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
                value={profile.bio}
                onChange={genOnFieldChange("bio")}
                multiline
              >
                <input />
              </TextField>
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
                id="profileImage"
                label="Profile Image"
                value={profile.profileImage}
                onChange={genOnFieldChange("profileImage")}
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
                id="socialLinks"
                label="Social Media Link"
                value={profile.socialLinks}
                onChange={genOnFieldChange("socialLinks")}
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
              <div>
                {profile.images.map((url) => (
                  <React.Fragment key={url}>
                    <img src={url} alt="additional url" style={{width:"100%"}}/>
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <Button onClick={onAddImageClick}>
                <AddPhotoAlternateRoundedIcon />
              </Button>
            </Grid>
          </Grid>
        </div>

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
