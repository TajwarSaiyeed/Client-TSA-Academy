import { createBrowserRouter } from "react-router-dom";
import CourseCardDetails from "../../components/CourseCardDetails/CourseCardDetails";
import Main from "../../layout/Main";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import Login from "../../pages/UserLogin/Login/Login";
import Register from "../../pages/UserLogin/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("https://tsa-academy-server.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseCardDetails />,
        loader: ({ params }) => {
          return fetch(
            `https://tsa-academy-server.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },

  { path: "*", element: <div>404</div> },
]);
