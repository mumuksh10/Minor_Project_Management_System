import React, { useState } from "react";
import { Grid } from "react-loader-spinner";
const ProjectStudents = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h1
        style={{ fontsize: "24px", fontweight: "bold", marginbottom: "10px" }}
      >
        Available Projects{" "}
      </h1>
      <ul style={{ liststyle: "none", padding: "0" }}>
        <li style={{ marginbottom: "5px" }}>Minor System Allotment</li>
      </ul>
      {/* <button onClick={() => addItem("New Item")}>Add Item</button> */}
    </div>
  );
};

export default ProjectStudents;
