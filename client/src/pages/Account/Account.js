import {
  makeStyles,
  CssBaseline,
  Box,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState, Fragment } from "react";
import { API } from "../../utils/API";
import { Loading } from "../../components/Loading";
import { Link, useHistory, useParams } from "react-router-dom";
import { Copyright } from "../../components/Copyright/Copyright";
import { ShowDate } from "../../components/ShowDate/ShowDate";
import "./Account.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "90vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Account() {
  const classes = useStyles();
  const history = useHistory();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { date, time, wish } = ShowDate();
  const { id } = useParams();

  // States
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logout user
  const logout = async () => {
    await API.logout();
    history.push("/");
  };

  // Gets user info
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUser = async () => {
    const { data } = await API.getUser(id);
    setName(data.displayName);
    setImage(data.image);
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                    <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
                      {wish}
                    </h1>
                    <div className="image-container">
                      <div className="name-icon">
                        <img src={image} alt="profile pic" />
                        <p>{name}</p>
                      </div>
                    </div>
                    <p style={{ margin: "0 auto" }}>
                      {date} {time}
                    </p>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                    <Link to={`/profile/view/${id}`} className="acc-options">
                      View Profiles
                    </Link>
                    <Link to="/profile/create" className="acc-options">
                      Create New Profile
                    </Link>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <button
                      onClick={logout}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        padding: "0.5rem",
                        maxWidth: "500px",
                        minWidth: "300px",
                        textAlign: "center",
                        margin: "0 auto",
                        boxShadow: "0 1px 1px lightgray",
                        borderRadius: "5px",
                        borderColor: "lightgray",
                      }}
                    >
                      Logout
                    </button>
                  </Paper>
                </Grid>
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </Fragment>
      )}
    </div>
  );
}
