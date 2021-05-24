import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import Link from "@material-ui/core/link";

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
              <Link>{profile.socialLinks}</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
