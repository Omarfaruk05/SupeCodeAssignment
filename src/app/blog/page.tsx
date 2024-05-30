/* eslint-disable @next/next/no-img-element */
import CartMotion from "@/components/framerMotion/CartMotion";
import Container from "@/components/shared/Container";
import { getData } from "@/lib/getData";
import React from "react";

interface IBlogs {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}

export default async function BlogPage() {
  const blogs: IBlogs[] = await getData("/public/data.json");

  if (!blogs) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-4xl text-cente">Loading</h1>
      </div>
    );
  }

  return (
    <Container>
      {/* heading  */}
      <h1 className="font-bold text-4xl my-12 dark:text-white">Blog</h1>

      {/* blogs  */}
      {blogs?.map((blog, index) => (
        <div key={blog?.id}>
          <CartMotion delay={index}>
            <div className="hover:shadow-lg hover:dark:shadow-gray-500 p-2 rounded-md md:flex gap-4 mt-8 mb-2 dark:text-white">
              <div className="overflow-hidden">
                <img
                  className="h-full w-full md:w-72 hover:scale-150 transition delay-75 "
                  src={blog.thumbnail}
                  alt="blog_photo"
                />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold">{blog?.title}</h2>
                <div className="flex gap-3 text-xl">
                  <h4>{blog?.date}</h4>
                  <h4>|</h4>
                  <h4 className="text-gray-500">{blog?.author}</h4>
                </div>
                <p>{blog?.description}</p>
              </div>
            </div>
            <hr />
          </CartMotion>
        </div>
      ))}
    </Container>
  );
}
