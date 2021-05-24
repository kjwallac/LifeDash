import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Menu from "./Menu";
import { BackButton } from "./BackButton/BackButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#3CB685",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <BackButton />
          <Typography variant="h6" className={classes.title}>
            LifeDash
          </Typography>
          <Menu className={classes.menuButton} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
