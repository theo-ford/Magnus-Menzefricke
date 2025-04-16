import { Metadata } from "next";
import { isFilled, asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import GridNews from "../components/GridNews";
import { PrismicNextImage } from "@prismicio/next";
import HomepageProjects from "../components/HomepageProjects";
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
      <HomepageProjects>
        <GridNewsMobileNavSpacer />
        {page.data.news_item.map((item, index) => (
          <>
            <div className="relative float-left">
              <div className="absolute grid grid-cols-4 grid-rows-9 h-[calc(83.33vh-15px)] w-[calc(100vw-20px)] ml-[10px] gap-x-[10px] xl:w-[25vw] xl:h-[calc(100vh-20px)] xl:mt-[10px] xl:grid-rows-8 text-gray-300">
                <div
                  key={"title" + index}
                  className="col-span-4 row-span-2 row-start-1 mt-[5px] xl:row-start-2 xl:mt-[9vh]"
                >
                  <p>{item.date}</p>
                  <p className="text-[22px]">{item.title}</p>
                </div>
                <div
                  className="col-span-4 row-span-3 row-start-3 overflow-hidden xl:row-start-4 xl:row-span-2
              "
                >
                  <PrismicNextImage field={item.image} alt="" />
                </div>
                <div
                  key={"body" + index}
                  className="col-span-4 row-span-2 row-start-7 xl:row-start-7"
                >
                  <PrismicRichText field={item.body_text} />
                </div>
              </div>

              <GridNews />
            </div>
          </>
        ))}
      </HomepageProjects>
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
