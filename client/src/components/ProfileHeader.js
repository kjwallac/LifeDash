import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import ImageAvatar from "./ImageAvatar";
import { Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  profData: {
    textAlign: "center",
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ProfileHeader({ profile }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.avatar}>
            <ImageAvatar profile={profile} />
          </Grid>
          <Grid item sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  xs={12}
                  gutterBottom
                  variant="h6"
                  className={classes.profData}
                >
                  {profile.firstName} {profile.lastName}
                </Typography>
                <Typography
                  xs={12}
                  variant="body1"
                  gutterBottom
                  className={classes.profData}
                >
                  {profile.bornDate}{" "}
                  <Remove
                    style={{
                      display: "inline-flex",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  {profile.deathDate}
                </Typography>
                <Typography variant="body2" className={classes.profData}>
                  {profile.quote}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
