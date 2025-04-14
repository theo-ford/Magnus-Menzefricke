import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import GridIndexProject from "@/app/components/GridIndexProject";
// import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `IndexProjectsSelect`.
 */
export type IndexProjectsSelectProps =
  SliceComponentProps<Content.IndexProjectsSelectSlice>;

/**
 * Component for "IndexProjectsSelect" Slices.
 */
const IndexProjectsSelect: FC<IndexProjectsSelectProps> = async ({ slice }) => {
  const client = createClient();
  const projects = await Promise.all(
    slice.primary.projects_group.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("project", item.project.uid);
      }
    })
  );
  return (
    // <section
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
    // >
    <>
      {projects.map(
        (item, index) =>
          item && (
            <div
              key={"project" + index}
              className="relative block float-left ml-[10px] w-[calc(100vw-20px)] text-gray-300 hover:text-gray-400"
            >
              <Link href={`project/${item.uid}`}>
                {/* {console.log(item.uid)} */}
                <div className="absolute grid grid-cols-4 grid-rows-1 gap-[10px] xl:grid-cols-16 xl:w-[100%]">
                  <div className="col-span-1 hidden xl:block">
                    <p key={"index" + index} className="">
                      {index}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p key={"title" + index} className="=">
                      {item.data.title}
                    </p>
                  </div>
                  <div className="col-span-2 hidden xl:block">
                    <p key={"service" + index} className="">
                      {item.data.service}
                    </p>
                  </div>
                  <div className="col-span-2 hidden xl:block">
                    <p key={"location" + index} className="">
                      {item.data.location}
                    </p>
                  </div>
                  <div className="col-span-1 hidden xl:block">
                    <p key={"date" + index} className="">
                      {item.data.completion_date}
                    </p>
                  </div>
                  <div className="col-span-2 xl:col-span-8 line-clamp-3">
                    <p
                      key={"description" + index}
                      className=" text-[12px] xl:text-[16px] leading-none"
                    >
                      {item.data.description}
                    </p>
                  </div>
                </div>

                <GridIndexProject />
              </Link>
            </div>
          )
      )}
    </>

    // </section>
  );
};

export default IndexProjectsSelect;
