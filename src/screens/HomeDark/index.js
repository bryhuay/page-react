import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import ClientsDark from "../../components/ClientsDark";
import Steps from "./Steps";
import Intro from "../../components/Intro";
import Book from "./Book";
import ValueProps from "../../components/ValueProps";
import About from "./About";
import Team from "./Team";
import Review from "../../components/Review";
import Quality from "./Quality";
import Advantages from "../../components/Advantages";
import WorkoutsDark from "../../components/WorkoutsDark";
import OfferDark from "../../components/OfferDark";
import useDarkMode from "use-dark-mode";

const HomeDark = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Steps scrollToRef={scrollToRef} />
      <Quality />
      <WorkoutsDark />
      <OfferDark className="section-border-top" />
      
      
      
      
    </>
  );
};

export default HomeDark;
