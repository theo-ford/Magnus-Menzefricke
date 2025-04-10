// import { type Metadata } from "next";
// import { asText } from "@prismicio/client";
import { createClient } from "@/prismicio";
import HomepageProjects from "./components/HomepageProjects";
import Hero from "./components/Hero";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
// import Link from "next/link";
import { Nav } from "./components/Nav";

export default async function Home() {
  // const client = createClient();
  // const page = await client.getByUID("page", "home");
  const client = createClient();
  const page = await client.getSingle("homepage");
  // const page = await client.getByUID("homepage", "homepage");
  // const page = await client.getByUID("page", "homepage");

  return (
    <>
      {/* <div className="fixed z-100">
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300 hover:*:inline cursor-pointer hover:[&>*:nth-child(2)]:hidden">
          <span className="">Menu / </span>
          <span className="">
            {" "}
            <Link href="/" className="opacity-50  hover:opacity-100">
              {" "}
              Portfolio{" "}
            </Link>{" "}
          </span>
          <span className="hidden">
            {" "}
            <Link
              href="/project-index"
              className="opacity-50 hover:opacity-100"
            >
              {" "}
              Index
            </Link>{" "}
          </span>
          <span className="hidden">
            {" "}
            <span className="opacity-50">/</span>
            <Link href="/about" className="opacity-50 hover:opacity-100">
              {" "}
              About
            </Link>
          </span>
          <span className="hidden">
            {" "}
            <span className="opacity-50">/</span>
            <Link href="/news" className="opacity-50  hover:opacity-100">
              {" "}
              News
            </Link>
          </span>
        </p>
      </div>
      <div className="fixed z-100 right-0">
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300">
          <span className="">Pause</span>
        </p>
      </div> */}
      <Nav />
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
