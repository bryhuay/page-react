import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Descarga la aplicación",
    color: "#ffffff",
    images: "/images/content/paso1.png",
    content:
      "Sin costo, accede a la aplicación para rentar donde se centraliza la demanda.",
  },
  {
    title: "Busca solicitudes",
    color: "#ffffff",
    images: "/images/content/paso2.png",
    content:
      "Aquí encontrarás solicitudes de renta. Busca las que hacen match con tu inmueble y proponles rentar el tuyo.",
  },
  {
    title: "Ofréceles tus inmueble",
    color: "#ffffff",
    images: "/images/content/paso3.png",
    content:
      "Envíale un mensaje privado a las personas que te interesen, con las características de tu inmueble. Comparte fotos, links, lo que necesites.",
  },
  {
    title: "Chatea hasta rentar",
    color: "#ffffff",
    images: "/images/content/paso4.png",
    content:
      "Ponte de acuerdo con tu inquilino, sin dar tu WhatsApp. Tendrás una conversación fluida y segura antes, durante y después de rentar.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={styles.stepsdark}>
      <div  ref={scrollToRef}>
        <div className={cn("container", styles.container)}>
        <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>Asi funciona...</h2>
            <div className={styles.info}>
            Aquí hay viviendas buscando inquilino. Diles lo que necesitas y empieza
            a recibir propuestas de renta.
            </div>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div
                  className={styles.preview}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={`Paso ${index}`} />
                </div>
                <div className={styles.number}>Paso {index + 1}</div>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </ScrollParallax>
            ))}
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
    
  );
};

export default Steps;
