import React from "react";
import { Link } from "react-router-dom";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
const AdminPage = () => {
  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext">Admin Page</h1>
      <div className="register-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <table className="table text-white">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Select</th>
                  </tr>
                  <tr>
                    <td>Nisharga Kabir</td>
                    <td>NishargaKabir@gmail.com</td>
                    <td>Rider</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </thead>
              </table>
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

export default AdminPage;
