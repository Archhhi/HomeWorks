import React from 'react'
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={s.navBar}>
      <NavLink to={'/pre-junior'} className={s.link} activeClassName={s.active}>
        <span>pre-junior </span>
      </NavLink>
      <NavLink to={'/junior'} className={s.link} activeClassName={s.active}>
        <span>junior </span>
      </NavLink>
      <NavLink to={'/junior-plus'} className={s.link} activeClassName={s.active}>
        <span>junior-plus</span>
      </NavLink>
      <div className={s.block} />
    </nav>
  )
}

export default NavBar