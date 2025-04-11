// import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { NavProjects } from "@/app/components/NavProjects";

// type Params = { uid: string };

// type tParams = Promise<{ uid: string} >;

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

// export async function generateMetadata({
//   params
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const client = createClient();
//   const page = await client
//     .getByUID("project", params.uid)
//     .catch(() => notFound());

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description
//   };
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return (
    <>
      <NavProjects projectTitle={page.data.title} />
      <div className="w-[100vw] h-[calc(91.63vh+20px)] bg-red-800 relative float-left xl:h-[87.5vh+20px]">
        <div className="h-[calc(91.63vh)] w-[calc(100vw-20px)] absolute top-[0] z-50 xl:w-[calc(100vw-20px)] m-[10px] xl:h-[87.5vh+20px]">
          <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-8 xl:w-[calc(100%)] text-white">
            <div className="col-span-2 col-start-1 row-start-6 xl:col-span-8 xl:col-start-1 xl:row-start-3">
              <h5 className="text-[64px] tracking-[-2px] p-[0px] m-[0px] leading-[80%] xl:text-[9.5vw] xl:mt-[-28px] font-bold xl:tracking-[-10px]">
                {page.data.title}
              </h5>
            </div>
            <div className="col-span-4 col-start-1 row-start-12  xl:col-span-2 xl:col-start-1 xl:row-start-8">
              <div className="absolute bottom-0 xl:relative">
                <p className="text-[12px] p-[0px] m-[0px] leading-none">
                  Net Internal Area: {page.data.net_internal_area}
                  <br></br>
                  Completion: {page.data.completion_date}
                  <br></br>
                  Client: {page.data.client}
                  <br></br>
                </p>
              </div>
            </div>
            <div className="col-span-2 col-start-1 row-start-12 xl:col-span-2 xl:col-start-3 xl:row-start-8 hidden xl:inline">
              <p className="text-[12px] p-[0px] m-[0px] leading-none">
                Design Architects:<br></br> {page.data.design_architects}
                <br></br>
                <br></br>
                Technical Architects:<br></br> {page.data.technical_architects}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute float-left w-[100vw] h-[calc(91.63vh+20px)] xl:h-[87.5vh+20px] overflow-hidden  flex items-center">
          <PrismicNextImage
            field={page.data.hero_image}
            alt=""
            className="h-[100%] w-auto xl:width-[100%] xl:h-auto "
          />
        </div>
      </div>
      {/* <p>Hello world {page.data.title}</p> */}
      <div className="relative float-left w-[100vw]">
        <SliceZone slices={page.data.slices3} components={components} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("project", {
    predicates: [prismic.filter.not("my.page.uid", "home")]
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
