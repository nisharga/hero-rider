import React, { useEffect, useState } from "react";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
import profileP from "../../Assets/mypic.jpg";
import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [singleUser, setsingleUser] = useState();
  const [signOut] = useSignOut(auth);
  useEffect(() => {
    const url = `http://localhost:5000/user/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsingleUser(data));
  }, [setsingleUser]);
  console.log(singleUser);

  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext pb-4 pr-3">
        Profile Page
        <span className="text-info ml-3 pl-3">
          {"("}
          {singleUser ? singleUser[0].role : ""}
          {")"}
        </span>
      </h1>
      <div className="register-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>{loading ? "Loading" : ""}</p>
              <h3>
                1.FullName: {singleUser ? singleUser[0].fullName : "name"}
              </h3>
              <h3>
                2.Email: <br /> {user ? user.email : "not sign in"}
              </h3>
              <span className="text-info">
                {user?.emailVerified ? "Verify Email" : "not Verify Email"}
              </span>
              <h3>3.Age: {singleUser ? singleUser[0].age : "age"}</h3>
              <h3>
                4.Address: {singleUser ? singleUser[0].address : "address"}
              </h3>
              <h3>5.Phone: {singleUser ? singleUser[0].phone : "phone"}</h3>
              <h3>
                6.Car Information: {singleUser ? singleUser[0].info : "info"}
              </h3>
              <h3>
                7.Vehicle Type:{singleUser ? singleUser[0].vehecle : "vehecle"}
              </h3>
            </div>
            <div className="col-md-6">
              <h3>Profile Pic:</h3>
              <img
                src={singleUser ? singleUser[0].profileImg : ""}
                alt=""
                className="profile_pic"
              />
              <h3>NID Pic:</h3>
              <img
                src={singleUser ? singleUser[0].nidImg : ""}
                alt=""
                className="profile_pic"
              />
              <h3>Driving licence Pic:</h3>
              <img
                src={singleUser ? singleUser[0].drive_licenceImg : ""}
                alt=""
                className="profile_pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="login_btn btn btn-outline-info btn-lg">
        <Link to="/" onClick={signOut}>
          LogOut
        </Link>
      </div>
    </>
  );
};

export default Profile;
