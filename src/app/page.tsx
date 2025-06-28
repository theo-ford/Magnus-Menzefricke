// import { type Metadata } from "next";
// import { asText } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import Hero from "./components/Hero";
// import ZZ_Hero from "./components/Zz_Hero";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
// import Link from "next/link";
import { Nav } from "./components/Nav";
import HorizontalScroll from "./components/HorizontalScroll_v1";
import { HomepageProject } from "./components/HomepageProject";
import Carousel from "./components/Carousel";
import { ScrollSnapWrapper } from "./components/ScrollSnapWrapper";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const projectsAsync = await Promise.all(
    page.data.homepage_projects_group.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("project", item.project.uid);
      }
    })
  );

  return (
    <>
      <Nav />
      <HorizontalScroll>
        <Hero pageData={page.data}></Hero>
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
        {projectsAsync.map(
          (item, index) =>
            item && (
              <HomepageProject item={item} index={index} key={index}>
                <Carousel>
                  <SliceZone
                    slices={item.data.slices1}
                    components={components}
                  />
                </Carousel>
              </HomepageProject>
            )
        )}
      </HorizontalScroll>
    </>
  );
}
