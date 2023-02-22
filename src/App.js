import "./App.css";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [postContent, setPostContent] = useState("");

  const fetchMd = async () => {
    const response = await import("./assets/text/test.md");
    const content = await axios.get(response.default);
    setPostContent(content.data);
  };

  useEffect(() => fetchMd(), []);

  return (
    <div className="App">
      {postContent ? <Markdown>{postContent}</Markdown> : <h3>Loading...</h3>}
    </div>
  );
}
