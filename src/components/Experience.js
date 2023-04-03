import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Quality Control Chemist"
              company="Arxada"
              companyLink="https://www.arxada.com/en"
              time="2019-Present"
              address="Conley, GA"
              work="Team lead of 3 other analysts who analyze raw materials, in-process materials, and release test samples in support of compliance with company standards."
            />

            <Details
              position="research Associate"
              company="Research Corporation University of Guam"
              companyLink="https://www.uog.edu/rcuog/index.php"
              time="2016-2019"
              address="Mangilao, GU."
              work="Worked on a team responsible for successfully identifying pro-inflammatory molecules involved in Areca nut carcinogenesis, in concert with University of Hawaii Cancer Center and the NIH."
            />

            <Details
              position="Research Lab Assistant"
              company="PITT Dept. of Biological Sciences"
              companyLink="https://www.biology.pitt.edu/"
              time="2011-2013"
              address="Pittsburgh, PA"
              work="Conducted DNA miniprep (purification) experiments with drosophila DNA with minimal supervision, followed experimental protocols."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
