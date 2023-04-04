import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import tool1 from "../../public/images/tools/streamlit.jpg";
import tool2 from "../../public/images/tools/render.jpg";
import tool3 from "../../public/images/tools/fast.jpg";
import tool4 from "../../public/images/tools/scikit.jpg";
import tool5 from "../../public/images/tools/xgboost.png";
import tool6 from "../../public/images/tools/catboost.png";
import tool7 from "../../public/images/tools/lightgbm.png";
import tool8 from "../../public/images/tools/keras.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Tool = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
    </motion.li>
  );
};

const FeaturedTool = ({ img, title, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
    </li>
  );
};

const tools = () => {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Tools Page</title>
        <meta
          name="description"
          content="Browse through Jacques collection of useful data tools."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Useful Data Tools"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedTool
              img={tool1}
              title="Build a data webpage with Python"
              summary="Streamlit turns data scripts into shareable web apps in minutes.
              All in pure Python. No front‑end experience required."
              link="https://streamlit.io/"
            />

            <FeaturedTool
              img={tool2}
              title="Cloud app hosting"
              time="10 min read"
              summary="Render is a unified cloud to build and run all your apps and websites with free TLS
              certificates, a clobal CDN, DDoS protection, private networks, and auto deploy from Git."
              link="https://render.com/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            More Tools
          </h2>
          <ul className="flex flex-col items-center relative">
            <Tool
              title="Fast API"
              img={tool3}
              
              link="https://fastapi.tiangolo.com/"
            />
            <Tool
              title="Scikit-Learn"
              img={tool4}
              
              link="https://scikit-learn.org/stable/index.html"
            />
            <Tool
              title="XG Boost"
              img={tool5}
              
              link="https://xgboost.readthedocs.io/en/stable/"
            />
            <Tool
              title="CatBoost"
              img={tool6}
              
              link="https://catboost.ai/en/docs/"
            />
            <Tool
              title="Light GBM"
              img={tool7}
              
              link="https://lightgbm.readthedocs.io/en/v3.3.2/"
            />
            <Tool
              title="Keras"
            
              img={tool8}
              link="https://keras.io/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default tools;
