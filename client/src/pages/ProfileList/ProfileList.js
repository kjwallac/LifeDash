import { useEffect, useState, Fragment } from "react";
import { API } from "../../utils/API";
import { Loading } from "../../components/Loading";
import {
  CssBaseline,
  List,
  ListItem,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { BackButton } from "../../components/BackButton/BackButton";
import { Remove } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export const ProfileList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const res = await API.getUserProfiles(id);
    setData(res.data);
    setLoading(false);
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <CssBaseline />
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid gray",
              marginBottom: "2rem",
              marginTop: "1rem",
              padding: "0.3rem",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <BackButton />
            <h2
              style={{
                margin: "0 auto",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              Profiles Curated: {data.length}
            </h2>
          </div>
          <List
            style={{
              margin: "1rem",
              padding: "0 0.5rem",
            }}
          >
            {data.map(
              ({
                _id,
                firstName,
                lastName,
                bornDate,
                deathDate,
                profileImage,
                quote,
                status,
              }) => (
                <Link
                  to={`/profile/${_id}`}
                  key={_id}
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <ListItem
                    divider
                    dense
                    disableGutters
                    style={{ marginBottom: "1rem" }}
                  >
                    <Avatar src={profileImage} className={classes.large} />
                    <div style={{ margin: "0 auto", textAlign: "center" }}>
                      <h2 style={{ margin: "0" }}>
                        {firstName} {lastName}
                      </h2>
                      <h3 style={{ margin: "0" }}>
                        {bornDate}{" "}
                        <Remove
                          style={{
                            display: "inline-flex",
                            verticalAlign: "middle",
                          }}
                        />{" "}
                        {deathDate}
                      </h3>
                      <p style={{ margin: "0" }}>{quote}</p>
                    </div>
                  </ListItem>
                </Link>
              )
            )}
          </List>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProfileList;
