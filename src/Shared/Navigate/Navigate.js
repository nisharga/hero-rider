import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigateCustom = (user) => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/profile";
  if (user) {
    navigate(from, { replace: true });
  }
};

export default NavigateCustom;
