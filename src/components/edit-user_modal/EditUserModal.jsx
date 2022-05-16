import "./edit-user_modal.css";
import { useState } from "react";
import { useToast, useAuth } from "../../contexts";
import { editUser } from "../../services";
import { Button } from "../index";

export const EditUserModal = ({
  userToShow,
  setUserToShow =()=>{},
  setShowEditModal = () => {},
}) => {
  const [updatedUserData, setUpdatedUserData] = useState(userToShow);
  const { showToast } = useToast();
  const { userDataDispatch } = useAuth();

  const saveChanges = () => {
    editUser({
      userData: updatedUserData,
      userDataDispatch,
      setUserToShow,
      showToast,
    });
    setShowEditModal(false);
  };

  return (
    <div
      className="section-overlay center"
      onClick={() => setShowEditModal(false)}
    >
      <section className="edit-user_modal" onClick={(e) => e.stopPropagation()}>
        <div className="flex-align-center artsy-input">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            className="name-input"
            value={updatedUserData.firstName}
            onChange={(e) =>
              setUpdatedUserData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex-align-center artsy-input">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            className="name-input"
            value={updatedUserData.lastName}
            onChange={(e) =>
              setUpdatedUserData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex-align-center artsy-textarea">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={updatedUserData.bio}
            onChange={(e) =>
              setUpdatedUserData((prev) => ({
                ...prev,
                bio: e.target.value,
              }))
            }
          /> 
        </div>
        <Button className="btn-primary" onClick={saveChanges}>Save</Button>
      </section>
    </div>
  );
};
