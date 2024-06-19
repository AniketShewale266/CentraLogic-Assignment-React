import logo from "./logo.svg";
import "./App.css";
import UserContainer from "./components/UserContainer";
import ComputerContainer from "./components/ComputerContainer";
import { useEffect, useState } from "react";

function App() {
  const [computerImage, setcomputerImage] = useState();
  const [userImage, setuserImage] = useState("");
  const [text, setText] = useState("");

  let arr = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * arr.length);
  let random = arr[randomIndex];

  console.log(random);

  // useEffect(()=>{
  //   console.log("hii");
  // },[])

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

export default App;
