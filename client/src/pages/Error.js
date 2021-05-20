import { Fragment } from "react";
import { Link } from "react-router-dom";
import { SentimentVeryDissatisfied as SadFace } from "@material-ui/icons";

export const ErrorPage = () => {
  return (
    <Fragment>
      <SadFace style={image} />
      <div style={center}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist</p>
        <Link to="/" style={link}>
          Click here to return to home page
        </Link>
      </div>
    </Fragment>
  );
};

const { image, link, center } = {
  image: {
    textAlign: "center",
    fontSize: "10rem",
    margin: "3rem auto",
    width: "100%",
  },
  link: {
    fontSize: "1.1rem",
    color: "#333",
    textDecoration: "none",
    borderBottom: "1px solid gray",
  },
  center: {
    margin: "0 auto",
    textAlign: "center",
  },
};

export default ErrorPage;
