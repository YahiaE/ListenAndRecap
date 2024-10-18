import { useState } from "react";

interface Props {
  txt: string;
  color?: "btn btn-primary" | "btn btn-secondary";
}

function Button({ txt, color = "btn btn-primary" }: Props) {
  let [content, setContent] = useState("Primary");
  let [col, setCol] = useState("btn btn-primary");
  return (
    <button
      type="button"
      className={col}
      onClick={() => {
        setContent(txt);
        setCol(color);
      }}
    >
      {content}
    </button>
  );
}

export default Button;
