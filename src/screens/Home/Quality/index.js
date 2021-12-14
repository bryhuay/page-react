import React from "react";
import cn from "classnames";
import styles from "./Quality.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Propietarios buscando inquilino",
    counter: "+1,000",
    images: "/images/content/home.svg",
    alt: "user",
    content:
      "En promedio recibirás 5 diferentes propuestas de renta a tu solicitud. ",
  },
  {
    title: "Nuevos propietarios diarios",
    counter: "40",
    images: "/images/content/user.svg",
    alt: "flag",
    content:
      "Todos los días se desocupa una propiedad. Las probabilidades de hallar vivienda son altas. ¡Entra ya!",
  },
];

const Quality = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img src={x.images} alt={x.alt} />
              </div>
              <div className={styles.counter}>{x.counter}</div>
              <div className={styles.title}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
