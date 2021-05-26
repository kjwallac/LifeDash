import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Link,
  List,
  ListItem,
  Container,
} from "@material-ui/core";

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
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm container>
            {profile.socialLinks.length && (
              <List>
                <Typography variant="body2" className={classes.profData}>
                  {profile.socialLinks.map((links) => (
                    <Link
                      key={links}
                      href={links}
                      color="inherit"
                      target="_blank"
                      style={{
                        wordBreak: "break-word",
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                    >
                      <ListItem
                        key={links}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          marginBottom: "0.5rem",
                          width: "100%",
                        }}
                      >
                        {links}
                      </ListItem>
                    </Link>
                  ))}
                </Typography>
              </List>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
