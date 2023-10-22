import { useState } from "react";

interface ListGroupProps {
  listItems: string[];
  listTitle: string;
  onSelectListItem: (listItem: string, listItemIndex: number) => void;
}

function ListGroup({ listItems, listTitle, onSelectListItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{listTitle}</h1>
      {listItems.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {listItems.map((listItem, index) => (
          <li
            key={listItem}
            onClick={() => {
              setSelectedIndex(index);
              onSelectListItem(listItem, index);
            }}
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
