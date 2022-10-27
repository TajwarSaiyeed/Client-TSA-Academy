import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import userPlaceHolder from "../../../assets/userPlaceHolder.png";
import { AuthProvider } from "../../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const googleSignInAuthProvider = new GoogleAuthProvider();
const githubSignInAuthProvider = new GithubAuthProvider();
const Login = () => {
  const {
    googleLogin,
    githubLogin,
    user,
    loader,
    setLoader,
    logInWithEmailPassword,
  } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleLogin(googleSignInAuthProvider)
      .then((result) => {
        toast.success("SignIn Successful");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => {
        setLoader(false);
      });
  };
  const handleGithubLogin = () => {
    githubLogin(githubSignInAuthProvider)
      .then((result) => {
        toast.success("SignIn Successful");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => {
        setLoader(false);
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInWithEmailPassword(email, password)
      .then((result) => {
        // console.log(result.user);
        const User = result.user;
        form.reset();
        if (User.emailVerified === true) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your Email Is Not Verified. Please Verify it.");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
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
      className="flex justify-center items-center min-h-screen"
      style={{ height: "110vh" }}
    >
      <form
        onSubmit={handleLogIn}
        className="flex flex-col justify-center items-center lg:p-20 p-10 gap-3 rounded-lg relative shadow-lg bg-blue-200"
      >
        <div className="avatar placeholder absolute -top-20">
          <div className=" bg-neutral-content text-neutral-focus rounded-full shadow-lg w-32">
            <img src={userPlaceHolder} alt="" />
          </div>
        </div>
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold my-4 text-white drop-shadow-md">
          Sign in To Your Account
        </h1>
        <input
          type="text"
          placeholder="Enter A Email"
          className="input w-full max-w-xs"
          required
          name="email"
        />
        <input
          type="password"
          placeholder="Enter A Password"
          className="input w-full max-w-xs"
          required
          name="password"
        />
        <button type="submit" className="btn btn-outline btn-info text-xl">
          Sign in
        </button>
        <p className="text-red-500 drop-shadow-md text-xl">
          Don't Have An Account{" "}
          <Link className="link link-primary" to="/register">
            Register
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

export default Login;
