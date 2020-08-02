import React, { useEffect } from 'react';
import classes from './pagination.module.css';

const Pagination = (props) => {
    let items;

    useEffect(() => {
        if (props.items && props.items.length > 0) {
            items = Math.ceil(props.items.length / 9)
        }
    }, [props])

    if (props.items && props.items.length > 0) {
        items = Math.ceil(props.items.length / 9)
    }
    let page_items = []
    for (let i = 0; i < items; i++) {
        page_items.push(i + 1)
    }
    let dispPageItems;
    if (page_items.length > 0) {
        dispPageItems = page_items.map((ele, index) => {
            return (
                props.active && props.active == ele ? <li className={classes.active} key={index} onClick={props.changePage}>{ele}</li> : <li className={classes.page_item} key={index} onClick={props.changePage}>{ele}</li>
            )
        })
    }
    return (
        <div>
            <ul className={classes.pagination}>
                {dispPageItems}
            </ul>
        </div>
    )
}
export default Pagination