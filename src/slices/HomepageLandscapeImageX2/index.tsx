import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { SwiperSlide } from "swiper/react";

/**
 * Props for `HomepageLandscapeImageX2`.
 */
export type HomepageLandscapeImageX2Props =
  SliceComponentProps<Content.HomepageLandscapeImageX2Slice>;

/**
 * Component for "HomepageLandscapeImageX2" Slices.
 */
const HomepageLandscapeImageX2: FC<HomepageLandscapeImageX2Props> = ({
  slice
}) => {
  return (
    <>
      <>
        <div className="h-[calc(100vh-20px)] w-[100vw] m-[10px] absolute top-[0]">
          <div className="w-[calc(100%-20px)] h-[calc(100%)] float-left grid grid-cols-4 grid-rows-12 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-12 xl:grid-rows-8 xl:w-[calc(100%-20px)]"></div>
          <div className="col-span-2 col-start-1 row-start-6 bg-green-800">
            <PrismicNextImage field={slice.primary.image_1} alt="" />
          </div>
          <div className="col-span-2 col-start-3 row-start-6 bg-green-800">
            <PrismicNextImage field={slice.primary.image_2} alt="" />
          </div>
        </div>
      </>
    </>

    // <section
    //   data-slice-type={slice.slice_type}
    //   data-slice-variation={slice.variation}
    // >
    //   {/* Placeholder component for homepage_landscape_image_x2 (variation:{" "}
    //   {slice.variation}) Slices */}

    //       <div className="col-span-2 col-start-1 row-start-6 bg-green-800">
    //         <PrismicNextImage field={slice.primary.image_1} alt="" />
    //       </div>
    //       <div className="col-span-2 col-start-3 row-start-6 bg-green-800">
    //         <PrismicNextImage field={slice.primary.image_2} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomepageLandscapeImageX2;
