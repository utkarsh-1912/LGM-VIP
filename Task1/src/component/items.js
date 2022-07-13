import React from "react";

function Item(props) {
  const deleteItem = (event) => {
    props.toDelete(props.id);
  };
  const editItem = (event) => {
    props.toEdit(props.id);
  };
  return (
    <div className="addItem">
      <div className="secItem">
        <p>{props.item}</p>
      </div>
      <div className="secBtn">
        <button onClick={editItem}>Edit</button>{" "}
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}

export default Item;
