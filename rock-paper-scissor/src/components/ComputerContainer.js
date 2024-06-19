import React, { useEffect, useState } from "react";
import leftStone from "../images/stone_left.png";
import rightStone from "../images/stone_right.png";
import leftPaper from "../images/paper_left.png";
import rightPaper from "../images/paper_right.png";
import leftScissor from "../images/scissor_left.png";
import rightScissor from "../images/scissor_right.png";

function ComputerContainer({computerImage}) {
  return (
    <div className="computer-box">
      <div className="computer-text">
        <span>Computer</span>
      </div>
      <div className="img-box">
        <img src={computerImage} alt="" />
      </div>
    </div>
  );
}

export default ComputerContainer;
