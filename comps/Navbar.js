import Link from "next/link";
import React from "react";
import style from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className={`${style.heading} text-2xl text-center border`}>
          Nav list
        </h1>
      </div>
      <div className="flex justify-evenly w-2/4">
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a className={style.paragraph}> About </a>
        </Link>
        <Link href="/contact">
          <a> Contact </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
