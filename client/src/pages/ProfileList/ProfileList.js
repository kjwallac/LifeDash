import { useEffect, useState, Fragment } from "react";
import { API } from "../../utils/API";
import { Loading } from "../../components/Loading";
import { Remove as Dash } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { Edit } from "../../components/Edit";
import {
  CssBaseline,
  List,
  ListItem,
  Avatar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export const ProfileList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const res = await API.getUserProfiles(id);
    setData(res.data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <CssBaseline />
          <div style={headerContainer}>
            <h2 style={profileCurated}>Profiles Curated: {data.length}</h2>
          </div>
          <List style={ulStyle}>
            {data.map(
              ({
                _id,
                firstName,
                lastName,
                bornDate,
                deathDate,
                profileImage,
                status,
              }) => (
                <ListItem
                  divider
                  dense
                  disableGutters
                  style={listitem}
                  key={_id}
                >
                  <Link to={`/profile/${_id}`} style={link}>
                    <Avatar
                      src={profileImage}
                      className={classes.large}
                      style={avatar}
                    />
                    <div style={nameContainer}>
                      <h3 style={nameStyle}>
                        {firstName} {lastName}
                      </h3>
                      <h4 style={m0}>
                        {bornDate} <Dash style={dashStyle} /> {deathDate}
                      </h4>
                    </div>
                  </Link>
                  <Edit
                    id={_id}
                    name={
                      <span>
                        {firstName}
                        <br />
                        {lastName}
                      </span>
                    }
                  />
                </ListItem>
              )
            )}
          </List>
        </Fragment>
      )}
    </div>
  );
};

const {
  listitem,
  link,
  avatar,
  nameContainer,
  nameStyle,
  m0,
  dashStyle,
  ulStyle,
  headerContainer,
  profileCurated,
} = {
  headerContainer: {
    display: "flex",
    borderBottom: "1px solid gray",
    marginBottom: "2rem",
    marginTop: "1rem",
    padding: "0.3rem",
    alignContent: "center",
    justifyContent: "center",
  },
  profileCurated: {
    margin: "0 auto",
    textAlign: "center",
    padding: "1rem",
  },
  ulStyle: {
    margin: "1rem auto",
    padding: "0 0.5rem",
    maxWidth: "800px",
    textAlign: "center",
  },
  listitem: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    display: "flex",
    flexBasis: "80%",
    padding: "0.5rem",
  },
  avatar: {
    marginRight: "1rem",
  },
  nameContainer: {
    margin: "0 auto",
    textAlign: "center",
  },
  nameStyle: {
    margin: "0",
  },
  m0: {
    margin: 0,
  },
  dashStyle: {
    display: "inline-flex",
    verticalAlign: "middle",
  },
};

export default ProfileList;
