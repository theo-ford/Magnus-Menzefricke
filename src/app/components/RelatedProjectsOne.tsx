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
        {/* <div className="col-span-4 row-span-4 overflow-hidden flex items-center md:row-span-2 ">
          <a href={`${relatedProjectsOne.uid}`}>
            <div className=" ">
              <PrismicNextImage
                field={relatedProjectsOne.data.related_project_image}
                alt=""
              />
              <br></br>
            </div>
          </a>
          <p className="text-gray-300 mt-[-20px]">
            {relatedProjectsOne.data.title}
          </p>
        </div> */}
        <a href={`${relatedProjectsOne.uid}`}>
          <div
            className="
            relative float-left inline-block
            w-[calc(100vw-44px)] md:w-[calc(25vw-22px)] lg:w-[calc(25vw-30px)] xl:w-[calc(25vw-30px)] 
            h-[50vw] md:h-[15vh] lg:h-[20vh] xl:h-[25vh]
            md:ml-[11px] xl:ml-[15px]            
            mb-[50px]"
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
