import React from "react";

const List = ({ list }) => {
  return (
    <ul className="list-group">
      {list.map((element, index) => (
        <li className="list-group-item border-0 color" key={element.id}>
          <div className="row">
            <b className="px-2">
              <span className="text-color-li">{index + 1}. </span>
            </b>
            <div className="col px-0">
              <div>
                {element.title}
                <span className="text-color-li">{element.siteAddress}</span>
              </div>
              <div>
                <a href="#">
                  {element.articleDetails.points} points by{" "}
                  {element.articleDetails.author} {element.articleDetails.time}{" "}
                  |hide| {element.articleDetails.comment} comments
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
