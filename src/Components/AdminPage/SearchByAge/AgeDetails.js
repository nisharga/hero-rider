import React from "react";

const AgeDetails = ({ val }) => {
  const { fullName } = val;
  return (
    <div>
      <div className="form-group">
        <p>{fullName}</p>
      </div>
    </div>
  );
};

export default AgeDetails;
