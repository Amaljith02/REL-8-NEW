import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: true,
        end: "+=100%",
        markers: true,
      },
    });

    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      if (i === 0) {
        tl.set(panel, { yPercent: 0 }, 0);
      } else {
        tl.to(
          panel,
          {
            yPercent: -100,
            ease: "none",
          },
          "+=1"
        );
      }
    });
  }, []);

  return (
    <div className="container">
      <section className="panel red">ONE</section>
      <section className="panel orange">TWO</section>
      <section className="panel purple">THREE</section>
      <section className="panel green">FOUR</section>
    </div>
  );
};
export default Index;
