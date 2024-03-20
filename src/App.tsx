import React from 'react';
import styles from "./components/Site.module.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { PATH } from "./routes/router";

function App() {

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to={'/adidas'} className={({ isActive }) => isActive ? `${styles.active}` : ""}>Adidas</NavLink>
            </li>
            <li>
              <NavLink to={'/puma'} className={({ isActive }) => isActive ? `${styles.active}` : ""}>Puma</NavLink>
            </li>
            <li>
              <NavLink to={'/reebok'} className={({ isActive }) => isActive ? `${styles.active}` : ""}>Reebok</NavLink>
            </li>
            <li>
              <NavLink to={PATH.PROTECTED} className={({ isActive }) => isActive ? `${styles.active}` : ""}>Protected page</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;
