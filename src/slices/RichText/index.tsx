import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
  type JSXMapSerializer
} from "@prismicio/react";
// import styles from "./index.module.css";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  }
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <div className="float-left relative h-auto w-[calc(100%-20px)] mt-[-4px] ml-[10px] xl:h-auto xl:mt-[4px] mt-[16.66vh] xl:mt-[25vh]">
      <div className="float-left grid grid-cols-4 grid-rows-1 relative gap-x-[10px] gap-y-[0px] xl:grid-cols-16 w-[calc(100%)]">
        <div className="col-span-4 col-start-1 row-start-1 row-span-1 xl:col-span-8 xl:col-start-1 flex items-center">
          <div className="leading-none text-[18px] xl:text-[24px] m-[0] p-[0]">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichText;
