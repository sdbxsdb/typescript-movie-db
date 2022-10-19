import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="bg-zinc-800 flex flex-col text-white h-screen w-full items-center justify-center">
      <p>This page doesn&apos;t exist</p>
      <Link href="/">Go back</Link>
    </div>
  );
};

export default PageNotFound;
