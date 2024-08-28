import React from "react";
import footer from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div className={footer.footer_main_body}>
      <div className={`${footer.footer_container} container`}>
        <div className={footer.footer_container_img}>
          <Image
            src={"/images/rel8-logo.png"}
            height={185}
            width={300}
            alt=""
          />
        </div>

        <div className={footer.footer_container_uls}>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQS</li>
          </ul>
          <ul>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Upgrade to Rel8 today and improve your organization</li>
            <Link href={"/"} className={footer.footer_container_btn}>
              BOOK A DEMO
            </Link>
          </ul>
        </div>
      </div>
      <span className={footer.footer_container_bottom_border}></span>

      <div className={`${footer.footer__bottom_container} container`}>
        <h4>Copyright 2014. All Rights Reserved.</h4>
        <ul>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
