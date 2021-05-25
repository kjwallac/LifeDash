import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  profData: {
    textAlign: "center",
  },
}));

export default function ProfileBody({ profile }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm container>
            <Typography variant="body2" className={classes.profData}>
              <Link
                href={profile.socialLinks}
                color="inherit"
                target="_blank"
                style={{
                  wordBreak: "break-word",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                {`${profile.socialLinks}`}
              </Link>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
