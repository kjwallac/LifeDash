import "./CreateProfile.css";
import Form from "../../components/Form";

export const CreateProfile = () => {
  return (
    <div className="create-profile" style={{ textAlign: "center" }}>
      <h2>Create a Profile</h2>

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
