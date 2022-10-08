import React from "react"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async() => {

      //Call API (wait), convert (depends on wait), then set the state
      let res = await fetch("/api");
      let data = await res.json();
      setData(data);
    }

    fetchAPI().catch(error => {
      console.log("Error occurred!")
    })

  }, [])

  return (
    <div>
      {
        (typeof data.users !== "undefined") ? (
          data.users.map((user, i) => (
            <p key={i}>{user}</p>
          )) 
        ) : (
          <div>Loading users...</div>
        )
      }
    </div>
  );
}

export default App;
