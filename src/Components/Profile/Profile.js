import React from "react";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
import profileP from "../../Assets/mypic.jpg";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext pb-4">Profile Page</h1>
      <div className="register-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>1.FullName:</h3>
              <h3>2.Email:</h3>
              <h3>3.Age:</h3>
              <h3>4.Address:</h3>
              <h3>5.Phone:</h3>
              <h3>6.Car Information:</h3>
              <h3>7.Vehicle Type:</h3>
            </div>
            <div className="col-md-6">
              <h3>Profile Pic:</h3>
              <img src={profileP} alt="" className="profile_pic" />
              <h3>NID Pic:</h3>
              <img src={profileP} alt="" className="profile_pic" />
              <h3>Driving licence Pic:</h3>
              <img src={profileP} alt="" className="profile_pic" />
            </div>
          </div>
        </div>
      </div>
      <div class="login_btn btn btn-outline-info btn-lg">
        <Link to="/">LogOut</Link>
      </div>
    </>
  );
};

export default Profile;
