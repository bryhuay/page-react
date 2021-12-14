import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import Image from "../Image";
import Theme from "../Theme";


const navLinks = [
  {
    title: "Quiero viviendas",
    url: "#",
  },
  {
    title: "Quiero inquilinos",
    url: "/quiero-inquilinos",
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

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/logo-bimo-dark.png"
            srcDark="/images/logo-bimo-white.png"
            alt="Bimo"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.content ? (
                <DropdownMenu
                  className={styles.group}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                />
              ) : (
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={x.url}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              )
            )}
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
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
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/"
            >
              Get free trial
            </Link>
          </div>
        </div>
        <a
          className={cn("button-stroke-header button", styles.button)}
           href="https://bimomx.app.link/bimomx"
        >
          Descarga el app
        </a>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
        
      </div>
    </header>
  );
};

export default Headers;
