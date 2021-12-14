import React from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";
import Icon from "../Icon";

const ThemeDark = ({ className }) => {
  const darkMode = useDarkMode(true);
  //localStorage.setItem('darkMode', true);
  console.log(darkMode.value);
  
  
  return (
    
    <label className={cn(styles.theme, className)}>
      
      <input
        className={styles.input}
        checked={darkMode.value}
        onChange={darkMode.toggle}
        type="checkbox"
      />
      <span className={styles.inner}>
        <span className={styles.box}></span>
        <span className={styles.icon}>
          <Icon name="moon" size="24" />
          <Icon name="sun" size="24" />
        </span>
      </span>
    </label>
  );
};

export default ThemeDark;
