import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let listItems = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];
  let listTitle = "List Title";

  const handleSelectListItem = (listItem: string, listItemIndex: number) => {
    console.log(`Selected item '${listItem}' with index ${listItemIndex}.`);
  };

  return (
    <div>
      <ListGroup
        listItems={listItems}
        listTitle={listTitle}
        onSelectListItem={handleSelectListItem}
      />
    </div>
  );
}

export default App;
