import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []); 
  return (
    <div>
      <img src="./logo.png" />
      <div className="not_found">
        <h1 className="text-2xl">Oops.. Not found page </h1>
        <Link href="/">
          <a>Home page </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
