// "use client";
import { SliceComponentProps } from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { HomepageProject } from "@/app/components/HomepageProject";
import Carousel from "@/app/components/Carousel";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

/**
 * Props for `HomepageProjectsSelect`.
 */
export type HomepageProjectsSelectProps =
  SliceComponentProps<Content.HomepageProjectsSelectSlice>;

/**
 * Component for "HomepageProjectsSelect" Slices.
 */
export default async function HomepageProjectsSelect({
  slice
}: HomepageProjectsSelectProps) {
  // WORKING SLICE USING ASYNC
  const client = createClient();
  const projectsAsync = await Promise.all(
    slice.primary.projectsgroup.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("project", item.project.uid);
      }
    })
  );

  return (
    <>
      {projectsAsync.map(
        (item, index) =>
          item && (
            <HomepageProject item={item} index={index} key={index}>
              <Carousel>
                <SliceZone slices={item.data.slices1} components={components} />
              </Carousel>
            </HomepageProject>
          )
      )}
    </>
  );
}
