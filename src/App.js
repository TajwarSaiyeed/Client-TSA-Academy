import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const { darkMode } = useContext(AuthProvider);
  return (
    <div className={darkMode ? "dark" : ""}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
