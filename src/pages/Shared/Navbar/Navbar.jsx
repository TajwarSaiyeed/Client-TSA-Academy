import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiXCircle } from "react-icons/hi";
import {
  FaBars,
  FaGithub,
  FaGoogle,
  FaRegistered,
  FaSignInAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthProvider } from "../../../contexts/AuthContext";
import { toast } from "react-hot-toast";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Blog", href: "/blog", current: false },
  { name: "Courses", href: "/courses", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const googleSignInAuthProvider = new GoogleAuthProvider();
const githubSignInAuthProvider = new GithubAuthProvider();

const Navbar = () => {
  const { googleLogin, githubLogin, logOut, user, darkMode, setDarkMode } =
    useContext(AuthProvider);
  // console.log(user);
  const handleGoogleSignIn = () => {
    googleLogin(googleSignInAuthProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => toast.error(err));
  };
  const handleGithubLogin = () => {
    githubLogin(githubSignInAuthProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => toast.error(err.messages));
  };
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("signout successfull");
      })
      .catch((err) => toast.error(err.messages));
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXCircle className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden drop-shadow-sm"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="ml-3 mt-1">
                  <label className="swap swap-rotate text-white">
                    <input
                      type="checkbox"
                      onClick={() => setDarkMode(!darkMode)}
                    />

                    <svg
                      className="swap-on fill-current w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                      className="swap-off fill-current w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>
                <div className="hidden sm:ml-6 mt-1 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {user?.uid ? (
                        <div
                          className="tooltip tooltip-left"
                          data-tip={`${user?.displayName}`}
                        >
                          <img
                            className="h-8 w-8 rounded-full"
                            src={
                              user?.photoURL
                                ? user.photoURL
                                : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            }
                            alt=""
                          />
                        </div>
                      ) : (
                        <FaUserAlt className="text-white w-8 h-8 p-2" />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) =>
                          user && user?.uid ? (
                            <Link
                              to={`/profile/${user.uid}`}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          ) : (
                            <Link
                              to="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex gap-2 items-center px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <FaSignInAlt className="text-white bg-blue-500 p-1 rounded-full w-6 h-6" />{" "}
                              Login
                            </Link>
                          )
                        }
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) =>
                          user && user?.uid ? (
                            <Link
                              to="/settings"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          ) : (
                            <Link
                              to="/register"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex gap-2 items-center px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <FaRegistered className="text-white bg-blue-500 p-1 rounded-full w-6 h-6" />{" "}
                              Register
                            </Link>
                          )
                        }
                      </Menu.Item>
                      {!user && !user?.uid && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleGithubLogin}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 items-center"
                                )}
                              >
                                <FaGithub className="text-gray-400 bg-black p-1 rounded-full w-6 h-6" />{" "}
                                Github
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleGoogleSignIn}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 items-center"
                                )}
                              >
                                <FaGoogle className="text-white bg-blue-500 p-1 rounded-full w-6 h-6" />{" "}
                                Google
                              </button>
                            )}
                          </Menu.Item>
                        </>
                      )}
                      {user && user?.uid && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleSignOut}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 w-full text-left text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
