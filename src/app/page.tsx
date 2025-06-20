// import { type Metadata } from "next";
// import { asText } from "@prismicio/client";
import { createClient } from "@/prismicio";
import Hero from "./components/Hero";
// import ZZ_Hero from "./components/Zz_Hero";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
// import Link from "next/link";
import { Nav } from "./components/Nav";
import HorizontalScroll from "./components/HorizontalScroll";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <Nav />
      <HorizontalScroll>
        <Hero pageData={page.data}></Hero>
        {/* <ZZ_Hero pageData={page.data}></ZZ_Hero> */}
        <SliceZone slices={page.data.slices} components={components} />
      </HorizontalScroll>
    </>
  );
}
