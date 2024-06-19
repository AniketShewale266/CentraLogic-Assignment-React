import React, { useRef, useState } from "react";

function Even() {
  const inputRef = useRef(0);
  const [EvenOdd, setEvenOdd] = useState(null);

  const handleClick = () => {
    // alert(inputRef.current.value)
    const val = inputRef.current.value;

    if (val % 2 === 0) {
      setEvenOdd("Even");
    } else {
      setEvenOdd("Odd");
    }
  };
  return (
    <>
      <div className="even">
        <h3>Welcome to my Website</h3>

        <input type="number" ref={inputRef} />
        <br />
        <button onClick={handleClick}>Click here</button>
        <br />
        <span>Number is: {EvenOdd}</span>
      </div>
    </>
  );
}

export default Even;
