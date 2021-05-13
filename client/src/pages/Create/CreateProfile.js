import "./CreateProfile.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const CreateProfile = () => {
  return (
    <div className="create-profile">
      <h1>Create a profile</h1>
      <HelpOutlineIcon
        style={{
          fontSize: 100,
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      />
      <button>Add profile image!</button>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" maxlength="25" id="firstName" />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" maxlength="30" />
              <label htmlFor="bornDate">Date of birth</label>
              <input type="number" min="0500" max="9999" />
              <label htmlFor="deathDate">Date of passing</label>
              <input type="number" min="0500" max="9999" />
              <label htmlFor="profileImage">Profile Image</label>
              <input type="text" />
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" id="bio"></textarea>
              <label htmlFor="status">Set Status</label>
              <select name="status" id="status">
                <option value="public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
