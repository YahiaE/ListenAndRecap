import { Fragment } from "react/jsx-runtime";
import { MouseEvent, ReactNode } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  children: ReactNode[];
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, children, onSelectItem }: Props) {
  let [selectedIdx, setSelectedIdx] = useState(-1);
  const getMsg = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };
  // const getMsg2 = () => {
  //   return items.length === 0 && <p>No items found</p>;
  // };
  const clickHandler = (event: MouseEvent) => console.log(event);
  return (
    <>
      {children[0]}
      {getMsg()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIdx == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIdx(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {children[1]}
    </>
  );
}

export default ListGroup;
