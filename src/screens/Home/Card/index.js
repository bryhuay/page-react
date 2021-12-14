import React, { useState, useEffect }  from "react";
import axios from 'axios'
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Image from "../../../components/Image";


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




const Card = ({ scrollToRef }) => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postsAxios  = axios.get('http://localhost:5000/moradaz-dev/us-central1/app/post/?limit=3').then(data =>{
      console.log(data.data.data);
      setPosts(data.data.data);
    });
  }, []);
  
  return (
    <div  ref={scrollToRef}>
      <div className={cn("container", styles.containercard)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Asi funciona...</h2>
          <div className={styles.info}>
            Aquí hay viviendas buscando inquilino. Diles lo que necesitas y empieza
            a recibir propuestas de renta.
          </div>
        </div>
        <div className={styles.list}>
          {posts.map((x, index) => (
            <div className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardheader}>
                  <b className={styles.cardtitle}>Guadalupe Lopez</b><br/>
                  Publicado hace 1 hora
                </div>
                <div className={styles.cardline}></div>
                <div className={styles.cardbody}>
                  <b className={styles.cardtitle}>Busco renta cerca de:</b>
                  <br/>
                  WeWork Mexico, Boulevard Miguel de Cervantes Saavedra, Granada, Ciudad de México, CDMX
                  <br/><br/>
                  <b className={styles.cardtitle}>Necesito minimo:</b>
                  <br/>
                  2 recámaras, tengo 2 niños y una mascota, busco un espacio con gimnasio y parques cercanos
                </div>
                <div className={styles.cardline}></div>
                <div className={styles.cardfooter}>
                  <div className={styles.cardcalendar} >
                    <Image
                      className={styles.calendarimg}
                      srcSet="/images/content/calendar.png"
                      srcSetDark="/images/content/calendar.png"
                      src="/images/content/calendar.png"
                      srcDark="/images/content/calendar.png"
                      alt=""
                    />
                    <div className={styles.cardcalendartext}>
                      <b className={styles.cardtitle}>
                        Me mudo el <br/> 10/12/2021
                      </b>
                    </div>
                    
                  </div> 
                  <div className={styles.cardprice} >
                    Presupuesto max. <br/>
                    <b className={styles.cardtitle}> MXN 8,000 </b>                 
                  </div>                
                  
                </div>
                <div className={styles.cardbutton}>
                  <Link className={cn("button", styles.buttoncard)} to="/download">
                    Proponer renta
                  </Link>
                </div>
                
              </div>
              
            </div>
          ))}
          
        </div>

      </div>     
    </div>
  );
};

export default Card;
