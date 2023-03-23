import { useLocation, useNavigate } from "react-router-dom";
const AdminNavigate = (user) => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  if (user) {
    navigate(from, { replace: true });
  }
};
export default AdminNavigate;
