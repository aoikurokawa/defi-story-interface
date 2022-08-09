import React from "react";

import Link from "next/link";
import { format } from "date-fns";

import { Pagination, IPaginationProps } from "./Pagination";
import { BlogItems } from "../utils/Content";

export type IBlogGalleryProps = {
  posts: BlogItems[];
};

const BlogGallery = (props: IBlogGalleryProps) => {
  const formatUtcDate = (date: string) => {
    const formatDate = new Date(date);

    return `${formatDate.getFullYear()} ${formatDate.toLocaleString("en-us", {
      month: "short",
    })} ${formatDate.getDate()}`;
  };

  return (
    <>
      <ul>
        {props.posts.map((elt) => (
          <li key={elt.id} className="mb-11">
            <div className="">{formatUtcDate(elt.created_at)}</div>
            <Link href="/blog/[slug]" as={`/blog/${elt.id}`} className="">
              <a className="hover:underline">
                <h2 className="text-3xl cursor-pointer">{elt.title}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    /> */}
    </>
  );
};

export { BlogGallery };
