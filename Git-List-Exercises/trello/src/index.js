import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const listItems = [
  { id: 1, name: "excercise" },
  { id: 2, name: "walking" },
  { id: 3, name: "coding" },
  { id: 4, name: "meditiation" },
  { id: 5, name: "accountability" },
];

const Trello = () => {
  return (
    <div className="card border-primary bg-light mb-3 rounded-0 container w-25">
      <div className="card-header bg-transparent border-0">Phone Features</div>
      <div className="card-body my-0 p-0">
        <ul className="list-group my-0">
          {listItems.map((item) => (
            <li key={item.id} className="list-group-item my-1">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div class="card-footer bg-transparent border-0">Add a Card ...</div>
    </div>
  );
};

ReactDOM.render(<Trello />, document.querySelector("#root"));
