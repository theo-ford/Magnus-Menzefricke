// import { type Metadata } from "next";
// import { asText } from "@prismicio/client";
import { createClient } from "@/prismicio";
import HomepageProjects from "./components/HomepageProjects";
import Hero from "./components/Hero";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Link from "next/link";

export default async function Home() {
  // const client = createClient();
  // const page = await client.getByUID("page", "home");
  const client = createClient();
  const page = await client.getSingle("homepage");
  // const page = await client.getByUID("homepage", "homepage");
  // const page = await client.getByUID("page", "homepage");

  return (
    <>
      <div className="fixed z-100">
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300">
          <span className="">Menu / </span>
          <span className="opacity-50">
            {" "}
            <Link href="/"> Portfolio /</Link>{" "}
          </span>
          <span className="opacity-50">
            {" "}
            <Link href="/index"> Index</Link>{" "}
          </span>
          <span className="opacity-50">
            {" "}
            <Link href="/about">/ About</Link>
          </span>
          <span className="opacity-50">
            {" "}
            <Link href="/news">/ News</Link>
          </span>
        </p>
      </div>
      <div className="fixed z-100 right-0">
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300">
          <span className="">Pause</span>
        </p>
      </div>
      <HomepageProjects>
        <Hero pageData={page.data}></Hero>
        <SliceZone slices={page.data.slices} components={components} />
      </HomepageProjects>
    </>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const home = await client.getByUID("page", "home");
//   // const home = await client.getByUID("homepage", "homepage");

//   return {
//     title: asText(home.data.title),
//     description: home.data.meta_description,
//     openGraph: {
//       title: home.data.meta_title ?? undefined,
//       images: [{ url: home.data.meta_image.url ?? "" }]
//     }
//   };
// }
