import { type Metadata } from "next";

import { asText } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
// import HomepageScale from "./components/HomepageScale";
import HomepageProjects from "./components/HomepageProjects";
import Hero from "./components/Hero";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
// import HorizontalTwo from "./components/HorizontalTwo";
// import HorizontalThree from "./components/HorizontalThree";

// import { components } from "@/slices";

// import HorizontalScroll from "./components/HorizontalScroll";

export default async function Home() {
  // const client = createClient();
  // const home = await client.getByUID("page", "home");
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <HomepageProjects>
        <Hero pageData={page.data}></Hero>
        <SliceZone slices={page.data.slices} components={components} />
      </HomepageProjects>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }]
    }
  };
}
