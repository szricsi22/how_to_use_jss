import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    root: {
        background: theme.palette.colorPrimary,
        color: theme.palette.fontColor,
        maxWidth: 900,
        margin: [[20, "auto"]],
    }
}))

function AboutPage(props) {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cum cumque, cupiditate eligendi eos, id illum incidunt ipsa ipsum
                libero mollitia necessitatibus nisi nulla odit quia quibusdam, ratione recusandae sunt suscipit temporibus ullam unde. Aliquam dolore
                eum harum nisi praesentium soluta? Adipisci aliquid doloribus enim error obcaecati similique vitae.</p>
        </div>
    );
}

export default AboutPage;
