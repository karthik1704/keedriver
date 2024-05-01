import { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Blog from "../page";

export const metadata: Metadata ={
    title:'Blog|keedriver',
    description:'This is Blog page for keedriver Next.js'
}


async function getData(slug : any) {
    const cookieStore = cookies();
    const access = cookieStore.get("access");

    const res = await fetch('url',{
        headers:{
            "Content-Type" : "application/json",
            Authorization:`Bearer ${access?.value}`,
        },
    });

    if(!res.ok){
        redirect('/login')
    }
    const blog = await res.json();
    return blog;
}

const BlogPage = async({
    params :{slug},
}:{
    params : {slug:string};
}) =>{
    // const data:Data = await getData(slug);

    return <>
   <h1>hi</h1>

    </>
}
export default BlogPage;