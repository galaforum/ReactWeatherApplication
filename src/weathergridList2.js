
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const styles = theme => ({
    root: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#1E90FF'//theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        height: 100,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    tableDayWeather:{
        textAlign:'center',
        color:'white',
        backgroundColor: '#1E90FF'
    },
    svgStyle: {
        fill:'white'
    }
    // titleBar: {
    //     background:
    //         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    // },
});

function SingleLineGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={10}>
                {tileData.map(tile => (
                    <GridListTile key={tile.key}>
                        <div className={classes.tableDayWeather}>
                            {tile.time}
                            <br/>
                            {/*<svg height="448pt" viewBox="-12 0 448 448.04455" width="448pt" xmlns="http://www.w3.org/2000/svg">             <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"/></svg>*/}
                            <svg className={classes.svgStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d={tile.dValue}/></svg>
                            <br/>
                            {tile.temperature}<sup>o</sup>F
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

SingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);