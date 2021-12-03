import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const styles = {
    color: '#c3c3c3',
    backgroundColor: "#000",
    transition: "all .3s ease",
    border: '1px solid transparent',
    fontFamily: 'Comforter Brush',
    fontSize: 30,
    padding: '10px',
    textAlign: 'center',
    boxSizing: 'content-box',
    letterSpacing: 25,
    maxWidth: 400,

    '&:hover': {
        background: "#c3c3c3",
        color: '#000',
        border: '1px solid #c3c3c3',
    }
}

const wrapper = makeStyles({
    wrapper: {
        minHeight: 40,
        display: "flex",
        justifyContent: 'center',
        marginTop: 30,
    }
})

export default function Weather({ saveChanges }) {
    const classes = wrapper()

    return (
        <div className={classes.wrapper}>
            <div>
                <Button onClick={saveChanges} sx={{ ...styles }}>weather</Button>
            </div>
        </div>
    );
}