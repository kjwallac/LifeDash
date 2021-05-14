import { CircularProgress } from "@material-ui/core";

export const Loading = () => {
  return (
    <div style={style}>
      <h2>Loading...</h2>
      <CircularProgress />
    </div>
  );
};

const style = {
  marginTop: "10rem",
  fontSize: "1.5rem",
};

export default Loading;
