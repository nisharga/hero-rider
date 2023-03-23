import React, { useEffect, useState } from "react";
import SearchSingleUserPage from "../SerchSingleUser/SerchSingleUser";
import AgeDetails from "./AgeDetails";
const SearchByAge = () => {
  const [fromage, setfromage] = useState();
  const [toage, setoage] = useState();
  const [searchsingleUser, setsearchsingleUser] = useState("");

  const handleEmailSearch = (e) => {
    const url = `https://pro-hero-rider-server.vercel.app/age/${fromage}/${toage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsearchsingleUser(data));
    e.preventDefault();
  };

  return (
    <div>
      <h3>Search By Age Range</h3>
      <form onSubmit={handleEmailSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="From"
            onBlur={(e) => setfromage(parseInt(e.target.value))}
          />
          <input
            type="text"
            className="form-control"
            placeholder="To"
            onBlur={(e) => setoage(parseInt(e.target.value))}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <br />
      {/* {searchsingleUser?.map((val, index) => (
        <AgeDetails val={val} index={index + 1} key={val._id}></AgeDetails>
      )) || <p>Loading</p>} */}
      {console.log(searchsingleUser)}
    </div>
  );
};

export default SearchByAge;
