import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import userPlaceHolder from "../../../assets/userPlaceHolder.png";
import { AuthProvider } from "../../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const googleSignInAuthProvider = new GoogleAuthProvider();
const githubSignInAuthProvider = new GithubAuthProvider();
const Register = () => {
  const {
    googleLogin,
    githubLogin,
    user,
    loader,
    setLoader,
    registerWithEmailPassword,
    updateNamePhoto,
    verifyEmail,
  } = useContext(AuthProvider);

  const handleGoogleSignIn = () => {
    googleLogin(googleSignInAuthProvider)
      .then((result) => {})
      .catch((err) => toast.error(err.message));
  };
  const handleGithubLogin = () => {
    githubLogin(githubSignInAuthProvider)
      .then((result) => {})
      .catch((err) => toast.error(err.message));
  };
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userPhoto = form.userPhoto.value;
    const email = form.email.value;
    const password = form.password.value;

    registerWithEmailPassword(email, password)
      .then((result) => {
        form.reset();
        const profile = { displayName: userName, photoURL: userPhoto };

        updateNamePhoto(profile)
          .then(() => {})
          .catch((err) => toast.error(err.message));
        verifyEmail()
          .then(() => {})
          .catch((err) => toast.error(err.message));
        toast.success("Please Check Your inbox or spam folder");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => {
        setLoader(false);
      });
  };

  if (loader) {
    return (
      <progress className="progress absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-96 h-10"></progress>
    );
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        onSubmit={handleRegisterUser}
        className="flex flex-col justify-center items-center p-10 gap-3 rounded-lg relative shadow bg-blue-200 w-96 lg:w-2/4"
      >
        <div className="avatar placeholder absolute lg:-top-20 md:-top-20 -top-10">
          <div className="bg-neutral-focus text-neutral-content rounded-full lg:w-32 md:w-32 w-20">
            <img src={userPlaceHolder} alt="" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl md:text-3xl  font-bold uppercase my-4 text-white drop-shadow-md">
          Please Register
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          className="input w-full max-w-xs"
          required
          name="userName"
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input w-full max-w-xs"
          name="userPhoto"
          required
        />
        <input
          type="text"
          placeholder="Enter A Email"
          className="input w-full max-w-xs"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Enter A Password"
          className="input w-full max-w-xs"
          name="password"
          required
        />
        <button type="submit" className="btn btn-outline btn-info text-xl">
          Register
        </button>
        <p className="text-blue-500 drop-shadow-md text-xl">
          Already Have An Account{" "}
          <Link className="link link-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleGoogleSignIn}
            className=" rounded-md bg-gray-100 flex gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 items-center"
          >
            <FaGoogle className="text-white bg-blue-500 p-1 rounded-full w-6 h-6" />{" "}
            Google
          </button>
          <button
            className=" rounded-md flex gap-2 w-full text-left px-4 py-2 text-sm bg-gray-100 text-gray-700 items-center"
            onClick={handleGithubLogin}
          >
            <FaGithub className="text-gray-400 bg-black p-1 rounded-full w-6 h-6" />{" "}
            Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
