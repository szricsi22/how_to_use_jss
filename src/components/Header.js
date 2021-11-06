import React from 'react';
import {Link} from "react-router-dom"
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    root: {
        background: theme.palette.colorPrimary,
        color: theme.palette.fontColor,
    }
}))

function Header(props) {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <Link to="/"><h1>JSS usage</h1></Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Header;
