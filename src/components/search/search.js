import React from 'react'
import classes from './searchbar.module.css'

const Searchbar = (props) => {
    return (
        <div className={classes.search_container}>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Search.." name="search" onChange={props.changed} />
                <button type="submit" onClick={props.clicked} ><i class="fa fa-search"></i></button>
            </form>

        </div>
    )
}
export default Searchbar;