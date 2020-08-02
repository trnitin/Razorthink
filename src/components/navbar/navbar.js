import React from 'react'
import classes from './navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={classes.navbar}>
            <span class={classes.navbar_brand}>Razorthink</span>
            <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className={classes.navbar_toggler}><span className={classes.navbar_toggler_icon}></span></button>
        </div>
    )
}
export default Navbar