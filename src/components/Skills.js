import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
              py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
              lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
              xs:text-dark xs:dark:text-light xs:font-bold
              "
      whileHover={{ scale:1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
              p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
              "
          whileHover={{ scale: 1.05 }}
        >
          Python
        </motion.div>

        <Skill name="Pandas" x="-20vw" y="2vw" />

        <Skill name="Machine Learning" x="-5vw" y="-10vw" />
        <Skill name="SQL" x="15vw" y="0vw" />
        <Skill name="Fast API" x="10vw" y="20svw" />
        <Skill name="Web Scrapping" x="-15vw" y="10svw" />
        <Skill name="Computer Vision" x="-35vw" y="5svw" />
        <Skill name="Logistic Regression" x="35vw" y="10svw" />
        <Skill name="Linear Regression" x="30vw" y="-15svw" />
        <Skill name="KNN" x="-20vw" y="-8svw" />
        <Skill name="Random Forest" x="-35vw" y="-13svw" />
        <Skill name="XG Boost" x="-8vw" y="18svw" />
        <Skill name="Cat Boost" x="30vw" y="2svw" />
        <Skill name="Light GBM" x="14vw" y="12svw" />
        <Skill name="SVM" x="14vw" y="-20svw" />
        <Skill name="Clustering" x="1vw" y="-15svw" />
        <Skill name="EDA" x="20vw" y="6vw" />
        <Skill name="Tableau" x="0vw" y="12vw" />
        <Skill name="Scikit-Learn" x="-20vw" y="-15vw" />
        <Skill name="Time Series" x="15vw" y="-12vw" />
        <Skill name="Github" x="-35vw" y="-5vw" />
        <Skill name="Streamlit" x="32vw" y="-5vw" />
        <Skill name="Statistics" x="-6vw" y="-20vw" />
        <Skill name="Deep Learning" x="-25vw" y="18vw" />
        <Skill name="Keras/Tensorflow" x="28vw" y="18vw" />

      </div>
    </>
  );
};

export default Skills;
