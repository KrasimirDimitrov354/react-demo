import { useState } from "react";

function ListGroup() {
  let listItems = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Title</h1>
      {listItems.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {listItems.map((listItem, index) => (
          <li
            key={listItem}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
          >
            {listItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
