import React from 'react';
import Backdrop from '../backdrop/backdrop';
import classes from './modal.module.css';

const modal = props => {

    const handleDownload = async event => {
        event.preventDefault();
        const response = await fetch(
            props.image.urls.regular
        );
        console.log(response.status);
        if (response.status === 200) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "image";
            document.body.appendChild(link);
            link.click();
            link.remove();
            console.log(link);
            return { success: true };
        }
    }
    return (
        <>
            <Backdrop show={props.show} clicked={props.hide} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0,
                }}
            >
                <div>{props.children}</div>
                <div style={{ marginTop: '20px' }}>
                    <button className={classes.modalbutton} onClick={props.hide}>close</button>
                    {props.image ? <button className={classes.modalbutton} style={{ float: 'right' }} onClick={e => handleDownload(e)}>download</button> : null}
                </div>


            </div>
        </>
    );
};


export default modal;