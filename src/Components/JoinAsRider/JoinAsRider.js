import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import * as Yup from "yup";
import "./Joinasrider.css";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
import { useLocation, useNavigate } from "react-router-dom";
const JoinAsRider = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Fullname is required")
      .min(6, "Fullname must be at least 6 characters")
      .max(20, "Fullname must not exceed 20 characters"),
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
  const [drive_licenceImg, setDriveLicenseImg] = useState();
  const [nidImg, setNidImg] = useState();
  const [profileImg, setProfileImg] = useState();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    const acceptTerms = data.acceptTerms;
    const address = data.address;
    const age = data.age;
    const area = data.area;
    const password = data.password;
    const email = data.email;
    const fullName = data.fullname;
    const info = data.info;
    const phone = data.phone;
    const vehecle = data.vehecle;
    const role = "rider";

    await createUserWithEmailAndPassword(email, password);
    // save signup information in database
    fetch("http://localhost:5000/adduser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        age: age,
        address: address,
        phone: phone,
        drive_licenceImg: drive_licenceImg,
        area: area,
        nidImg: nidImg,
        profileImg: profileImg,
        vehecle: vehecle,
        info: info,
        role: role,
        acceptTerms: acceptTerms,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Redirect to that from page
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/profile";
  if (user) {
    navigate(from, { replace: true });
  }

  const ProfileImgChange = (e) => {
    const avater = e.target.files[0];
    const formData = new FormData();
    formData.append("image", avater);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setProfileImg(data.data.url));
  };
  const DrivingImgChange = (e) => {
    const drivinglycence = e.target.files[0];
    const formData = new FormData();
    formData.append("image", drivinglycence);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setDriveLicenseImg(data.data.url));
  };
  const NidImgChange = (e) => {
    const nidImg = e.target.files[0];
    const formData = new FormData();
    formData.append("image", nidImg);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setNidImg(data.data.url));
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
                  <label>Full Name *</label>
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
                    onChange={DrivingImgChange}
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
                    onChange={NidImgChange}
                    className={`form-control ${errors.nid ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.nid?.message}</div>
                </div>

                <div className="form-group">
                  <label>Profile Picture</label>
                  <input
                    name="profilep"
                    onChange={ProfileImgChange}
                    type="file"
                    // {...register("profilep")}
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

                <div className="form-group">
                  <label>Confirm Password *</label>
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
                <p>{error?.message}</p>
                <p>{loading ? "Loading" : ""}</p>
                <p>{user ? "User Create Sucessfull" : ""}</p>
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
                  Register
                </button>
                {/* <button
                  type="button"
                  onClick={reset}
                  className="btn btn-warning float-right"
                >
                  Reset.
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinAsRider;
