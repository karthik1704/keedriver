
// const Blogcard = () => {
//   return <>
//   <div className='w-full flex flex-col gap-3 justify-center overflow-hidden'>
//     <div className='w-ful rounded-lg overflow-hidden'>
//         <img className='w-full' src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg" alt="profile-pic" />
//     </div>
//     <div className='flex flex-col gap-6 justify-center items-start capitalize'>
//         <span className='text-lg p-1'>29-04-2024</span>
//         <h2 className='text-5xl font-bold leading-3 p-1'>tittle</h2>
//         <p className='text-lg p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic. Nobis consequatur ipsa obcaecati doloremque aliquam nihil neque porro alias? Quibusdam est asperiores similique velit reiciendis non dicta, et optio!</p>

//     </div>

//   </div>

//   </>
// }


import img from "@/app/services/image/driver_hire.jpeg";
import Image from 'next/image';



 const Blogcard = ({blogValues}:any) =>{
  const{title,image,description,date} = blogValues;
      return<>
    <div className='w-full flex flex-col  gap-3 justify-center overflow-hidden'>
    <div className='w-full rounded-lg overflow-hidden'>
      <Image src={img} alt=""/>
        {/* <img className='w-full' src={img} alt="profile-pic" /> */}
    </div>
    <div className='flex flex-col gap-3 justify-center items-start capitalize'>
        <span className='text-lg p-1'>{date}</span>
        <h2 className='text-2xl text-rose-600 font-bold leading-3 p-1'>{title}</h2>
        <p className='text-lg p-1 line-clamp-3'>{description}</p>

    </div>

  </div>
    </>
}

export default Blogcard;