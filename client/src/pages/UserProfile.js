import { useState } from "react";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
const UserProfile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [newEmail, setNewEmail] = useState(user?.newEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !newEmail) {
      displayAlert();
      return;
    }
    updateUser({ name, email, newEmail });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="newEmail"
            value={newEmail}
            handleChange={(e) => setNewEmail()}
          />
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserProfile;
