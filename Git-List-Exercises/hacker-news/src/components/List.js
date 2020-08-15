import React from "react";
import ListItems from "./ListItems";
const List = ({ list }) => {
  return (
    <ul className="list-group">
      {list.map((element, index) => (
        <ListItems element={element} index={index} />
      ))}
    </ul>
  );
};

export default List;
