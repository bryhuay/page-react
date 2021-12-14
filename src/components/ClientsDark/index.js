import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const list = [
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "waves",
    url: "/images/content/waves.svg",
  },
  {
    title: "rotashow",
    url: "/images/content/rotashow.svg",
  },
  {
    title: "travelers",
    url: "/images/content/travelers.svg",
  },
  {
    title: "goldlines",
    url: "/images/content/goldlines.svg",
  },
  {
    title: "velocity9",
    url: "/images/content/velocity9.svg",
  },
];

const ClientsDark = () => {
  return (
    <div className={styles.clients}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Asi funciona ...</h2>
        <ScrollParallax className={styles.title}>
          Aqui encontraras solicitudes de renta.
          Busca los que hacen match con tu 
          inmueble y proponles rentar el tuyo.
        </ScrollParallax>
        
      </div>
    </div>
  );
};

export default ClientsDark;
