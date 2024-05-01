import React from 'react'
import Blogcard from '@/components/ui/blogcard'
import BlogAccordian from '@/components/ui/blog-accordian';
import { BlogCardSmall } from '@/components/ui/blogcard';
import Link from 'next/link';

const blogData = [
{
    id:1,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
},
{
    id:2,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
},
{
    id:3,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
},
{
    id:4,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
},
{
    id:5,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
},
{
    id:6,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
},
{
    id:7,
    date: '01-01-2024',
    image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg',
    title:'blog title',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!'
}
];

export async function getData(){
    
    const res = await fetch('http://devapi.keedriver.com/api/v1/blogs/',{
      headers:{
        'Content-Type':'application/json',
      },
    })
  
  
    if(!res.ok){
      console.log('error')
    }
  
      
  
      const blog = await res.json();
    //   console.log(blog);

  
      return blog;
  }

 export default async function Blog (){
    const blogs = await getData();
    console.log(blogs);
  return (
    <div className='flex items-start justify-evenly p-5'>
        <div className='w-1/2 flex flex-col gap-3'>
        <Link href='/blog/one'>
        <Blogcard/></Link>
        <div className='w-ful grid grid-cols-2 gap-6 items-center justify-between'>
        {
            blogs.map((bd)=>{
                return <BlogCardSmall key={bd.id} blogDate={''} title={bd.title} pic={bd.image} blogDescription={bd.description}   />
            })
        }
        </div>
        </div>
        <div className='w-1/4'>
        <BlogAccordian/>
        </div>
    </div>
  )
}


