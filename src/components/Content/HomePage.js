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

function HomePage(props) {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <h3>HOME PAGE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor labore minima neque perspiciatis quas. Consectetur corporis
                cupiditate debitis dignissimos dolor doloremque dolores ea eius enim eos esse expedita facilis harum id incidunt, ipsum maiores
                molestias mollitia nihil nobis optio perspiciatis placeat saepe sint tempora ut voluptatem voluptates! Aliquam aliquid aperiam
                architecto atque cum cumque distinctio dolores eius eos et hic, inventore ipsam laboriosam, molestiae natus nemo pariatur perferendis
                perspiciatis praesentium quae quos ratione rem? Aliquam consectetur mollitia provident velit? Amet at debitis, delectus ducimus
                expedita facere hic iste magni modi nam necessitatibus porro quos ratione, repudiandae sit ut velit.</p>
        </div>
    );
}

export default HomePage;
