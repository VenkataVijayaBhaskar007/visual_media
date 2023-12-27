import { Metadata } from "next";
import Hero from "@/components/Hero";
//  import Brands from "@/components/Brands";
// import Feature from "@/components/Features";
import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
// import Integration from "@/components/Integration";

import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
// import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
 import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  title: "Visual Media",
  description: "This is Home page",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* <Feature /> */}
      <About />
     
      {/* <FeaturesTab /> */}
      {/* {/* <FunFact /> */}
      {/* <Integration />  */}
      
      {/* <Brands /> */}
      
      <Testimonial />
     
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
     
      {/* <FAQ /> */}
      <CTA />
    </main>
  );
}
