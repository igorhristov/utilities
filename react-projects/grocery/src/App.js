import React, { useState } from "react";

import List from "./List";
import Alert from "./Alert";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // edit
    } else {
      // show alert
      // create new item
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const handleClear = () => {
    setList([]);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h2>Grocery App</h2>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. bananas"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "grocery"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button onClick={handleClear} className="clear-btn">
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
