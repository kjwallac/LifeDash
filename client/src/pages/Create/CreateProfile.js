import "./CreateProfile.css";
import Form from "../../components/Form";

export const CreateProfile = () => {
  return (
    <div className="create-profile" style={{ textAlign: "center" }}>
      <h1>Create a Profile</h1>

      <img
        src="/images/logo.png"
        alt="logo"
        style={{ height: 150, alignSelf: "center" }}
      />

      <Form />
    </div>
  );
};

export default CreateProfile;
