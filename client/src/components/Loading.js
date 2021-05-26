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
  margin: "0 auto",
  marginTop: "10rem",
  fontSize: "1.5rem",
  textAlign: "center",
  height: "100vh",
};

export default Loading;
