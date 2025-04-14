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
      <div className="absolute float-left block mt-[10px] mb-[10px] h-auto w-[100%] ">
        <div className="w-[calc(100%-20px)] ml-[10px] border-t-[1px] border-[#d6d6d6] float-left relative opacity-[.3]"></div>

        <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
          <GridIndexProject />
        </div>
        <div className="relative ml-[10px] w-[calc(100vw-20px)]">
          <GridIndexProject />
        </div>

        <div
          key={"project"}
          className="xl:fixed block float-left ml-[10px] w-[calc(100vw-20px)] text-gray-200"
        >
          <div className="absolute grid grid-cols-4 grid-rows-1 gap-[10px] xl:grid-cols-16 w-[calc(100vw-20px)]">
            <div className="col-span-1 hidden xl:block">
              <p key={"index"} className="">
                No.
              </p>
            </div>
            <div className="col-span-2">
              <p key={"title"} className="">
                Project
              </p>
            </div>
            <div className="col-span-2 hidden xl:block">
              <p key={"service"} className="">
                Service
              </p>
            </div>
            <div className="col-span-2 hidden xl:block">
              <p key={"location"} className="">
                Location
              </p>
            </div>
            <div className="col-span-1 hidden xl:block">
              <p key={"date"} className="">
                Date
              </p>
            </div>
            <div className="col-span-2 xl:col-span-8">
              <p key={"description"} className="">
                Description
              </p>
            </div>
          </div>
        </div>
        <div className="relative ml-[10px] w-[calc(100vw-20px)]">
          <GridIndexProject />
        </div>
        <div className="relative mt-[0] z-100 xl:mb-[10px] float-left">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        {/* <div className="border-b-[1px] border-[#d6d6d6] opacity-[] w-[100%] h-[10px] bg-red-800"></div> */}
        <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
          <GridIndexProject />
        </div>
        <div className="relative ml-[10px] w-[calc(100vw-20px)] block xl:hidden">
          <GridIndexProject />
        </div>

        <div className="relative float-left block h-[10px] w-[100%] bg-white  block xl:hidden"></div>
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
