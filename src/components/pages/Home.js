import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import Page from "../shared/Page";
import Section from "../shared/Section";

export default function Home() {
  const [postContent, setPostContent] = useState("");

  const fetchMd = async () => {
    const response = await import("../../assets/text/test.md");
    const content = await axios.get(response.default);
    setPostContent(content.data);
  };

  useEffect(() => fetchMd(), []);
  return (
    <Page name="home" className="flex col">
      <Section name="Fish">
        {postContent ? <Markdown>{postContent}</Markdown> : <h3>Loading...</h3>}
      </Section>
    </Page>
  );
}
