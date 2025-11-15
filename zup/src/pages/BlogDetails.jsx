import React from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import { blogs } from "../data/blogData";
const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h2 className="text-center py-20">Blog not found</h2>;
  }
  return (
    <MainLayout>
      <article className="pb-[200px] space-y-10 max-w-[700px] m-5 lg:m-auto">
        <div className="space-y-10 lg:space-y-20">
          <div className="space-y-4">
          <span className="caption text-black_60">{blog.date}</span>
          <h2 className="text-h2-md lg:text-h2 text-black ">{blog.title}</h2>
          <div className="flex gap-2">
            {blog.category.map((item, i) => (
              <span key={i} className="badge">
                {item}
              </span>
            ))}
          </div></div>
          <img src={blog.img} alt="" className="h-[270px] lg:h-[454px] w-full rounded-2xl" />
          <p className="text-body text-black_60">{blog.text}</p>
          {blog.article.map((artcl, i) => (
            <div key={i}>
              <h3 className="text-h3-md lg:text-h3 text-black">{artcl.question}</h3>
              <h5 className="text-h5 text-black">{artcl.subtitle1}</h5>

              <p className="text-body text-black_60">{artcl.p}</p>
              <p className="text-body text-black_60">{artcl.p1}</p>
              <h5 className="text-h5 text-black">{artcl.subtitle2}</h5>
              <p className="text-body text-black_60">{artcl.p2}</p>
            </div>
          ))}
        </div>
      </article>
    </MainLayout>
  );
};

export default BlogDetails;
