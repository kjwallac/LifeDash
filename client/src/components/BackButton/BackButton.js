import { Button, makeStyles } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const BackButton = ({ style }) => {
  const classes = useStyles();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Button
        style={style}
        onClick={goBack}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ArrowBackIos />}
      >
        Back
      </Button>
    </div>
  );
};
