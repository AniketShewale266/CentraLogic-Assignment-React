import React, { useState } from "react";
import leftStone from "../images/stone_left.png";
import rightStone from "../images/stone_right.png";
import leftPaper from "../images/paper_left.png";
import rightPaper from "../images/paper_right.png";
import leftScissor from "../images/scissor_left.png";
import rightScissor from "../images/scissor_right.png";

function UserContainer({userImage,setuserImage,randomText,setcomputerImage,setText}) {
 

  // console.log(randomText);
  const forRock = () => {
    switch (randomText) {
      case "rock":
        setuserImage(leftStone)
        setcomputerImage(rightStone)
        setText("Tie")
        break;
      case "paper":
        setuserImage(leftStone)
        setcomputerImage(rightPaper)
        setText("Computer Won")
        break;
      case "scissor":
        setuserImage(leftStone)
        setcomputerImage(rightScissor)
        setText("User Won")
        break;
      default:
        break;
    }
  };

  const forPaper = () => {
    switch (randomText) {
      case "rock":
        setuserImage(leftPaper)
        setcomputerImage(rightStone)
        setText("User Won")
        break;
      case "paper":
        setuserImage(leftPaper)
        setcomputerImage(rightPaper)
        setText("Tie")
        break;
      case "scissor":
        setuserImage(leftPaper)
        setcomputerImage(rightScissor)
        setText("Computer Won")
        break;
      default:
        break;
    }
  };

  const forScissor = () => {
    switch (randomText) {
      case "rock":
        setuserImage(leftScissor)
        setcomputerImage(rightStone)
        setText("Computer Won")
        break;
      case "paper":
        setuserImage(leftScissor)
        setcomputerImage(rightPaper)
        setText("User Won")
        break;
      case "scissor":
        setuserImage(leftScissor)
        setcomputerImage(rightScissor)
        setText("Tie")
        break;
      default:
        break;
    }
  };

  return (
    <div className="user-box">
      <div className="user-text">
        <span>User</span>
      </div>
      <div className="img-box">
        <img src={userImage} alt="" />
      </div>

      <div className="btns">
        <button onClick={forRock}>Rock</button>
        <button onClick={forPaper}>Paper</button>
        <button onClick={forScissor}>Scissor</button>
      </div>
    </div>
  );
}

export default UserContainer;
