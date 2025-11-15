import React from "react";
import MainLayout from "../components/MainLayout";
import { blogs } from "../data/blogData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <MainLayout className="">
      <div className="px-5 md:px-10 pb-[200px] flex flex-col gap-10 lg:gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white_20 items-end">
          <h1 className="text-h1-sm md:text-h1-md lg:text-h1 mb-2">Blog</h1>
          <div className="lg:py-14 flex lg:justify-end">
            <p className="text-black_60 text-body lg:text-right md:w-2/3 lg:py-14">
              This is the kind of work we live for—{" "}
              <span className="text-black">branding, websites</span>, and
              <span className="text-black"> digital experiences</span> that
              don’t just look great, but deliver real results. Scroll through a
              few of our favorite collaborations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${blog.slug}`} key={index}>
            <div className="bg-white rounded-2xl space-y-6 px-2 pt-2 pb-6" >
              <div className="h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h5 className="text-h5 px-6">{blog.title}</h5>
            </div>         </Link>

          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
