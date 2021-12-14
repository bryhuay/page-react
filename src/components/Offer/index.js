import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const OfferDark = ({ className }) => {
  return (
    <div className={styles.offerdark}>
      <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
        ¡NO LO PIENSES MÁS 🏠!
        </div>
        <h2 className={cn("h1", styles.title)}>
          Consigue vivienda sin buscar.
        </h2>
        <div className={styles.text}>
          Dejate encontrar de propietarios que te quieren rentar. Encuentra tu proxima vivienda facilisimo
        </div>
        <Link className={cn("button", styles.buttonblue)} to="/quiero-inquilinos">
          Quiero inquilinos
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default OfferDark;
