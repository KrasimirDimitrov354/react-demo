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

  return (
    <div>
      <ListGroup listItems={listItems} listTitle={listTitle} />
    </div>
  );
}

export default App;
