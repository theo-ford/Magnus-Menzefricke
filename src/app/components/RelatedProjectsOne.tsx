import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";

export default async function RelatedProjectsOne({ data }) {
  const client = createClient();

  if (isFilled.contentRelationship(data)) {
    console.log("hello world");
    const relatedProjectsOne = await client.getByUID("project", data.uid, {
      fetchLinks: ["title"]
    });
    return (
      <a href={`${relatedProjectsOne.uid}`}>{relatedProjectsOne.data.title}</a>
    );
  } else {
    return <p>No Projects Here</p>;
  }
  // return <p>Hello world</p>;
}
