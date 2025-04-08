import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import HomepageProjects from "../components/HomepageProjects";
import Hero from "../components/Hero";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  // const projects = page.data.homepage_projects_group.map((item, index) => {
  //   // if (isFilled.contentRelationship(item.project) && item.project.uid) {
  //   //   return client.getByUID("project", item.project.uid);
  //   // }
  //   return item;
  // });

  // const projects2 = await Promise.all(
  //   page.data.homepage_projects_group.map((item) => {
  //     if (isFilled.contentRelationship(item.project) && item.project.uid) {
  //       return client.getByUID("project", item.project.uid);
  //     }
  //   })
  // );

  return (
    <>
      {/* Static Group on Homepage - can't get it to return the image slices within projects */}
      {/* {projects2.map(
        (item, index) =>
          item && (
            <>
              <p key={index} className="text-base  leading-[110%]">
                {item.data.title}
              </p>
              <GridScale />
              <div></div>
              <SliceZone slices={item.data.slices1} components={components} />
            </>
          )
      )} */}
      {/* HomepageProjectsSelect */}
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <div className="">
        <div className="fixed z-100">
          <p className="">
            <span className="">Menu /</span>
            <span className="">Portfolio</span>
          </p>
        </div>
        <HomepageProjects>
          <Hero pageData={page.data}></Hero>
          <SliceZone slices={page.data.slices} components={components} />
        </HomepageProjects>
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title)
        ? page.data.meta_title
        : undefined,
      description: isFilled.keyText(page.data.meta_description)
        ? page.data.meta_description
        : undefined,
      images: isFilled.image(page.data.meta_image)
        ? [asImageSrc(page.data.meta_image)]
        : undefined
    }
  };
}
