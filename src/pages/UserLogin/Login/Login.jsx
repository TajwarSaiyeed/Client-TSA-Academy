import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import userPlaceHolder from "../../../assets/userPlaceHolder.png";
import { AuthProvider } from "../../../contexts/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { user, loader, setLoader, logInWithEmailPassword } =
    useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        className="flex flex-col justify-center items-center p-20 gap-3 rounded-lg relative shadow-lg bg-blue-200"
      >
        <div className="avatar placeholder absolute -top-20">
          <div className=" bg-neutral-content text-neutral-focus rounded-full shadow-lg w-32">
            <img src={userPlaceHolder} alt="" />
          </div>
        </div>
        <h1 className="text-5xl font-bold my-4 text-white drop-shadow-md">
          Sign in to Your Account
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
      </form>
    </div>
  );
};

export default Login;
