import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const OfferCard = ({ className }) => {
  return (
    <div className={styles.offerdark}>
      <div className={cn(className, styles.section)}>
        <div className={cn("container", styles.container)}>
          <h2 className={cn("h1", styles.title)}>
            Últimas solicitudes
          </h2>
          <div className={styles.text}>
            Aquí están algunas de las solicitudes de renta que están esperando.
          </div>
          <Link className={cn("button", styles.buttonred)} to="/download">
            Ver todas las solicitudes
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default OfferCard;
