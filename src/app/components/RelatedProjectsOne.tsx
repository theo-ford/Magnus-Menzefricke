import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export default async function RelatedProjectsOne({ data }) {
  const client = createClient();

  if (isFilled.contentRelationship(data)) {
    console.log("hello world");
    const relatedProjectsOne = await client.getByUID("project", data.uid, {
      fetchLinks: ["title"]
    });
    return (
      <>
        <div className="col-span-4 row-span-4 overflow-hidden flex items-center xl:row-span-2 ">
          <a href={`${relatedProjectsOne.uid}`}>
            <div className=" ">
              <PrismicNextImage
                field={relatedProjectsOne.data.related_project_image}
                alt=""
              />
              <br></br>
            </div>
          </a>
        </div>
        <div className="col-span-4 row-span-1 xl:row-start-3">
          <p className="text-gray-300">{relatedProjectsOne.data.title}</p>
        </div>
      </>
    );
  } else {
    return <p>No Projects Here</p>;
  }
  // return <p>Hello world</p>;
}
