import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
          NO ESPERES QUE APAREZCA 🏡
          </div>
          <h1 className={cn("h1", styles.title)}>
          Encuentra rápido tu inquilino
          </h1>
          <div className={styles.text}>
          Centralizamos la demanda. Tenemos personas que necesitan tu inmueble; contáctalos y renta facilísimo 😉.
          </div>
          <div className={styles.btns}>
            <a className={cn("button", styles.button)} href="https://bimomx.app.link/bimomx">
              Descarga el app
            </a>
            <div>
              <a
                className={cn("button-stroke", styles.buttonwhite)}
                href="https://bimomx.app.link/bimomx"
              >
                <Image
                  srcSet="/images/content/play-store.png"
                  srcSetDark="/images/content/play-store.png"
                  src="/images/content/play-store.png"
                  srcDark="/images/content/play-store.pngg"
                  alt=""
                />
              </a>
            </div>
            
          </div>
        </ScrollParallax>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/home-bimo-dark-1.png"
              srcSetDark="/images/content/home-bimo-dark-1.png"
              src="/images/content/home-bimo-dark-1.png"
              srcDark="/images/content/home-bimo-dark-1.png"
              alt=""
            />
          </ScrollParallax>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
