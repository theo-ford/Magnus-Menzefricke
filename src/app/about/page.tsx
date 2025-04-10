import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";

import Grid16 from "../components/Grid16";
import { PrismicNextImage } from "@prismicio/next";
import { Nav } from "../components/Nav";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("about");

  return (
    <>
      <Nav />

      {/* <div className="relative z-[-40] top--[0] xl:w-[calc(100vw-20px)] m-[10px]">
        <Grid16 />
      </div>
      <div className="relative z-[-40] top--[0] xl:w-[calc(100vw-20px)] m-[10px]">
        <Grid16 />
      </div> */}

      <>
        <div className="relative float-left h-[calc(100vh)] w-[calc(100vw-10px)] mb-[10px] xl:w-[calc(100vw-20px)]  xl:h-[calc(100vh-20px)]">
          <div className="h-[calc(100vh-20px)] w-[100%] absolute top-[0] z-50 xl:w-[calc(100vw-10px)] m-[10px]">
            <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-8 xl:w-[calc(100%-20px)]">
              <div className="col-span-2 col-start-1 row-start-2 xl:col-span-8 xl:col-start-1 xl:row-start-3 xl:mt-[8vh]">
                <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px] font-bold ">
                  Biography
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-3 xl:col-span-7 xl:col-start-1 xl:row-start-4">
                <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[24px] ">
                  <PrismicRichText field={page.data.biography} />
                </h5>
              </div>
              <div className="col-span-2 col-start-1 row-start-6 xl:col-span-2 xl:col-start-9 xl:row-start-3 xl:mt-[8vh]">
                <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px] font-bold ">
                  Contact
                </h5>
              </div>
              <div className="col-span-2 col-start-1 row-start-7 xl:col-span-2 xl:col-start-9 xl:row-start-4">
                <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px] ">
                  {page.data.email}
                  <br></br>
                  {page.data.phone}
                  <br></br>
                  {page.data.website_url}
                  <br></br>
                </h5>
              </div>
              <div className="col-span-2 col-start-1 row-start-8 xl:col-span-2 xl:col-start-12 xl:row-start-3 xl:mt-[8vh]">
                <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px] font-bold ">
                  Social
                </h5>
              </div>
              <div className="col-span-2 col-start-1 row-start-9 xl:col-span-2 xl:col-start-12 xl:row-start-4">
                <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px] ">
                  Linked In
                  <br></br>
                  Blue Sky
                  <br></br>
                  Instagram
                  <br></br>
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-12 xl:col-span-8 xl:col-start-1 xl:row-start-8">
                <h5 className="text-[16px] p-[0px] m-[0px] ml-[-0px] leading-none tracking-[0px] xl:text-[9.3vw]  font-bold  xl:tracking-[-10px] xl:mt-[-25px]">
                  Services
                </h5>
              </div>
            </div>
          </div>
          <div className="relative xl:w-[calc(100vw-24px)] m-[10px]">
            <Grid16 />
          </div>
        </div>
      </>
      <>
        <div className="relative float-left h-[calc(100vh)] w-[calc(100vw-10px)] mb-[10px] xl:w-[calc(100vw-20px)]  xl:h-[calc(100vh-20px)]">
          <div className="h-[calc(100vh-20px)] w-[100%] absolute top-[0] z-50 xl:w-[calc(100vw-10px)] m-[10px]">
            <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-8 xl:w-[calc(100%-20px)]">
              {page.data.service.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="col-span-4  xl:col-span-4 xl:row-start-3"
                  >
                    <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px] font-bold ">
                      {item.title}
                    </h5>
                  </div>
                  <div
                    key={"description" + index}
                    className="col-span-4 xl:col-span-4 xl:row-start-4"
                  >
                    <h5 className="text-[16px] p-[0px] m-[0px] leading-none xl:text-[16px]">
                      <PrismicRichText field={item.description} />
                    </h5>
                  </div>
                  <div
                    key={"img" + index}
                    className="col-span-2 row-span-2 xl:col-span-4 xl:row-start-6 xl:row-span-3 overflow-hidden"
                  >
                    <PrismicNextImage field={item.image} alt="" />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="relative xl:w-[calc(100vw-24px)] m-[10px]">
            <Grid16 />
          </div>
        </div>
      </>
      <></>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      {/* <p>{page.data.email}</p> */}
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
