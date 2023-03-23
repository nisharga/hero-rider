import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import * as Yup from "yup";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
import { Navigate } from "react-router-dom";
import NavigateCustom from "./../../Shared/Navigate/Navigate";
const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const onSubmit = async (data) => {
    const password = data.password;
    const email = data.email;
    signInWithEmailAndPassword(email, password);
  };
  NavigateCustom(user);
  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext">Login</h1>
      <div className="register-form">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-6 offset-md-3">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    name="email"
                    type="text"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
                <div className="form-group">
                  <label>Password *</label>
                  <input
                    name="password"
                    type="password"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
                <div className="form-group form-check">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    {...register("acceptTerms")}
                    className={`form-check-input ${
                      errors.acceptTerms ? "is-invalid" : ""
                    }`}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I have read and agree to the Terms *
                  </label>
                  <div className="invalid-feedback">
                    {errors.acceptTerms?.message}
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <p>{loading ? "Loading..." : ""}</p>
                  <p>{error ? error.message : ""}</p>
                  <p>{user ? "login-sucessful" : ""}</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
