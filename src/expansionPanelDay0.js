import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import SingleLineGridList from './weathergridList';
const styles = theme => ({
    root: {
        width: '100%'
    },

    homeLayout: {
        backgroundColor:'#EEA900',
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
                                Today
                                <br/>
                                Sunny
                            </td>
                            <td className={classes.tdAlign}>
                                <svg className={classes.spanFloat} xmlns="http://www.w3.org/2000/svg" fill={'white'} width="50" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
                                80<sup>o</sup>F
                                <br/>
                                69<sup>o</sup>F
                                {/*</table>*/}
                            </td>
                        </tr>
                    </table>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SingleLineGridList />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

ExpansionPanelDay1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelDay1);
