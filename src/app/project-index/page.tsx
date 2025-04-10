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
      {/* <div className="fixed z-100">
        <p className="font-bold text-[22px] tracking-[-1px] m-[10px] mt-[1px] text-gray-300">
          <span className="">Menu / </span>
          <span className="opacity-50"> Index</span>
        </p>
      </div> */}
      <Nav />
      <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
        <GridIndexProject />
      </div>
      <div className="relative ml-[10px] w-[calc(100vw-20px)]">
        <GridIndexProject />
      </div>

      <div
        key={"project"}
        className="fixed block float-left ml-[10px] w-[calc(100vw-20px)] "
      >
        <div className="absolute grid grid-cols-4 grid-rows-1 gap-[10px] xl:grid-cols-16 w-[100%]">
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
      <div className="relative ml-[10px] w-[calc(100vw-20px)]">
        <GridIndexProject />
      </div>

      <SliceZone slices={page.data.slices} components={components} />
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
