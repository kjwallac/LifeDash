import "./CreateProfile.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Form from "../../components/Form";

export const CreateProfile = () => {
  return (
    <div className="create-profile">
      <h1>Create a Profile</h1>
      <HelpOutlineIcon
        style={{
          fontSize: 100,
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      />
      <button>Add profile image!</button>

      <Form />
    </div>
  );
};

export default CreateProfile;
