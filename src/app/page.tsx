"use client";

import About from "@/components/About";
import Biology from "@/components/Biology";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AOS from "aos" 
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay:100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
    }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Biology />
      <Contact />
      <About />
    </main>
  );
}
