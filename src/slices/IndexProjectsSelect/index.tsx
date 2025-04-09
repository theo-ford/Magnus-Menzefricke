import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import GridIndexProject from "@/app/components/GridIndexProject";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-[200px]">
        {projects.map(
          (item, index) =>
            item && (
              <>
                <div className="relative ml-[10px] w-[100%] xl:w-[calc(100vw-50px)]">
                  <div className="absolute grid grid-cols-4 grid-rows-1 gap-[10px] xl:grid-cols-16">
                    <div className="col-span-1 hidden xl:block">
                      <p key={index} className="text-gray-300">
                        {index}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p key={index} className="text-gray-300">
                        {item.data.title}
                      </p>
                    </div>
                    <div className="col-span-2 hidden xl:block">
                      <p key={index} className="text-gray-300">
                        {item.data.service}
                      </p>
                    </div>
                    <div className="col-span-2 hidden xl:block">
                      <p key={index} className="text-gray-300">
                        {item.data.location}
                      </p>
                    </div>
                    <div className="col-span-1 hidden xl:block">
                      <p key={index} className="text-gray-300">
                        {item.data.completion_date}
                      </p>
                    </div>
                    <div className="col-span-2 xl:col-span-8">
                      <p
                        key={index}
                        className="text-gray-300 text-[12px] leading-none"
                      >
                        {item.data.description}
                      </p>
                    </div>
                  </div>

                  <GridIndexProject />
                </div>
              </>
            )
        )}
      </div>
    </section>
  );
};

export default IndexProjectsSelect;
