import React from 'react'

const Blogcard = () => {
  return <>
  <div className='w-full flex flex-col gap-3 justify-center overflow-hidden'>
    <div className='w-ful rounded-lg overflow-hidden'>
        <img className='w-full' src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg" alt="profile-pic" />
    </div>
    <div className='flex flex-col gap-6 justify-center items-start capitalize'>
        <span className='text-lg p-1'>29-04-2024</span>
        <h2 className='text-5xl font-bold leading-3 p-1'>tittle</h2>
        <p className='text-lg p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!</p>

    </div>

  </div>

  </>
}

export default Blogcard;


export const BlogCardSmall = ({blogDescription,blogDate,title,pic}) =>{
    return<>
    <div className='w-full flex flex-col gap-3 justify-center overflow-hidden'>
    <div className='w-ful rounded-lg overflow-hidden'>
        <img className='w-full' src={pic} alt="profile-pic" />
    </div>
    <div className='flex flex-col gap-3 justify-center items-start capitalize'>
        <span className='text-lg p-1'>{blogDate}</span>
        <h2 className='text-2xl font-bold leading-3 p-1'>{title}</h2>
        <p className='text-lg p-1'>{blogDescription}</p>

    </div>

  </div>
    </>
}