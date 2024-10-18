import { useState } from "react";

function InputForLink() {
  let [link, setLink] = useState("");
  return (
    <>
      <input
        type="text"
        id="link-input"
        name="link-input"
        onChange={(event) => setLink(event.target.value)}
      ></input>
      <input
        type="submit"
        value="Submit"
        onClick={() => {
          //   send link to backend to be processed
        }}
      ></input>
    </>
  );
}

export default InputForLink;
