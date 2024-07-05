import React, { useRef, useState } from "react";

function PostDemo() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: ref1.current.value,
      username: ref2.current.value,
      email: ref3.current.value,
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error posting data:", error);
    } 
      setLoading(false);
  };

  console.log(responseData);
  return (
    <>
      <div className="form-container">
      <h3>POST Request Example</h3>
        <form onSubmit={handleSubmit}>
          Name: <input type="text" placeholder="Enter name" ref={ref1}/>
          <br />
          Username: <input type="text" placeholder="Enter username" ref={ref2}/>
          <br />
          Email: <input type="email" placeholder="Enter email" ref={ref3}/>
          <br />
          <button type="submit">Submit</button>
        </form>

        {loading && <p>Loading...</p>}
        {responseData && (
          <div className="response-container">
            <h3>Response Data:</h3>
            <p><b>Id: </b>{responseData.id}</p>
            <p><b>Name: </b>{responseData.name}</p>
            <p><b>Username: </b>{responseData.username}</p>
            <p><b>Email: </b>{responseData.email}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PostDemo;
