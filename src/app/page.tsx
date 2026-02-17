import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="text-center  mt-40 ">
    <Link className="border p-4 rounded-2xl hover:bg-amber-50 hover:text-slate-950 transition-all 300 ease-in-out" href={"/services"} >Services  </Link>
      </div>
    </>
  );
}

export default page;
