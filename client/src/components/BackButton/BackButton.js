import { Button } from "@material-ui/core";
import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Button
        style={{ color: "white" }}
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
