import React from "react";
import Link from "next/link";
import { getAllFiles } from "../lib/getContents";

function page() {
  const posts = getAllFiles();
  return (
    <>
      <div className="text-center  mt-40 ">
        <Link className="border p-4 rounded-2xl hover:bg-amber-50 hover:text-slate-950 transition-all 300 ease-in-out" href={"/services"} >Services  </Link>
        <div>
          {posts.map((post) => (
            <div key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;



