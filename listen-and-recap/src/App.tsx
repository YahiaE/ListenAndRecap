import InputForLink from "./components/InputForLink";
import MediaPlayer from "./components/MediaPlayer";
import { useState } from "react";
function App() {
  const [link, setLink] = useState("");

  const handleLinkChange = (newLink: string) => {
    setLink(newLink.substring(newLink.indexOf("=") + 1));
  };

  return (
    <div>
      <InputForLink onLinkChange={handleLinkChange}></InputForLink>
      <MediaPlayer data={link}></MediaPlayer>
    </div>
  );
}

export default App;
