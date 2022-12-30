import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/pages/AddTask/AddTask";
import Home from "../components/pages/Home/Home";
import MyTask from "../components/pages/MyTask/MyTask";
import Login from "../components/signup/Login/Login";
import Register from "../components/signup/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-task",
        element: (
          <PrivateRoute>
            <MyTask></MyTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
