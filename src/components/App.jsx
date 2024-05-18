import React, { useState } from "react";
import ListItem from "./ListItem";
import InputField from "./InputField";

function App() {




  const [listItem, setItem] = useState([]);
  function handleSubmit(inputText) {
    setItem((prevValue) => {
      return [...prevValue, inputText];

      // console.log("added");
    })
  }

  // function handleClear() {
  //   setItem([]);
  // }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="todo">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputField
          onSubmit={handleSubmit}
        />
        <div>
          <ul>
            {listItem.map((todoItem, index) =>
              <ListItem
                id={index}
                item={todoItem}
                handleChecked={deleteItem}
                key={index}
              />
            )}
          </ul>
        </div>
      </div>
    </div>

  );
}

export default App;
