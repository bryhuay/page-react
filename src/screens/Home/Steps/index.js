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
      "Sin costo, accede a la aplicación donde el tú eres el más importante y el punto de partida.",
  },
  {
    title: "Publica tu solicitud",
    color: "#ffffff",
    images: "/images/content/paso2.png",
    content:
      "Indica la ubicación, presupuesto y características de la vivienda que necesitas rentar.",
  },
  {
    title: "Recibe propuestas",
    color: "#ffffff",
    images: "/images/content/paso3.png",
    content:
      "Propietarios y/o agencias te enviarán mensajes con propuestas según tu solicitud.",
  },
  {
    title: "Chatea hasta rentar",
    color: "#ffffff",
    images: "/images/content/paso4.png",
    content:
      "Pide fotos, agenda visitas y negocia la renta. Si lo necesitas, te podemos ayudar a rentarlo.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
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
  );
};

export default Steps;
