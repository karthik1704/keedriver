import React from "react";

import Blogcard from "./blogcard";
import BlogAccordian from "./blog-accordian";
import Link from "next/link";
import { API_URL } from "@/constants";

export async function getData() {

  const res = await fetch(`${API_URL}/blogs/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res1 = await fetch(`${API_URL}/blogs/pins/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("error");
  }


  if (!res1.ok) {
    console.log("error");
  }

  const blogs = await res.json();
  const pins = await res1.json();

  //   console.log(blog);

  return { blogs, pins };
}

export default async function Blog() {
  const { blogs, pins } = await getData();
  const { results } = blogs;
  const { results: resPins } = pins;
  console.log(resPins)
  return (
    <div className="flex flex-col items-start justify-center md:flex-row md:justify-evenly p-5 ">
      <div className="flex flex-col w-full  md:w-1/2 md:gap-0 lg:grid lg:grid-cols-2 lg:gap-6">
        {results.map((bd, index) => {
          return (
            <Link key={bd.id}
              className={`${
                index === 0 ? "lg:grid col-span-2 row-span-2" : ""
              } mb-5`}
              href={`/blog/${bd.slug}`}
            >
              <Blogcard key={bd.id} blogValues={bd} />
            </Link>
          );
        })}
      </div>

      <div className="w-full md:w-1/4">
        <BlogAccordian pinsData={resPins} />
      </div>
    </div>
  );
}
