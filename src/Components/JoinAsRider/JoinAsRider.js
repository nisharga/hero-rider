import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Joinasrider.css";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
const JoinAsRider = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
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
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext">Join As A Rider</h1>
      <div className="register-form">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    name="fullname"
                    type="text"
                    {...register("fullname")}
                    className={`form-control ${
                      errors.fullname ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.fullname?.message}
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
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
                  <label>Age</label>
                  <input
                    name="age"
                    type="number"
                    {...register("age")}
                    className={`form-control ${errors.age ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.age?.message}</div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    name="address"
                    type="text"
                    {...register("address")}
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.address?.message}
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    type="text"
                    {...register("phone")}
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.phone?.message}
                  </div>
                </div>

                <div className="form-group">
                  <label>Driving Licence Picture</label>
                  <input
                    name="drive_licence"
                    type="file"
                    {...register("drive_licence")}
                    className={`form-control ${
                      errors.drive_licence ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.drive_licence?.message}
                  </div>
                </div>

                <div className="form-group">
                  <label>Area</label>
                  <input
                    name="area"
                    type="text"
                    {...register("area")}
                    className={`form-control ${
                      errors.area ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">{errors.area?.message}</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>NID Picture</label>
                  <input
                    name="nid"
                    type="file"
                    {...register("nid")}
                    className={`form-control ${errors.nid ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.nid?.message}</div>
                </div>

                <div className="form-group">
                  <label>Profile Picture</label>
                  <input
                    name="profilep"
                    type="file"
                    {...register("profilep")}
                    className={`form-control ${
                      errors.profilep ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.profilep?.message}
                  </div>
                </div>

                <div className="form-group">
                  <label>Car information(name, model, name palate)</label>
                  <input
                    name="info"
                    type="text"
                    placeholder="Audi-2005-DHA2934"
                    {...register("info")}
                    className={`form-control ${
                      errors.info ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">{errors.info?.message}</div>
                </div>

                <div className="form-group">
                  <label>Password</label>
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

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                  </div>
                </div>

                <div className="form-group">
                  <label>Vehicle Type(Car/Bike)</label>
                  <input
                    name="vehecle"
                    type="name"
                    placeholder="Car/Bike"
                    {...register("vehecle")}
                    className={`form-control ${
                      errors.vehecle ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.vehecle?.message}
                  </div>
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
                  I have read and agree to the Terms
                </label>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="btn btn-warning float-right"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinAsRider;
