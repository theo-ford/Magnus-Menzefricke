import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone, PrismicRichText } from "@prismicio/react";

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
      <div className="absolute float-left block m-[15px] xl:m-[30px] mb-[25px] h-auto w-[100%] w-[calc(100vw-30px)] xl:w-[calc(100vw-60px)]">
        <div className="w-[calc(100%)]  float-left relative opacity-[.3]"></div>

        <div className="relative block xl:hidden">
          <GridIndexProject />
        </div>
        <div className="relative block md:hidden">
          <GridIndexProject />
        </div>
        <div className="relative block md:hidden">
          <GridIndexProject />
        </div>
        <div className="relative">
          <GridIndexProject />
        </div>
        <div className="relative">
          <GridIndexProject />
        </div>

        <div
          key={"intro"}
          // className="xl:fixed block float-left text-gray-200 bg-red-800"
          className="absolute float-left text-gray-300 bg-red-800 top-[calc(8.33vh)] md:top-[0px]"
        >
          <div className="absolute grid grid-cols-4 grid-rows-1 gap-[9px] xl:gap-[15px] xl:grid-cols-16 w-[calc(100vw-30px)] xl:w-[calc(100vw-60px)] leading-[100%]">
            <div className="col-span-4 col-start-1 md:col-span-2 md:col-start-3 xl:!col-span-8 xl:!col-start-9 h-[calc(8.33vh*2)] sm:line-clamp-4">
              <PrismicRichText field={page.data.index_introduction_paragraph} />
            </div>
          </div>
        </div>

        <div
          key={"project"}
          // className="xl:fixed block float-left text-gray-200 bg-red-800"
          className="xl:absolute absolute float-left text-gray-300 bg-red-800 "
        >
          <div className="absolute grid grid-cols-4 grid-rows-1 gap-[9px] xl:gap-[15px] xl:grid-cols-16 w-[calc(100vw-30px)] xl:w-[calc(100vw-60px)] leading-[100%]">
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
              <p key={"description"} className="xl:block hidden">
                Description
              </p>
              <p key={"info"} className="block xl:hidden">
                Info
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <GridIndexProject />
        </div>
        <div className="relative z-100 w-[calc(100vw-30px)] xl:w-[calc(100vw-60px)] float-left ">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        {/* <div className="border-b-[1px] border-[#d6d6d6] opacity-[] w-[100%] h-[10px] bg-red-800"></div> */}
        <div className="relative w-[calc(100vw-44px)] block xl:hidden">
          <GridIndexProject />
        </div>
        <div className="relative w-[calc(100vw-44px)] block xl:hidden">
          <GridIndexProject />
        </div>
        <div className="w-[calc(100%)] border-t-[1px] border-[#d6d6d6] float-left relative opacity-[0.6] pb-[5px] xl:pb-[30px]"></div>
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
