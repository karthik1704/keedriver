import Image from 'next/image';



 const Blogcard = ({blogValues}:any) =>{
  const{title,image,description,date} = blogValues;
      return<>
    <div className='w-full flex flex-col  gap-3 justify-center overflow-hidden'>
    <div className='w-full rounded-lg overflow-hidden'>
      <Image src={image} alt="" width={100} height={100} className='w-full'/>
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