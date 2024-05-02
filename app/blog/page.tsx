import React from "react";
import Blogcard from "./blogcard";
import BlogAccordian from "./blog-accordian";;
import Link from "next/link";

const blogData = [
  {
    id: 1,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
  {
    id: 2,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
  {
    id: 3,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
  {
    id: 4,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
  {
    id: 5,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
  {
    id: 6,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
  {
    id: 7,
    date: "01-01-2024",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
    title: "blog title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!",
  },
];

export async function getData() {
  const res = await fetch("http://devapi.keedriver.com/api/v1/blogs/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res1 = await fetch("http://devapi.keedriver.com/api/v1/blogs/pins/", {
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
  return (
    <div className="flex flex-col items-start justify-center md:flex-row md:justify-evenly p-5 ">
      <div className="flex flex-col w-full  md:w-1/2 md:gap-0 lg:grid lg:grid-cols-2 lg:gap-6">
        {results.map((bd, index) => {
          return (
            <Link
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
        <BlogAccordian />
      </div>
    </div>
  );
}
