import React from "react";
import "./list.css";

const Lists = () => {
  console.log("here");
  return (
    <div className="columns-container">
      <div className="column left">Left</div>
      <div className="column center">Center</div>
      <div className="column right">Right</div>
    </div>
  );
};

export default Lists;
