import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import FeaturedProjects from "@/components/home/featuredProjects";
import Hero from "@/components/home/hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
    </div>
  );
}
