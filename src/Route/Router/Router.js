import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import App from "../../App";
import JoinAsRider from "../../Components/JoinAsRider/JoinAsRider";
import JoinAsLearner from "../../Components/JoinAsLearner/JoinAsLearner";
import NotFound from "./../../Shared/NotFound/NotFound";
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
    ],
  },
]);

export default Router;
