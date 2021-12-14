import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import HeaderDark from "../HeaderDark";
import FooterDark from "../FooterDark";

const PageDark = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div className={styles.page}>
      <HeaderDark />
      <div className={styles.inner}>{children}</div>
      <FooterDark />
    </div>
  );
};

export default withRouter(PageDark);
