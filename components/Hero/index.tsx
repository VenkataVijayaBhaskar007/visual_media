"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import "./style.css"

const Hero = () => {
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
<section id="1" className="my-10 " style={{ marginTop: "8rem" }}>
  {/* First Card */}
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
        
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-custom-gradientsection"
  >
    {/* Image on the Left */}
    <div className="lg:order-1 lg:w-1/2 lg:pr-4 ">
      <img
        src="./images/about/about-dark-01.png" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-2 text-left full-text" >
     
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
        <span className="text-content">Visual media</span>
      </h2>
      <div className="px-3">
        <p>
        Atoms Digital Solutions presents Visual Media, a specialized wing offering exceptional photography and videography services. Our passionate and talented team covers a wide range of events, from birthdays and weddings to corporate gatherings. We go beyond the ordinary to capture precious moments, ensuring lasting memories through our creative and remarkable work...
        </p>
      </div>
      <div className="flex space-x-8 ml-2 ">
      {/* Left Section */}
      <div className="space-y-4 mt-4 lg:text-nowrap">
  {/* Content 1 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Stunning Visuals Capture
    </div>
  </div>

  {/* Content 2 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Creative Composition Mastery
    </div>
  </div>

  {/* Content 3 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Artistic Storytelling Frames
    </div>
  </div>

  {/* Content 4 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      High-Quality Image Editing
    </div>
  </div>
</div>


      {/* Right Section */}
      <div className="space-y-4 mt-4 lg:text-nowrap">
  {/* Content 5 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Elegant Lighting Techniques
    </div>
  </div>

  {/* Content 6 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Candid Moment Capturing
    </div>
  </div>

  {/* Content 7 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Expressive Portraiture Skills
    </div>
  </div>

  {/* Content 8 */}
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
    </div>
    <div className="text-black text-base font-normal md:whitespace-nowrap leading-relaxed">
      Dynamic Post-Processing
    </div>
  </div>
</div>

      
    </div>
    <div className="px-4 flex flexshape md:flex-column">
        <a href="tel:9346866605"
          className="mt-8 mb-10 md-w-1/2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out mr-4"
        >
          Get Started
        </a>
        <button
          className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
        >
          See pricing plans
        </button>
      </div>
    </div>
  </motion.div>
</section>
<section id="services" className=" container py-8    bg-white font-poppins dark:bg-btndark" style={{marginTop:"-3rem"}}>
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














    
<div className="lg:order-2 lg:w-1/1 px-4" >
     
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
        <span className="text-content">Visual Media Services</span>
      </h2>
      <div className="px-3">
        <p>
        At Atoms Visual media services, our comprehensive suite of services revolves around three core pillars: web development, app development, and UI/UX designing. In the realm of web development, our skilled team harnesses the latest technologies to create dynamic and scalable solutions tailored to our clients' unique needs. Whether it's building robust web applications or crafting engaging mobile apps, our app development expertise ensures seamless and user-friendly experiences across platforms. Complementing these technical strengths is our proficiency in UI/UX designing, where we prioritize aesthetics and user interaction. Our commitment to delivering high-quality software solutions is unwavering, and we take pride in contributing to the success of businesses through our versatile and innovative services...
        </p>
        </div>
    </div>
  </motion.div>
  </div>
  </div>
</section>




<section> 
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
            transition={{ duration: 1, delay: 0.9 }}
            className="animate_left lg:w-1/1 px-4"
          >
  <div className="container max-w-full mx-auto py-12 px-6 justify-center">
   



   

    <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
      <div className="relative  flex flex-col md:flex-row items-center ">
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4 ">
          <div className="bg-white text-black rounded-lg shadow-inner  overflow-hidden hover:-translate-y-5 ">
            <div className="block text-center text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 ">
              <h1 className="text-2xl text-blue-500font-medium uppercase p-3 pb-0 text-center tracking-wide ">
               Base plan
              </h1>
              <h2 className="text-lg text-gray-500 text-center pb-6">₹8000</h2>

              Visual Media offers everything needed to run an online business at scale. Get in touch for details.
            </div>

            <div className="flex flex-wrap mt-3 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path
			d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
			></path>
			<polyline
			points="22 4 12 14.01 9 11.01"
			></polyline>
		</svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">graphic design</span	>
</li>
<li className="flex items-center">
	<div
	className=" rounded-full p-2 fill-current text-green-700"
	>
	<svg
	className="w-6 h-6 align-middle"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	>
	<path
	d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
	></path>
	<polyline
	points="22 4 12 14.01 9 11.01"
	></polyline>
</svg>
</div>
<span className="text-gray-700 text-lg ml-3"
>poster design</span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	<path
	d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
	></path>
	<polyline
	points="22 4 12 14.01 9 11.01"
	></polyline>
</svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">logo design</span>
                </li>
              </ul>
            </div>
            <div className=" flex items-center p-8  uppercase">
              <button className="mt-3 text-lg font-semibold 
	bg-custom-gradient w-full text-white rounded-lg 
	px-1 py-3 block shadow-xl hover:bg-gray-700 ">
choose plan
</button>

            </div>
          </div>
        </div>
        <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-custom-gradient rounded-lg shadow-lg  hover:-translate-y-5  ">
          <div className="text-2xl  leading-none rounded-t-lg bg-white text-blue-500 font-semibold uppercase py-4 text-center tracking-wide ">
            Most Popular
          </div>
          <div className="block text-center text-sm sm:text-md max-w-sm mx-auto mt-2 text-white text-bold px-8 lg:px-6">
            <h1 className="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
              Expert
            </h1>
            <h2 className="text-sm text-white text-center pb-6"><span className="text-3xl">₹10000</span> /mo</h2>

            <p className="text-sm font-normal">Visual Media offers everything needed to run an online business at scale. Get in touch for details.</p>
          </div>
          <div className="flex items-center mt-3 px-1">
  <ul>
    <li className="flex items-center">
      <div className="rounded-full p-2 fill-current text-green-700">
        <svg
          className="w-6 h-6 align-middle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <span className="text-gray-700 text-lg ml-3">premium poster</span>
    </li>
    <li className="flex items-center">
      <div className="rounded-full p-2 fill-current text-green-700">
        <svg
          className="w-6 h-6 align-middle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <span className="text-gray-700 text-lg ml-3">adds and SEO</span>
    </li>
    <li className="flex items-center">
      <div className="rounded-full p-2 fill-current text-green-700">
        <svg
          className="w-6 h-6 align-middle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <span className="text-gray-700 text-lg  ml-3">graphic design</span>
    </li>
  </ul>
</div>


          <div className=" flex items-center p-8  uppercase">
            <button className="mt-3 text-lg font-semibold button-custom
	bg-white w-full text-blue-600 rounded-lg 
	px-1 py-3 block shadow-xl ">
choose plan
</button>
          </div>
        </div>
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
          <div className="bg-white text-black rounded-lg shadow-inner  overflow-hidden hover:-translate-y-5">
            <div className="block text-center text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h1 className="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Premium
              </h1>
              <h2 className="text-lg text-gray-500 text-center pb-6">₹20000 /mo</h2>

              Visual Media offers everything needed to run an online business at scale. Get in touch for details.
            </div>
            <div className="flex flex-wrap mt-3 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path
			d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
			></path>
			<polyline
			points="22 4 12 14.01 9 11.01"
			></polyline>
		</svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">premium poster</span>
</li>
<li className="flex items-center">
	<div
	className=" rounded-full p-2 fill-current text-green-700"
	>
	<svg
	className="w-6 h-6 align-middle"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	>
	<path
	d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
	></path>
	<polyline
	points="22 4 12 14.01 9 11.01"
	></polyline>
</svg>
</div>
<span className="text-gray-700 text-lg ml-3"
>adds and SEO</span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg className="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	<path
	d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
	></path>
	<polyline
	points="22 4 12 14.01 9 11.01"
	></polyline>
</svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">graphic design</span>
                </li>
              </ul>
            </div>

            <div className=" flex items-center p-8  uppercase">
              <button className="mt-3 text-lg font-semibold 
	bg-custom-gradient w-full text-white rounded-lg 
	px-1 py-3 block shadow-xl hover:bg-gray-700">
choose plan
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </motion.div>
</section>



















    </>
  );
};

export default Hero;
