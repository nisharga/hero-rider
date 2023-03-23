import React from "react";

const SerchSingleUser = ({ val }) => {
  const { fullname, email, phone, _id } = val;
  return (
    <div>
      <h6>{_id}</h6>
      <h6>{fullname}</h6>
      <h6>{email}</h6>
      <h6>{phone}</h6>
      <button onClick={alert("helo")}>Delet User</button>
    </div>
  );
};

export default SerchSingleUser;
