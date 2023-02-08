import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
function HomePage() {
  // strart Api
  const api = "https://63e228b7109336b6cb00e695.mockapi.io/To-Do-List";
  // End Api

  // Start GET Data
  const [alltask, setAllTask] = useState([]);
  useEffect(() => {
    axios.get(api).then((res) => {
      setAllTask(res.data);
      console.log(res.data);
    });
  }, []);
  // End Get Data
  // Start Post Data
  const [task, setTask] = useState("");
  const [tasklevel, setTaskLevel] = useState("");
  const PostData = () => {
    if (task.length >= 3) {
      axios.post(api, { task, tasklevel });
    } else {
      alert("Enter details of Task");
    }
  };

  // End Post Data
  return (
    <div>
      HomePage
      <button></button>
      <div className="Add-Task">
        <select
          name=""
          id=""
          onChange={(e) => {
            setTaskLevel(e.target.value);
          }}
        >
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Done">Done</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={PostData}>Add Task</button>
      </div>
      <div className="Lists">
        <div className="Done">
          <h2>Done</h2>
        </div>
        <div className="In-Progress">
          <h2>In-Progress</h2>
        </div>
        <div className="To-Do">
          <h2>To-Do</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
