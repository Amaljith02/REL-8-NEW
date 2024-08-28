import React, { useState } from "react";
import navbar from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  const [hamburger, setHamburger] = useState(false);

  const HamburgerHandler = () => {
    setHamburger((prev) => !prev);
  };

  ////Hamburger off for List
  const hambOff = () => {
    setHamburger(false);
  };
  console.log(hamburger);

  return (
    <div>
      <div className={`${navbar.navbar_main_body} `}>
        <div className={`${navbar.navbar_sub_body} container `}>
          <div className={`${navbar.navbar_logo} `}>
            <Image
              src={"/images/rel8-logo.png"}
              alt=""
              width={120}
              height={50}
            />
          </div>
          <ul className={navbar.navbar_list}>
            <li>
              {" "}
              <Link href={"/"}> Features</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}> Blogs</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}> Contact</Link>
            </li>
            <li>
              {" "}
              <Link href={"/"}> Login</Link>
            </li>
            <li>
              {" "}
              <Link
                href={
                  "https://www.figma.com/design/dh4zh8M6NPPQtohPO1q8Iy/Untitled?t=n6HVFd8jjuGHEvQ3-0"
                }
                className={navbar.nav_button}
              >
                {" "}
                REQUEST FOR DEMO{" "}
              </Link>
            </li>
          </ul>
          <div className={navbar.navbar_hamb_main} onClick={HamburgerHandler}>
            <div
              className={
                hamburger == false
                  ? `${navbar.navbar_hamb_line}`
                  : `${navbar.navbar_hamb_line_after}`
              }
            ></div>
            <div
              className={
                hamburger == false
                  ? `${navbar.navbar_hamb_line}`
                  : `${navbar.navbar_hamb_line_after}`
              }
            ></div>
            <div
              className={
                hamburger == false
                  ? `${navbar.navbar_hamb_line}`
                  : `${navbar.navbar_hamb_line_after}`
              }
            ></div>
          </div>
          {hamburger === true ? (
            <ul className={navbar.hamb_navbar_list}>
              <li onClick={hambOff}>
                {" "}
                <Link href={"/"}> Features</Link>
              </li>
              <li onClick={hambOff}>
                {" "}
                <Link href={"/"}> Blogs</Link>
              </li>
              <li onClick={hambOff}>
                {" "}
                <Link href={"/"}> Contact</Link>
              </li>
              <li onClick={hambOff}>
                {" "}
                <Link href={"/"}> Login</Link>
              </li>
              <li onClick={hambOff}>
                {" "}
                <Link
                  href={
                    "https://www.figma.com/design/dh4zh8M6NPPQtohPO1q8Iy/Untitled?t=n6HVFd8jjuGHEvQ3-0"
                  }
                  className={navbar.nav_button}
                >
                  {" "}
                  REQUEST FOR DEMO{" "}
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
