import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ImageAvatar from './ImageAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  profData: {
    textAlign: 'center',  
  },

}));

export default function ProfileHeader({ profile }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ButtonBase className={classes.image}>
              <ImageAvatar profile={profile} className={classes.avatar} />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography xs={12} gutterBottom variant="h6" className={classes.profData}>
                  {profile.firstName} {profile.lastName}
                </Typography>
                <Typography xs={12} variant="body1" gutterBottom className={classes.profData}>
                  {profile.bornDate} - {profile.deathDate}
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
