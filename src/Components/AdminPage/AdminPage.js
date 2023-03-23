import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bgvideo from "../../Shared/Bgvideo/Bgvideo";
import auth from "./../../Shared/Auth/Auth";
import AlluserTable from "./AlluserTable/AlluserTable";
const AdminPage = () => {
  const [alluser, setalluser] = useState();
  useEffect(() => {
    const url = `http://localhost:5000/alluser`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setalluser(data));
  }, [setalluser]);
  return (
    <>
      <Bgvideo />
      <h1 className="text-center mt-3 ridertext">Admin Page</h1>
      <div className="register-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <table className="table text-white">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>
                      <button
                        className="btn btn-warning"
                        onClick={() => alert("Hi")}
                      >
                        Delet User
                      </button>
                    </th>
                  </tr>
                  {console.log(alluser)}
                  {alluser?.map((val, index) => (
                    <AlluserTable
                      val={val}
                      index={index + 1}
                      key={val._id}
                    ></AlluserTable>
                  )) || <p>Loading</p>}
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
