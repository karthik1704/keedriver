import Link from "next/link";

const BlogAccordian = () => {
  return <>
  <div className='flex flex-col justify-center gap-6 capitalize w-full'>
    <h2 className='text-3xl font-bold'>keedriver article</h2>
    <ul className='w-full flex flex-col justify-center items-start text-lg'>
        <Link className="w-full" href=''><li className='w-full border-b border-gray-300 py-6'>list one</li></Link>
        <Link className="w-full" href=''><li className='w-full border-b border-gray-300 py-6' >list two</li></Link>
        <Link className="w-full" href=''><li className='w-full border-b border-gray-300 py-6'>list three</li></Link>
        <Link className="w-full" href=''> <li className='w-full border-b border-gray-300 py-6'>list four</li></Link>
        <Link className="w-full" href=''><li className='w-full border-b border-gray-300 py-6'>list five</li></Link>
        <Link className="w-full" href=''><li className='w-full py-6'>list six</li></Link>
    </ul>
  </div>
  </>
}


export default BlogAccordian;
