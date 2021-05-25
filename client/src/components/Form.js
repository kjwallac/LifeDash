import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { executeApiRequest, notifyUser } from "../utils/apiHelper";
import Container from "@material-ui/core/Container";
import AddImageDialog from "./AddImageDialog";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PeopleIcon from "@material-ui/icons/People";
import CakeIcon from "@material-ui/icons/Cake";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ComputerIcon from "@material-ui/icons/Computer";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({}));

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
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <PersonOutlineIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{
              maxLength: 30,
            }}
            id="firstName"
            label="First Name"
            type="text"
            required
            value={profile.firstName}
            onChange={genOnFieldChange("firstName")}
          />
        </Grid>
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <PeopleIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <CakeIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LocalFloristIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="deathDate"
            label="Year of Passing"
            type="number"
            required
            value={profile.deathDate}
            onChange={genOnFieldChange("deathDate")}
          />
        </Grid>
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <FormatQuoteIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="quote"
            label="Quote"
            value={profile.quote}
            onChange={genOnFieldChange("quote")}
          />
        </Grid>
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <MenuBookIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="bio"
            label="Biography"
            value={profile.bio}
            onChange={genOnFieldChange("bio")}
            multiline
          >
            <input />
          </TextField>
        </Grid>
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <ComputerIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Social Media Links"
            value={profile.socialLinks}
            onChange={genOnFieldChange("socialLinks")}
          />
        </Grid>
        <br />
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <AccountBoxIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="profileImage"
            label="Profile Image"
            value={profile.profileImage}
            onChange={genOnFieldChange("profileImage")}
          />
        </Grid>
        <br />
        <div className={classes.margin}>
          <Grid>
            <Grid item xs={12}>
              <div>
                {profile.images.map((url) => (
                  <React.Fragment key={url}>
                    <img
                      src={url}
                      alt="additional url"
                      style={{ width: "100%" }}
                    />
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  style={{
                    color: "#3CB685",
                  }}
                  size="medium"
                  className={classes.button}
                  startIcon={<AddPhotoAlternateRoundedIcon />}
                  onClick={onAddImageClick}
                >
                  Add Another Image
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <br />
        <Grid item xs={12}>
          <Button
            variant="outlined"
            style={{
              color: "#3CB685",
              marginBottom: 15,
            }}
            size="medium"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={submitProfile}
          >
            Save
          </Button>
        </Grid>
      </Container>
    </>
  );
}
