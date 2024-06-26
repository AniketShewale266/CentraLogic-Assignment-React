import React from "react";

function Button({ name, onClick }) {
  return (
    <>
      <button className="btn" onClick={onClick}>{name}</button>
    </>
  );
}

export default Button;
