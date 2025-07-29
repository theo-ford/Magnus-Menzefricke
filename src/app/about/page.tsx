import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";

import Grid16 from "../components/Grid16";
// import { PrismicNextImage } from "@prismicio/next";
import { Nav } from "../components/Nav";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("about");

  return (
    <>
      <Nav />
      <div className="absolute z-[100] block float-left mt-[15px] ml-[15px] xl:ml-[30px] xl:mt-[30px] w-[calc(100vw-30px)] xl:w-[calc(100vw-30px)] h-[calc(100vh)] md:h-[calc(100vh-60px)] xl:h-[calc(100vh-60px)]">
        <div className="w-[calc(100%)] h-[calc(100%-7px)] float-left grid grid-cols-4 grid-rows-12 xl:grid-rows-8 relative gap-x-[15px] gap-y-[0px] xl:h-[calc((100vh-60px))] xl:grid-cols-16 xl:w-[calc(100%)]">
          <h5 className="text-[16px] md:text-[18px] xl:text-[24px] p-[0px] m-[0px] leading-[115%] col-span-4 row-start-2 md:col-span-7 xl:col-span-6 md:row-start-2 xl:row-start-2">
            <PrismicRichText field={page.data.biography} />
            <span className="">
              <br></br>
              Services:
              <br></br>
              <br></br>
              {page.data.service.map((item, index) => {
                return (
                  <div key={index}>
                    <PrismicRichText field={item.description} />
                  </div>
                );
              })}
              <br></br>
              Contact:
              <br></br>
              <br></br>
              {page.data.email}
              <br></br>
              {page.data.phone}
              <br></br>
              {page.data.website_url}
              <br></br>
            </span>
          </h5>

          {/* <h5 className="text-[18px] md:text-[24px] p-[0px] m-[0px] leading-[115%] col-span-4 row-start-6 xl:col-span-8  md:row-start-4 xl:row-start-4 xl:mt-[-5.5vh] ">
            Services:
            <br></br>
            <br></br>
            {page.data.service.map((item, index) => {
              return (
                <div key={index}>
                  <PrismicRichText field={item.description} />
                </div>
              );
            })}
          </h5> */}

          {/* <h5 className="text-[18px] md:text-[24px] p-[0px] m-[0px] leading-[115%] col-span-4 row-start-15  xl:col-span-8 md:row-start- xl:row-start-8">
            {page.data.email}
            <br></br>
            {page.data.phone}
            <br></br>
            {page.data.website_url}
            <br></br>
          </h5> */}
        </div>
      </div>
      <div className="absolute top-[0] left-[0]  w-[calc(100vw-30px)] xl:w-[calc(100vw-60px)] ml-[15px] mt-[15px] xl:mt-[30px] xl:ml-[30px] h-[auto] xl:h-[calc(100vh-60px)] mb-[15px]">
        <Grid16 />
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about");

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
