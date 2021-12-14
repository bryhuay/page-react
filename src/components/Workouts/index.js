import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
  "Rentar sin aval",
  "Renta sin deposito",
  "Mudanza a precio especial",
  "Paga renta con tarjeta",
];

const Workouts = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/home-bimo-2.png 2x"
              srcSetDark="/images/content/home-bimo-2.png 2x"
              src="/images/content/home-bimo-2.png"
              srcDark="/images/content/home-bimo-2.png"
              alt="Phones"
            />
          </div>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            Renta rápido <br></br>y facilísimo
          </h2>
          <div className={styles.info}>
            Una vez encontrado si lo necesitas te podemos ayudar a ...
          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <a className={cn("button-contact")} href="https://wa.me/+525621263800">
              Contáctanos para ayudarte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
