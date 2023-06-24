import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/ice4.jpeg";
import project2 from "../../public/images/projects/megaline_plus.jpg";
import project3 from "../../public/images/projects/sure1.jpeg";
import project4 from "../../public/images/projects/sweet1.jpeg";
import project5 from "../../public/images/projects/spotify1.jpg";
import project6 from "../../public/images/projects/cars1.jpg";
import project7 from "../../public/images/projects/beta_bank.jpg";
import project8 from "../../public/images/projects/rusty_bargain.jpg";
import project9 from "../../public/images/projects/film_junky.jpg";
import project10 from "../../public/images/projects/interconnect.jpg";
import project11 from "../../public/images/projects/zuber.jpg";
import project12 from "../../public/images/projects/tinder.jpg";
import project13 from "../../public/images/projects/manga.jpg";
import project14 from "../../public/images/projects/fast_food.jpg";
import project15 from "../../public/images/projects/breast_cancer.jpg";
import project16 from "../../public/images/projects/yachay.jpg";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="EDA and Machine Learning"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="NLP and Neural Networks"
                title="Yachay AI"
                summary="We trained a neural network to predict geolocation based on Tweets as part of Yachay AI internship."
                img={project16}
                link="https://jodiambra.github.io/Yachay.ai/"
                github="https://github.com/jodiambra/Yachay.ai/tree/main"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Exploratory Data Analysis"
                title="ICE Retail"
                summary="We conducted EDA to determine a profitable strategy in North America, which entails selling the next big Call of Duty or GTA game on the PS4."
                img={project1}
                link="https://jodiambra.github.io/ICE-Retail-EDA/"
                github="https://github.com/jodiambra/ICE-Retail-EDA"
              />
            </div>
          
            <div className="col-span-12">
              <FeaturedProject
                type="Machine Learning"
                title="Megaline Plus Plan Recommendations"
                summary="We analyzed subscriber behavior on a legacy plan, to accurately recommended one of Megaline’s newer plans: Smart or Ultra."
                img={project2}
                link="https://jodiambra.github.io/Megaline-Plan-Recommendations/"
                github="https://github.com/jodiambra/Megaline-Plan-Recommendations"
              />
            </div>  

            <div className="col-span-12">
              <FeaturedProject
                type="Machine Learning"
                title="Sure Tomorrow Insurance Benefits Predictions"
                summary="We provided a very accurate model to predict whether a customer will, or will not receive insurance benefits."
                img={project3}
                link="https://jodiambra.github.io/Sure-Tomorrow-Insurance-Benefits-Predictions/"
                github="https://github.com/jodiambra/Sure-Tomorrow-Insurance-Benefits-Predictions"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Machine Learning"
                title="Sweet Lift Taxi Time Series Forecast"
                summary="We provided a model for Sweet Lift Taxi to predict the number of orders of the next hour, allowing their drivers to anticipate times of high demand."
                img={project4}
                link="https://jodiambra.github.io/Sweet-Lift-Taxi-Time-Series-Predictions/"
                github="https://github.com/jodiambra/Sweet-Lift-Taxi-Time-Series-Predictions"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="EDA Web App"
                title="Spotify Exploratory Data Analysis"
                summary="We identified trends in Spotify users and songs, as well as the relationship between music awards and popular culture with the most popular artists on the platform."
                img={project5}
                link="https://spotify-eda.onrender.com/"
                github="https://github.com/jodiambra/Spotify-EDA-and-Web-App"
              />
            </div>


            <div className="col-span-6 sm:col-span-12">
              <Project
                type="EDA Web App"
                title="US Vehicle Sales"
                img={project6}
                link="https://us-vehicles-sales.onrender.com/"
                github="https://github.com/jodiambra/Vehicle-Data-Visaulizer"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                title="Beta Bank Churn Predictor"
                img={project7}
                link="https://jodiambra.github.io/Beta-Bank-Churn-Predictions/"
                github="https://github.com/jodiambra/Beta-Bank-Churn-Predictions"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                img={project8}
                title="Rusty Bargain Car Market Value"
                link="https://jodiambra.github.io/Rusty-Bargain-Car-Market-Value/"
                github="https://github.com/jodiambra/Rusty-Bargain-Car-Market-Value"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Sentiment Analysis"
                img={project9}
                title="Film Junky Union"
                link="https://jodiambra.github.io/Film-Junky-Union-Sentiment-Analysis/"
                github="https://github.com/jodiambra/Film-Junky-Union-Sentiment-Analysis"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                img={project10}
                title="Interconnect Telecom Churn"
                link="https://jodiambra.github.io/Interconnect-Telecom-Churn-Predictions/"
                github="https://github.com/jodiambra/Interconnect-Telecom-Churn-Predictions"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Hypothesis Testing"
                img={project11}
                title="Zuber Ride Share"
                link="https://jodiambra.github.io/Film-Junky-Union-Sentiment-Analysis/"
                github="https://github.com/jodiambra/Zuber-Ride-Duration-Hypothesis-Testing"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Webpage"
                img={project12}
                title="Tinder Relationship Predictions"
                link="https://randypol.github.io/se_pudding_2023/#/dataSlide"
                github="https://github.com/jodiambra/Tinder-Relationship-Predictions-Website"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Webpage"
                img={project13}
                title="MANGA Stock EDA"
                link="https://manga-stock-data.onrender.com/"
                github="https://github.com/jodiambra/MANGA-Stock-Data"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Webpage"
                img={project14}
                title="Fast Food EDA"
                link="https://fast-food-eda.onrender.com/Sales"
                github="https://github.com/jodiambra/Fast-Food-EDA"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Page"
                img={project15}
                title="Breast Cancer Prediction"
                link="https://breast-cancer-prediction-z4yw.onrender.com/"
                github="https://github.com/jodiambra/Breast-Cancer-Predictions/tree/main"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
