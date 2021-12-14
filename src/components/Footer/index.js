import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Buenos inquilinos",
    url: "/quiero-inquilinos",
  },
  {
    title: "Buenos propietarios",
    url: "/",
  },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/Bimomx",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/bimomx_/",
  },
  {
    title: "linkedin",
    size: "18",
    url: "https://www.linkedin.com/company/bimomx/",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link className={styles.logo} to="/">
                <Image
                  className={styles.pic}
                  src="/fav.png"
                  srcDark="/fav.png"
                  alt="Fitness Pro"
                />
              </Link>
            </div>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          
          
          <div className={styles.col}>
            <div className={styles.category}>contacto</div>
            <div className={styles.info}>
              <p>Blvd Miguel de</p>
              <p>Cervantes Saavedra 25</p>
              <p>Granada, Miguel</p>
              <p>Hidalgo, CDMX</p>
              <p>Mexico</p>
              <p>55-8146-4361</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
          Copyright © 2021 UI8 LLC. All rights reserved
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
