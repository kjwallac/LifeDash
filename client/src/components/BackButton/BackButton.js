import { Button, makeStyles } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


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
        style={{color:"white"}}
        onClick={goBack}
        // variant="contained"
        color="primary"
        // className={classes.button}
        startIcon={<ArrowBackIosIcon />}
      >
        {/* Back */}
      </Button>
    </div>
  );
};
