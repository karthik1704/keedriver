import { API_URL } from "@/constants";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog|keedriver",
  description: "This is Blog page for keedriver Next.js",
};

async function getData(slug: any) {
  
  const res = await fetch(`${API_URL}/blogs/${slug}/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("blog data");
    console.log(res);
    console.log(slug);
    console.log(await res.json());
    throw new Error("error");
  }
  const blog = await res.json();
  return blog;
}

const BlogPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = await getData(slug);

  return (
    <>
      <div className="w-full flex flex-col gap-3 justify-center items-center  ">
        <div className="w-full h-80  overflow-hidden md:w-10/12 md:h-auto md:p-5 lg:w-10/12 lg:rounded-lg  xl:w-3/5 ">
          <img
            className="w-full h-full object-cover md:rounded-lg"
            src={data.image}
            alt="profile-pic"
          />
        </div>
        <div className="w-full flex flex-col gap-3 justify-center items-start capitalize p-5 md:w-10/12 lg:w-10/12 xl:w-3/5 ">
          <h2 className="text-2xl font-bold leading-3 p-1">{data.title}</h2>
          <p className="text-lg p-1">{data.description}</p>
          <div className="prose prose-base lg:prose-lg" dangerouslySetInnerHTML={{ __html: data.content }} />

        </div>
      </div>
    </>
  );
};

export default BlogPage;
