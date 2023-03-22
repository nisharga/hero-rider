import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBug } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="notfound">
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 d-flex justify-content-center">
              <div class="col-sm-10 col-sm-offset-1 text-center">
                <div class="four_zero_four_bg"></div>
                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link to="/" className="link_404">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
