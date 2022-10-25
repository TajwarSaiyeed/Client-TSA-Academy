import { createBrowserRouter } from "react-router-dom";
import CourseCardDetails from "../../components/CourseCardDetails/CourseCardDetails";
import Main from "../../layout/Main";
import Cources from "../../pages/Cources/Cources";
import Home from "../../pages/Home/Home";
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
        path: "/cources",
        element: <Cources />,
        loader: () => fetch("https://tsa-academy-server.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseCardDetails />,
        loader: ({ params }) =>
          fetch(`https://tsa-academy-server.vercel.app/course/${params.id}`),
      },
    ],
  },

  { path: "*", element: <div>404</div> },
]);
