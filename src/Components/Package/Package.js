import React from "react";
import { Link } from "react-router-dom";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
const Package = () => {
  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext">Our package</h1>
      <div className="register-form">
        <div className="container">
          <div class="row">
            <div class="col-md-6 py-5">
              <div class="singlePrice">
                <h2 class="priceTitle">$200</h2>
                <h3 class="priceSubTitle">Car Driving Lessons</h3>
                <p>Most sellable lessons.</p>
                <div class="listItem my-3">
                  <ul>
                    <li>Life time service</li>
                    <li>Other Tutorial Site Premium access</li>
                    <li>24/7 support</li>
                    <li>Buy Once Life Time Free</li>
                    <li>Get Update Regulary</li>
                  </ul>
                </div>
                <a href="" class="btn btn-primary btn-block chosePlan">
                  Choose plan
                </a>
              </div>
            </div>

            <div class="col-md-6 py-5 activePrice">
              <div class="singlePrice">
                <h2 class="priceTitle">$100</h2>
                <h3 class="priceSubTitle">Bike Driving lessons</h3>
                <p>Most affortable lessons.</p>
                <div class="listItem my-3">
                  <ul>
                    <li>Life time service</li>
                    <li>Other Tutorial Site Premium access</li>
                    <li>24/7 support</li>
                  </ul>
                </div>
                <a href="" class="btn btn-primary btn-block chosePlan">
                  Choose plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login_btn btn btn-outline-info btn-lg">
        <Link to="/">Log Out</Link>
      </div>
    </>
  );
};

export default Package;
