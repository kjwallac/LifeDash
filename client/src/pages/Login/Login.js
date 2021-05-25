import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Copyright } from "../../components/Copyright/Copyright";
import { useState } from "react";
import axios from "axios";

const logo = "/images/logo.png";

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    marginTop: spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: spacing(1),
  },
  submit: {
    margin: spacing(3, 0, 2),
  },
}));

/**
 *
 * Login Component
 */
export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const data = {
    email,
    password,
  };

  /**
   * @function onSubmitBtn
   * Submits info to db to compare against and login if in db
   *
   * @param {*} e To target events on button click
   */
  const onSubmitBtn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please check all fields!");
    } else {
      const res = await axios.post(
        "https://lifedash-memroial.herokuapp.com/api/user/login" ||
          "http://localhost:5000/api/user/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      if (res.statusText === "OK") {
        window.location.href = `/account/${res.data._id}`;
      } else {
        alert("Please check all fields!");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          src={logo}
          alt="life dash logo pic"
          style={{ width: "100px", marginBottom: "1.5rem" }}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={onSubmitBtn}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <a
            href={
              "https://lifedash-memorial.herokuapp.com/api/google" ||
              "http://localhost:5000/api/google"
            }
            style={{ textDecoration: "none" }}
          >
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.submit}
              style={{
                backgroundColor: "#de5246",
                color: "#fff",
                margin: "0 auto",
                marginBottom: "2rem",
              }}
            >
              Login with Google
            </Button>
          </a>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
