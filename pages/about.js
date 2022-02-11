import Link from "next/link";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-red-300 p-5">
      <div className="container  mx-auto px-4">
        <h1 className="text-2xl text-center border"> About pages </h1>
        <Image src="/logo.png" width={50} height={50} />

        <Link href="/login">
          <a className=""> Login </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
