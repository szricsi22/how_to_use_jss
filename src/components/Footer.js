import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    root: {
        background: theme.palette.colorPrimary,
        color: theme.palette.fontColor,
        display: "grid",
        gridTemplateColumns: [["auto", "auto", "auto"]],
    }
}))

function Footer(props) {
    const classes = useStyles(props)
    return (
        <div>
            <div className={classes.root}>
                <div>
                    <h3>QUICK LINKS</h3>
                    <p>Contact</p>
                    <p>About Us</p>
                    <p>News</p>
                    <p>FAQ</p>
                </div>

                <div>
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, repellat.</p>
                </div>

                <div>
                    <h3>Facebook</h3>
                    <h3>Instagram</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
