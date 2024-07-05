import React, { useEffect, useState } from "react";

function GetDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="main-container">
        <h3>GET Request Example</h3>
        <button onClick={fetchData}>Get User Data</button>

        {loading && <p>Loading...</p>}
        <div className="get-container">
          {data.map((user) => {
            return (
              <div className="cards" key={user.id}>
                <p>
                  <b>Name: </b>
                  {user.name}
                </p>
                <p>
                  <b>Username: </b>
                  {user.username}
                </p>
                <p>
                  <b>Email: </b>
                  {user.email}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GetDemo;
