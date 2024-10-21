import { useState } from "react";

interface Props {
  onLinkChange: (newLink: string) => void;
}

function InputForLink({ onLinkChange }: Props) {
  let [link, setLink] = useState("");

  const handleSubmit = () => {
    const pattern = new RegExp(
      "^https://(www.youtube.com|youtu.be)/(watch?v=|embed/|v/|.+?v=)?([a-zA-Z0-9_-]{11})$"
    );

    if (pattern.test(link)) {
      onLinkChange(link);
    } else {
      console.log("Invalid Link!");
    }
  };

  return (
    <>
      <input
        type="text"
        id="link-input"
        name="link-input"
        onChange={(event) => setLink(event.target.value)}
      ></input>
      <input type="submit" value="Submit" onClick={handleSubmit}></input>
    </>
  );
}

export default InputForLink;
