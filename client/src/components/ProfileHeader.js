import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ImageAvatars from './ImageAvatars';

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

export default function ProfileHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ButtonBase className={classes.image}>
              <ImageAvatars className={classes.avatar} />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography xs={12} gutterBottom variant="h6" className={classes.profData}>
                  Name Here
                </Typography>
                <Typography xs={12} variant="body1" gutterBottom className={classes.profData}>
                  1932 - 2020
                </Typography>
                <Typography variant="body2" className={classes.profData}>
                “The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things or make them unimportant.” – 11th Doctor
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
