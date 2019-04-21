import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import SingleLineGridList2 from './weathergridList2';
const styles = theme => ({
    root: {
        width: '100%'
    },

    homeLayout: {
        backgroundColor:'#1E90FF',
        color:'white'
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    // tableCurrentWeather: {
    //     fontStyle: 'Open Sans',
    //     color: 'black',
    //     padding:10,
    //     fontWeight: 'bold'
    // },

    td1: {
        paddingLeft:30,
        fontSize: 15
    },

    td2: {
        paddingLeft:20,
        fontSize: 20
    },

    // tableDayWeather: {
    //     flex: 1,
    //     borderWidth: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap'
    // },

    tr2: {
        textAlign:'center',
    },

    tdAlign: {
        paddingRight:30,
        textAlign: 'right'
    },
    spanFloat: {
        float:'right',
        paddingLeft: 20,
        textAlign: 'right'
    }
});

function ExpansionPanelDay1(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel  className={classes.homeLayout}>
                <ExpansionPanelSummary>
                    {/*expandIcon={<ExpandMoreIcon />}>*/}
                    <table className={classes.root}>
                        <tr>
                            <td className={classes.td1}>
                                Sunday
                                <br/>
                                Cloudy
                            </td>
                            <td className={classes.tdAlign}>
                                <svg className={classes.spanFloat} xmlns="http://www.w3.org/2000/svg" fill={'white'} width="50" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/></svg>
                                69<sup>o</sup>F
                                <br/>
                                45<sup>o</sup>F
                            </td>
                        </tr>

                    </table>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SingleLineGridList2 />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

ExpansionPanelDay1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelDay1);
