import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/index";
export default function RootLayout({ children }) {
  return (
    <React.Fragment>
      <div>
        <Navbar>
          <Head>
            <title>REL8</title>
            <meta name="description" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Navbar>
        <main> {children}</main>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}
