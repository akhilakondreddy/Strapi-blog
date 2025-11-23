import axios from "axios";

export async function getpost() {
  try {
    const res = await axios.get(
      "http://localhost:1337/api/posts?populate=*"
    );

    return res.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
