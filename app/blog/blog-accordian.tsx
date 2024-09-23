import Link from "next/link";

const BlogAccordian = ({pinsData}) => {
  return <>
  <div className='flex flex-col justify-center gap-6 capitalize w-full'>
    <h2 className='text-3xl text-rose-600 font-bold'>keedriver article</h2>
    <ul className='w-full flex flex-col justify-center items-start text-lg'>
      {
        pinsData.map((pd)=>{
          return <Link key={pd.id} className="w-full" href={`/blog/${pd.slug}`}><li className='w-full border-b border-gray-300 py-6'>{pd.title}</li></Link>
        })
      }
    </ul>
  </div>
  </>
}


export default BlogAccordian;
