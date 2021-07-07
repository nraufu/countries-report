import React from "react";

const Button = ({ label, onclick }) => {
  return (
    <button className="btn btn-primary" onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
