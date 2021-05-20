import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui-/core";

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

export default function ProfileLinks({ profile, socialLinks }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm container>
            {profile.socialLinks.map((socialLinks) => (
              <Typography
                key={socialLinks}
                variant="body2"
                className={classes.profData}
              >
                {profile.socialLinks}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
