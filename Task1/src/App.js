import { useState } from "react";
import "./App.css";
import NavBar from "./component/header";
import Item from "./component/items";

function App() {
  const [list, setList] = useState([]);
  const [addItem, setAddItem] = useState("");
  const changeItem = (e) => {
    let cont = e.target.value;
    setAddItem(cont);
  };
  const addToList = (e) => {
    if (addItem !== "") {
      setList((prev) => {
        return [...prev, addItem];
      });
    }
    setAddItem("");
    e.preventDefault();
  };
  const deleteToList = (id) => {
    setList((prevNote) => {
      return prevNote.filter((noteItem, indx) => {
        return indx !== id;
      });
    });
  };
  const updateToList = (id) => {
    setList((prevNote) => {
      return prevNote.filter((noteItem, indx) => {
        if (indx === id) {
          setAddItem(noteItem);
        }
        return indx !== id;
      });
    });
  };
  return (
    <div className="App">
      <NavBar />
      <div className="contentBox">
        <div className="box">
          <input
            type="text"
            name="toAdd"
            id=""
            value={addItem}
            onChange={changeItem}
          />
          <input type="button" value="+" onClick={addToList} />
          {list.map((CItem, index) => {
            return (
              <Item
                item={CItem}
                id={index}
                toDelete={deleteToList}
                toEdit={updateToList}
              />
            );
          })}
        </div>
      </div>
      <div className="foot">Created by : Utkarsh Gupta</div>
    </div>
  );
}

export default App;
