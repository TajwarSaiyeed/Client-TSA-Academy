import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";

const Profile = () => {
  const { user, loader } = useContext(AuthProvider);
  if (loader) {
    return (
      <progress className="progress absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-96 h-10"></progress>
    );
  }
  if (user) {
    return (
      <div>
        <h1>{user?.displayName}</h1>
        <img src={user?.photoURL} alt="" />
      </div>
    );
  }

  return <Navigate to="/login"></Navigate>;
};

export default Profile;
