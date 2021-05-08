import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: theme.spacing(14),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5637573/pexels-photo-5637573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className={classes.large}/>
    </div>
  );
}
