import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { API } from "../../utils/API";
import { BackButton } from "../BackButton/BackButton";
import { Loading } from "../Loading";
import { Remove as Dash, HighlightOff as DeleteIcon } from "@material-ui/icons";
import {
  Avatar,
  makeStyles,
  TextField,
  Card,
  InputLabel,
  Button,
  MenuItem,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core";
import "./EditMode.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  gridRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 345,
    height: 450,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  icon: {
    color: "rgba(255, 0, 0, 1)",
  },
}));

// To get the status update
const statusList = [
  {
    value: "public",
    label: "Public",
  },
  {
    value: "private",
    label: "Private",
  },
];

export const EditMode = () => {
  const classes = useStyles();
  const imageRef = useRef();
  const socialRef = useRef();

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [update, setUpdate] = useState({
    firstName: null,
    lastName: null,
    bornDate: null,
    deathDate: null,
    quote: null,
    bio: null,
    profileImage: null,
    images: [null],
    socialLinks: [null],
    status: "public",
  });

  // Fetches data
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // Fetches data and sets update's default values
  const fetchData = async () => {
    const { data: profileData } = await API.getProfile(id);
    setData(profileData);
    setUpdate({
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      bornDate: profileData.bornDate,
      deathDate: profileData.deathDate,
      quote: profileData.quote,
      bio: profileData.bio,
      profileImage: profileData.profileImage,
      images: profileData.images,
      socialLinks: profileData.socialLinks,
      status: profileData.status,
    });
    setLoading(false);
  };

  // When submitting the form
  const submit = () => {
    console.log();
  };

  // For onChange to change update
  const handleChange = (change) => {
    return (e) => setUpdate({ ...update, [change]: e.target.value });
  };

  // Filters images and updates state
  const removeImage = (image) => {
    const array = [...update.images];
    const filteredArray = array.filter((obj) => obj !== image);
    setUpdate({ ...update, images: filteredArray });
  };

  const removeSocial = (sociallink) => {
    const array = [...update.socialLinks];
    const filteredArray = array.filter((obj) => obj !== sociallink);
    setUpdate({ ...update, socialLinks: filteredArray });
  };

  return (
    <>
      <BackButton />
      {loading ? (
        <Loading />
      ) : (
        <div style={{ paddingBottom: "1rem" }}>
          <p className="edit-header">Edit fields below</p>

          {/* YEARS OF LIFE */}
          <Card className="edit-container">
            <InputLabel>Years of Life</InputLabel>
            <div className="year-to-year">
              <TextField
                helperText="Year of birth"
                defaultValue={data.bornDate}
                inputProps={{
                  min: 0,
                  style: {
                    textAlign: "center",
                    letterSpacing: "0.1rem",
                    fontWeight: "bold",
                  },
                }}
                onChange={handleChange("bornDate")}
                style={{ padding: "0.5rem" }}
                className="edit-input-form"
              />
              <Dash />
              <TextField
                defaultValue={data.deathDate}
                helperText="Year of passing"
                inputProps={{
                  min: 0,
                  style: {
                    textAlign: "center",
                    letterSpacing: "0.1rem",
                    fontWeight: "bold",
                  },
                }}
                style={{ padding: "0.5rem" }}
                className="edit-input-form"
                onChange={handleChange("deathDate")}
              />
            </div>
          </Card>

          {/* PROFILE IMAGE */}
          <Card className="edit-container">
            <Avatar
              src={update.profileImage}
              alt="profile"
              className={classes.large}
            />
            <div className="image-change">
              <InputLabel htmlFor="image-link" className="edit-input-label">
                Profile Image Link
              </InputLabel>
              <TextField
                required
                defaultValue={data.profileImage}
                fullWidth
                helperText="Edit image link for profile picture"
                id="image-link"
                onChange={handleChange("profileImage")}
              />
            </div>
          </Card>

          {/* NAME FORM */}
          <Card className="edit-container edit-container-name">
            <div className="edit-input-form">
              <InputLabel>First Name</InputLabel>
              <TextField
                defaultValue={data.firstName}
                inputProps={{ min: 0, style: { fontWeight: "bold" } }}
                helperText="First name"
                fullWidth
                onChange={handleChange("firstName")}
              />
            </div>
            <div className="edit-input-form">
              <InputLabel>Last Name</InputLabel>
              <TextField
                defaultValue={data.lastName}
                inputProps={{ min: 0, style: { fontWeight: "bold" } }}
                helperText="Last name"
                fullWidth
                onChange={handleChange("lastName")}
              />
            </div>
          </Card>

          {/* QUOTE */}
          <Card className="edit-container">
            <div className="edit-input-form">
              <InputLabel>Quote</InputLabel>
              <TextField
                defaultValue={data.quote}
                helperText="Best quote"
                fullWidth
                onChange={handleChange("quote")}
              />
            </div>
          </Card>

          {/* IMAGE LIST */}
          <Card className="edit-container">
            <div className={classes.gridRoot}>
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile
                  key="Subheader"
                  cols={2}
                  style={{ height: "auto" }}
                >
                  <ListSubheader
                    component="div"
                    style={{ backgroundColor: "rgb(226, 226, 226)" }}
                  >
                    Images
                  </ListSubheader>
                </GridListTile>
                {update.images.map((image) => (
                  <GridListTile key={image}>
                    <img src={image} alt="notables" />
                    <GridListTileBar
                      actionIcon={
                        <IconButton
                          aria-label="del"
                          className={classes.icon}
                          onClick={() => removeImage(image)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
              <div className="edit-input-form add-image">
                <TextField
                  placeholder="Insert Image Link here"
                  helperText="Add a link to add your favorite image"
                  fullWidth
                  inputRef={imageRef}
                />
                <Button
                  onClick={() => {
                    setUpdate({
                      ...update,
                      images: update.images.concat(imageRef.current.value),
                    });
                    imageRef.current.value = "";
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </Card>

          {/* BIO */}
          <Card className="edit-container">
            <div className="edit-input-form">
              <InputLabel>Bio</InputLabel>
              <TextField
                defaultValue={data.bio}
                multiline
                rows={6}
                helperText="Edit Bio"
                fullWidth
                onChange={handleChange("bio")}
              />
            </div>
          </Card>

          {/* SOCIAL LINKS */}
          <div className="edit-container">
            <List
              style={{
                border: "1px dotted lightgray",
                width: "100%",
                textAlign: "center",
              }}
            >
              {update.socialLinks.length ? (
                update.socialLinks.map((links) => (
                  <ListItem
                    key={links}
                    style={{
                      wordBreak: "break-word",
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <IconButton
                      aria-label="del"
                      className={classes.icon}
                      onClick={() => removeSocial(links)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {links}
                  </ListItem>
                ))
              ) : (
                <p>No Social Links Listed</p>
              )}
            </List>
            <div className="edit-input-form">
              <InputLabel>Social Links</InputLabel>
              <div className="center">
                <TextField
                  placeholder="Enter a new social link here"
                  helperText="Social Media Links"
                  fullWidth
                  inputRef={socialRef}
                />
                <Button
                  onClick={() => {
                    setUpdate({
                      ...update,
                      socialLinks: update.socialLinks.concat(
                        socialRef.current.value
                      ),
                    });
                    socialRef.current.value = "";
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* STATUS */}
          <Card className="edit-container">
            <div className="edit-input-form">
              <InputLabel>Status</InputLabel>
              <TextField
                select
                value={update.status}
                onChange={handleChange("status")}
                helperText={`Profile status is currently set to  ${data.status}.`}
                fullWidth
              >
                {statusList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Card>

          <Card className="edit-container">
            <Button variant="contained" onClick={submit}>
              Submit Changes
            </Button>
          </Card>
        </div>
      )}
    </>
  );
};

export default EditMode;
