import React, { useRef, useState } from "react";
import UserContainer from "./UserContainer";
import ComputerContainer from "./ComputerContainer";
import { useEffect } from "react";


function Home() {
  const [computerImage, setcomputerImage] = useState();
  const [userImage, setuserImage] = useState("");
  const [text, setText] = useState("");

  let arr = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * arr.length);
  let random = arr[randomIndex];

  console.log(random);

  return (
    <>
       <h1>Rock Paper Scissor Game</h1>
      <div className="content">
        <h3>{text}</h3>
      </div>
      <div className="main-container">
        <button
          className="reset"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </button>
        <div className="container">
          <UserContainer
            userImage={userImage}
            setuserImage = {setuserImage}
            randomText={random}
            setcomputerImage={setcomputerImage}
            setText={setText}
          />
          <ComputerContainer computerImage={computerImage} />
        </div>
      </div>
      
    </>
  );
}

export default Home;
