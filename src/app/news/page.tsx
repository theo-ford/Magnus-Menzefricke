import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import GridNews from "../components/GridNews";
import { PrismicNextImage } from "@prismicio/next";
import HoriztonalScrollNews from "../components/HorizontalScrollNews";
import GridNewsMobileNavSpacer from "../components/GridNewsMobileNavSpacer";
import { Nav } from "../components/Nav";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("news");

  return (
    <>
      {/* <NavMobile /> */}
      <Nav />

      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      <div className="ml-[9px] xl:ml-[0px] overflow-x-hidden xl:overflow-x-scrol ">
        <HoriztonalScrollNews>
          <GridNewsMobileNavSpacer />
          {/* <div className="hidden xl:block xl:h-[100vh] bg-red-800 w-[15px] relative"></div> */}
          {page.data.news_item.map((item, index) => (
            <>
              <div
                className="relative float-left h-[calc(83.33vh-0px)] xl:h-[100vh] xl:ml-[15px] "
                key={index}
              >
                {/* <div className="absolute z-[100] grid grid-cols-4 grid-rows-9 xl:grid-rows-8 h-[calc(83.33vh-22px)] xl:h-[calc(100vh-60px)] w-[calc(100vw-42px)] xl:w-[calc(25vw-15px)] ml-[12px] xl:ml-[15px] gap-x-[11px] xl:gap-x-[15px]  mt-[22px] xl:mt-[30px] text-gray-300"> */}
                <div className="absolute z-[100] h-[calc(83.33vh-22px)] xl:h-[calc(100vh-60px)] w-[calc(100vw-42px)] xl:w-[calc(25vw-15px)] grid grid-cols-4 grid-rows-9 xl:grid-rows-8   gap-x-[11px] xl:gap-x-[15px]  mt-[22px] xl:mt-[30px] text-gray-300">
                  <div
                    key={"title" + index}
                    className="col-span-4 row-span-1 row-start-1 mt-[-5px] xl:row-start-2 xl:mt-[9vh]"
                  >
                    <p>{item.date}</p>
                    <p className="text-[22px] hidden xl:block">{item.title}</p>
                  </div>
                  <div className="col-span-4 row-span-1 row-start-2 mt-[-15px] xl:row-start-2 xl:mt-[9vh] xl:hidden">
                    <p className="text-[22px]">{item.title}</p>
                  </div>
                  <div className="col-span-4 row-span-3 row-start-3 overflow-hidden xl:row-start-4 xl:row-span-2 mt-[-7px]">
                    <PrismicNextImage field={item.image} alt="" />
                  </div>
                  <div
                    key={"body" + index}
                    className="col-span-4 row-span-2 row-start-7 mt-[-5px] xl:row-start-7"
                  >
                    <PrismicRichText field={item.body_text} />
                  </div>
                </div>

                <GridNews />
              </div>
            </>
          ))}
        </HoriztonalScrollNews>
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("news");

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
