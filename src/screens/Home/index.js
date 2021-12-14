import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";
import Intro from "../../components/Intro";
import Book from "./Book";
import ValueProps from "../../components/ValueProps";
import About from "./About";
import Team from "./Team";
import Review from "../../components/Review";
import Quality from "./Quality";
import Advantages from "../../components/Advantages";
import Workouts from "../../components/Workouts";
import Offer from "../../components/Offer";
import OfferCard from "../../components/OfferCard";
import Card from "./Card";

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Steps scrollToRef={scrollToRef} />
      <Quality />
      <Workouts />
      <Offer className="section-border-top" />
      
      
      
      
      
    </>
  );
};

export default Home;
