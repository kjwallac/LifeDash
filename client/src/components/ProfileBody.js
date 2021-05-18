import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
              {profile.bio}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
