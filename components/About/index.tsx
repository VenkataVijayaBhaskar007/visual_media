"use client";

import { motion } from "framer-motion";
import { useSpring } from 'react-spring';
import MyGallery from "./Demo";
// import Page from "./Demo";



const About = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });

  return (
    <>
{/* <Page/> */}
{/* <div className="relative flex overflow-x-hidden">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>
</div> */}

<motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
         
    className="animate_left"
  >
<div id="Gallery" className="flex items-center justify-center">
      <h2 className="text-center mb-6 text-2xl font-bold text-black dark:text-white xl:text-3xl 2xl:text-4xl  ">
  <span className="text-content  nowraps">Visual Media Gallery</span>
</h2>


</div>
</motion.div>
<motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
         
    className="animate_left"
  >
<MyGallery/>
</motion.div>

<section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
       
          
<motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
         
    className="animate_left"
  >      

<div className="flex items-center justify-center">
      <h2 className="text-center mb-6 text-2xl font-bold text-black dark:text-white xl:text-3xl 2xl:text-4xl  ">
  <span className="text-content  nowraps">Our Clients</span>
</h2>


</div>
</motion.div>

       <div className="logos" >
               <div className="logos-slide" >
              
       
       
           <img src="./images/clients/1.png" alt="client-1 logo image" />
       
       
       
           <img src="./images/clients/2.png" alt="client-2 logo image" />
       
       
       
           <img src="./images/clients/3.png" alt="client-3 logo image" />
       
       
       
           <img src="./images/clients/4.png" alt="client-4 logo image" />
       
       
       
           <img src="./images/clients/5.png" alt="client-5 logo image" />
       
       
       
           <img src="./images/clients/6.png" alt="client-6 logo image" />
       
       
       
           <img src="./images/clients/7.png" alt="client-7 logo image" />
       
       
       
           <img src="./images/clients/8.png" alt="client-8 logo image" />
       
       
       
           <img src="./images/clients/9.png" alt="client-9 logo image" />
       
       
       
       
           <img src="./images/clients/10.png" alt="client-10 logo image" />
       
       
       
       
           <img src="./images/clients/11.png" alt="client-11 logo image" />
       
       
       
       
           <img src="./images/clients/12.png" alt="client-12 logo image" />
       
       
       
       
           <img src="./images/clients/13.png" alt="client-13 logo image" />
       
       
       
       
           <img src="./images/clients/14.png" alt="client-14 logo image" />
       
       
       
       
           <img src="./images/clients/15.png" alt="client-15 logo image" />
       
       
       
       
           <img src="./images/clients/16.png" alt="client-16 logo image" />
       
       
       
       
           <img src="./images/clients/17.png" alt="client-17 logo image" />
       
       
       
       
           <img src="./images/clients/18.png" alt="client-18 logo image" />
       
       
       
       
           <img src="./images/clients/19.png" alt="client-19 logo image" />
       
       
       
       
           <img src="./images/clients/20.png" alt="client-20 logo image" />
       
       
       
       
           <img src="./images/clients/21.png" alt="client-21 logo image" />
       
       
       
       
           <img src="./images/clients/22.png" alt="client-22 logo image" />
       
       
       
       
           <img src="./images/clients/23.png" alt="client-23 logo image" />
       
       
       
       
           <img src="./images/clients/24.png" alt="client-24 logo image" />
       
       
       
       
           <img src="./images/clients/25.png" alt="client-25 logo image" />
       
       
       
       
           <img src="./images/clients/26.png" alt="client-26 logo image" />
       
       
       
       
           <img src="./images/clients/27.png" alt="client-27 logo image" />
       
       
       
       
           <img src="./images/clients/28.png" alt="client-28 logo image" />
       
       
       
       
           <img src="./images/clients/29.png" alt="client-29 logo image" />
       
       
       
       
           <img src="./images/clients/30.png" alt="client-30 logo image" />
       
       
       
       
           <img src="./images/clients/31.png" alt="client-31 logo image" />
       
       
       
       
           <img src="./images/clients/32.png" alt="client-32 logo image" />
       
       
       
       
           <img src="./images/clients/33.png" alt="client-33 logo image" />
       
       
       
       
           <img src="./images/clients/34.png" alt="client-34 logo image" />
       
       
       
       
               
         </div>
       
        
       </div>
       
       </section>
{/* 
<section>
<div className="relative bg-white ">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  sm:static">
     
    <div className="max-auto aboutsec px-4 ">
        <div className="flex flex-wrap ">
        <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
         
    className="animate_left"
  >














    
<div className="lg:order-1 lg:w-1/2 " >
     
      <h2 className="text-with-circle background-circle  text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
        <span className="text-content">Street Photography</span>
      </h2>
      <h2 className=" mb-1 text-2xl font-regular text-gray-500 dark:text-white">
        <span className="text-content">Capturing the Soul of the Streets</span>
      </h2>
      <div className="px-3">
        <p>
        Experience the authentic vibe of urban life captured in every frame, where each alley, every face, and every fleeting moment narrates a unique story. Immerse yourself in the art of candid storytelling as our lens reveals the poetry hidden in the ordinary. Dive into the dynamic rhythm of the streets, where every shot is a symphony of life's spontaneous moments. Join us in a gallery that celebrates the spirit, diversity, and untold tales found within the vibrant tapestry of urban landscapes
        </p>
        </div>
    </div>
  </motion.div>
  </div>
  </div>


        <div className="pr-90">
          <div className="mt-10">
           
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

</>
);
};

export default About;