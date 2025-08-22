// import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { NavProjects } from "@/app/components/NavProjects";
import RelatedProjectsOne from "@/app/components/RelatedProjectsOne";

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

  console.log("Related: " + page.data.related_projects);
  const RelatedProjects = () => {
    return (
      <>
        <div
          className="
        relative float-left inline-block 
        mt-[20vh] 
        mb-[20vh] 
        ml-[15px] md:ml-[10px] xl:ml-[15px]"
        >
          <p className="ml-[0px] md:ml-[5px] xl:ml-[15px] text-[20px]">
            Related Projects
          </p>
          <RelatedProjectsOne data={page.data.related_project_1} />
          <RelatedProjectsOne data={page.data.related_project_2} />
        </div>
      </>
    );
  };

  const ProjectType2 = () => {
    if (page.data.project_type_2 === "design_management") {
      return (
        <p className="text-[16px] p-[0px] m-[0px] mb-[0px!important] leading-[120%]">
          Net Internal Area: {page.data.net_internal_area}
          <br></br>
          Construction Value: {page.data.construction_value}
          <br></br>
          Client: {page.data.client}
          <br></br>
          <br></br>
          Role: {page.data.role}
          <br></br>
          Design: {page.data.design_architects}
          <br></br>
          Tech: {page.data.technical_architects}
          <br></br>
        </p>
      );
    } else if (page.data.project_type_2 === "architecture") {
      return (
        <p className="text-[16px] p-[0px] m-[0px] mb-[0px!important] leading-[120%]">
          Net Internal Area: {page.data.net_internal_area}
          <br></br>
          Construction Value: {page.data.construction_value}
          <br></br>
          Client: {page.data.client}
          <br></br>
          <br></br>
          Role: {page.data.role}
          <br></br>
        </p>
      );
    } else if (page.data.project_type_2 === "masterplanning") {
      return (
        <p className="text-[16px] p-[0px] m-[0px] mb-[0px!important] leading-[120%]">
          Gross External Area: {page.data.gross_external_area}
          <br></br>
          Site Area: {page.data.site_area}
          <br></br>
          Client: {page.data.client}
          <br></br>
          <br></br>
          <br></br>
          Role: {page.data.role}
          <br></br>
        </p>
      );
    }
  };

  console.log("PROJECT TYPE 2: " + page.data.project_type_2);
  console.log("Role: " + page.data.role);

  return (
    <>
      <NavProjects projectTitle={page.data.title} />
      <div className="">
        <div className="w-[100vw] h-[calc(91.63vh+20px)] relative float-left xl:h-[87.5vh+20px] overflow-hidden">
          <div className="w-[calc(100%-30px)] xl:w-[calc(100%-60px)] h-[calc(91.63vh)] xl:h-[calc(100%-30px)] absolute top-[0] z-50  m-[15px] xl:m-[30px]">
            <div
              className={`w-[calc(100%)] xl:w-[calc(100%)] h-[calc(91.63vh)] xl:h-[calc(100%-30px)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 xl:grid-rows-8   ${page.data.hero_text_color === "White" ? "text-white" : "text-black"} `}
            >
              <div className="col-span-4 col-start-1 row-start-6 md:col-span-3 lg:col-span-3 xl:col-span-8 xl:col-start-1 xl:row-start-3">
                <h5
                  className="
                text-[8vh] xl:text-[9.5vw]
                tracking-[-0.5vh] md:tracking-[-0.6vh] lg:tracking-[-4px] xl:tracking-[-10px]
                p-[0px] 
                ml-[-5px] xl:ml-[-4px]
                leading-[80%]                  
                xl:mt-[-28px] 
                font-bold"
                >
                  {page.data.title}
                </h5>
              </div>
              <div className="col-span-4 col-start-1 row-start-9  xl:col-span-2 xl:col-start-1 xl:row-start-8 test4">
                <div className="xl:relative">
                  <h5 className="text-[18px] p-[0px] m-[0px] mt-[-3px] leading-none xl:text-[16px] w-[calc(100%+40px)]">
                    Location: {page.data.location}
                    <br></br>
                    Date: {page.data.completion_date}
                  </h5>
                </div>
              </div>
              <div
                className="
                  col-span-4 xl:col-span-4
                  col-start-1 xl:col-start-4
                  row-start-10 xl:row-span-1 
                  xl:row-start-8 xl:inline
                  test3"
              >
                <ProjectType2 />
              </div>
            </div>
          </div>
          <div className="w-[calc(100vw)] overflow-x-hidden">
            <div className="absolute float-left w-[calc(100vw+0px)] h-[calc(91.63vh+30px)] xl:h-[calc(100vh-30px)] overflow-hidden  flex items-center  justify-center min-h-[600px] sm:h-[calc(91.63vh+20px)]">
              <PrismicNextImage
                field={page.data.hero_image_desktop}
                alt=""
                className="hidden xl:inline  xl:w-[100%] xl:h-auto"
              />
            </div>
            <div className="absolute float-left w-[calc(100vw+10px)] h-[calc(91.63vh+30px)] xl:h-[calc(100vh-30px)] overflow-hidden flex items-center  justify-center  md:min-h-[600px] sm:h-[calc(91.63vh+20px)]">
              <PrismicNextImage
                field={page.data.hero_image_mobile_ipad}
                alt=""
                className="block xl:hidden h-[100%] w-[calc(100%)] max-w-none w-auto sm:h-[calc(180vh)]"
              />
            </div>
          </div>
        </div>
        <div className="relative float-left w-[calc(100vw-30px)] xl:w-[calc(100vw-60px)]">
          <SliceZone slices={page.data.slices3} components={components} />
        </div>
        {page.data.related_projects ? <RelatedProjects /> : ""}
      </div>
    </>
  );
}

// export async function generateStaticParams() {
//   const client = createClient();

//   /**
//    * Query all Documents from the API, except the homepage.
//    */
//   const pages = await client.getAllByType("project", {
//     predicates: [prismic.filter.not("my.page.uid", "home")]
//   });

//   /**
//    * Define a path for every Document.
//    */
//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
