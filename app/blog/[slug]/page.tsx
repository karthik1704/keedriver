import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog|keedriver",
  description: "This is Blog page for keedriver Next.js",
};

async function getData(slug: any) {
  
  const res = await fetch(`http://devapi.keedriver.com/api/v1/blogs/${slug}/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("blog data");
  }
  const blog = await res.json();
  return blog;
}

const BlogPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = await getData(slug);

  return (
    <>
      <div className="w-full flex flex-col gap-3 justify-center items-center  ">
        <div className="w-full h-80  overflow-hidden md:w-10/12 md:h-auto md:p-5 lg:w-10/12 lg:rounded-lg  xl:w-4/5 ">
          <img
            className="w-full h-full object-cover md:rounded-lg"
            src={data.image}
            alt="profile-pic"
          />
        </div>
        <div className="w-full flex flex-col gap-3 justify-center items-start capitalize p-5 md:w-10/12 lg:w-1/2 xl:w-4/5 ">
          <h2 className="text-2xl font-bold leading-3 p-1">{data.title}</h2>
          <p className="text-lg p-1">{data.description}</p>
          <div className="prose prose-base lg:prose-lg" dangerouslySetInnerHTML={{ __html: data.content }} />

        </div>
      </div>
    </>
  );
};

export default BlogPage;
