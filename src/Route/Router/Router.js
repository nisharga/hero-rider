import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import App from "../../App";
import JoinAsRider from "../../Components/JoinAsRider/JoinAsRider";
import JoinAsLearner from "../../Components/JoinAsLearner/JoinAsLearner";
import NotFound from "./../../Shared/NotFound/NotFound";
import Login from "../../Components/Login/Login";
import Profile from "../../Components/Profile/Profile";
import RequireAuth from "./../RequireAuth/RequireAuth";
import AdminPage from "../../Components/AdminPage/AdminPage";
import Package from "../../Components/Package/Package";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/rider",
        element: <JoinAsRider />,
      },
      {
        path: "/learner",
        element: <JoinAsLearner />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard",
        element: <AdminPage />,
      },
      {
        path: "/package",
        element: <Package />,
      },
    ],
  },
]);

export default Router;
