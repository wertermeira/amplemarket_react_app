import { ListGroup } from "react-bootstrap";
import ItemTemplate from "./item_template";

export default function ListTemplate ({templates, handleDelete}) {
  return (
    <div className="ListTemplate">
      <h2 className="text-center">List templates</h2>
      <ListGroup>
        {templates.map((item) => (
          <ItemTemplate item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </ListGroup>
    </div>
  );
}