import React from "react";

const AlluserTable = ({ val }) => {
  const { _id, fullName, email, phone } = val;
  console.log(val);
  return (
    <tr>
      <td>{_id}</td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
};

export default AlluserTable;
