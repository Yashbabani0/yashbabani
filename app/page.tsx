import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import FeaturedProjects from "@/components/home/featuredProjects";
import Games from "@/components/home/games";
import Hero from "@/components/home/hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Games />
      <About />
      <Contact />
    </div>
  );
}
