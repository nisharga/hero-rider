import React, { useEffect, useState } from "react";
import SearchSingleUserPage from "../SerchSingleUser/SerchSingleUser";
const SearchByPhone = () => {
  const [email, setEmail] = useState("");
  const [searchsingleUser, setsearchsingleUser] = useState("");
  const handleEmailSearch = (e) => {
    const url = `https://pro-hero-rider-server.vercel.app/phone/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsearchsingleUser(data[0]));
    e.preventDefault();
  };
  console.log(searchsingleUser);

  return (
    <div>
      <h3>Search By Phone Number</h3>
      <form onSubmit={handleEmailSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter User Phone Number"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <br />
      <h6>ID:{searchsingleUser && searchsingleUser._id}</h6>
      <h6>FullName:{searchsingleUser && searchsingleUser.fullName}</h6>
    </div>
  );
};

export default SearchByPhone;
