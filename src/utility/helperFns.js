import axios from "../apis/axios";

export async function fetchMarkdown(url) {
  const response = await import(url);
  const content = await axios.get(response.default);
  return content.data;
}
