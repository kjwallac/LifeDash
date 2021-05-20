import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: theme.spacing(14),
  },
}));

export default function ImageAvatar({ profile }) {
  const classes = useStyles();

  return (
    <div>
      <Avatar
        alt={`${profile.firstName} ${profile.lastName}`}
        src={profile.profileImage}
        className={classes.large}
      />
    </div>
  );
}
