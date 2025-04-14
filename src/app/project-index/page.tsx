import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import GridIndexProject from "../components/GridIndexProject";
import { Nav } from "../components/Nav";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("index");

  return (
    <>
      <Nav />
      <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
        <GridIndexProject />
      </div>
      <div className="relative ml-[10px] w-[calc(100vw-20px)]">
        <GridIndexProject />
      </div>

      <div
        key={"project"}
        className="xl:fixed block float-left ml-[10px] w-[calc(100vw-20px)] "
      >
        <div className="absolute grid grid-cols-4 grid-rows-1 gap-[10px] xl:grid-cols-16 w-[calc(100vw-20px)]">
          <div className="col-span-1 hidden xl:block">
            <p key={"index"} className="text-gray-300">
              No.
            </p>
          </div>
          <div className="col-span-2">
            <p key={"title"} className="text-gray-300">
              Project
            </p>
          </div>
          <div className="col-span-2 hidden xl:block">
            <p key={"service"} className="text-gray-300">
              Service
            </p>
          </div>
          <div className="col-span-2 hidden xl:block">
            <p key={"location"} className="text-gray-300">
              Location
            </p>
          </div>
          <div className="col-span-1 hidden xl:block">
            <p key={"date"} className="text-gray-300">
              Date
            </p>
          </div>
          <div className="col-span-2 xl:col-span-8">
            <p
              key={"description"}
              className="text-gray-300 text-[16px] xl:text-[16px] leading-none"
            >
              Description
            </p>
          </div>
        </div>
      </div>
      <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
        <GridIndexProject />
      </div>
      <div className=" mt-[0] xl:mt-[calc(12.5vh)] xl:absolute z-100">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}

      <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
        <GridIndexProject />
      </div>
      <div className="relative ml-[10px] w-[calc(100vw-20px)] ">
        <GridIndexProject />
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("index");

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
