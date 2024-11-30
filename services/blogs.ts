"use server";

import { API_URL } from "@/constants";

export async function getBlogs() {
  const res = await fetch(`${API_URL}/blogs/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  const blogs = await res.json();

  //   console.log(blog);

  return blogs;
}

export async function getBlog(slug: string) {
  
    const res = await fetch(`${API_URL}/blogs/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
    
      throw new Error("Something went wrong!");
    }
    const blog = await res.json();
    return blog;
  }

export async function getBlogPins() {
  const res = await fetch(`${API_URL}/blogs/pins/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  const pins = await res.json();

  return pins;
}
