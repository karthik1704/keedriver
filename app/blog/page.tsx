import Blogcard from "./blogcard";
import BlogAccordian from "./blog-accordian";
import Link from "next/link";
import { getBlogPins, getBlogs } from "@/services/blogs";


export default async function Blog() {
  const blogs= await getBlogs();
  const pins= await getBlogPins();
  const { results } = blogs;
  const { results: resPins } = pins;
 
  return (
    <div className="bg-stone-100 flex flex-col items-start justify-center md:flex-row md:justify-evenly p-5 ">
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
