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
        <a href={`${relatedProjectsOne.uid}`}>
          <div
            className="
            relative float-left inline-block
            w-[calc(100vw-30px)] md:w-[calc(25vw-22px)] lg:w-[calc(25vw-30px)] xl:w-[calc(25vw-30px)] 
            h-[50vw] md:h-[15vh] lg:h-[15vh] xl:h-[25vh]
            md:ml-[5px] xl:ml-[15px] 
            md:mr-[5px] lg:mr-[5px] xl:mr-[0px]            
            mb-[50px]
            test5"
          >
            <div className="w-[100%] h-[100%] overflow-hidden flex items-center">
              <PrismicNextImage
                field={relatedProjectsOne.data.related_project_image}
                alt=""
              />
            </div>
            <p className="text-gray-400">{relatedProjectsOne.data.title}</p>
          </div>
        </a>
      </>
    );
  } else {
    return <p>No Projects Here</p>;
  }
  // return <p>Hello world</p>;
}
