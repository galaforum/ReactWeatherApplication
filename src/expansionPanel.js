import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import SimpleBottomNavigation from './tab';
import SingleLineGridList from './weathergridList';

const styles = theme => ({
    root: {
        width: '100%',
    },

    homeLayout:{
        backgroundColor:'#EEA900'
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

    tableCurrentWeather:{
         fontStyle: 'Open Sans',
        color: 'white',
        padding:150,
        fontWeight: 'bold'
    },

    td1: {
        fontSize: 75
    },

    td2:{
        paddingTop:20,
        fontSize: 30
    },

    tableDayWeather:{
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    tr2:{
        textAlign:'center',
        color:'white'
    }

});

function SimpleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel  className={classes.homeLayout}>
                <ExpansionPanelSummary>
                    {/*expandIcon={<ExpandMoreIcon />}>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill={'white'} float='left' width="500" height="500" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path
                                d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/>
                        </svg>
                        <table className={classes.tableCurrentWeather}>
                            <tr>
                                <td className={classes.td1}>67<sup>o</sup>F</td>
                            </tr>
                            <tr>
                                <td className={classes.td2}>Feels like 65<sup>o</sup></td>
                            </tr>
                            <tr>
                                <td>__________________________________</td>
                            </tr>
                        </table>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SingleLineGridList />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/*ReactDOM.render(<SimpleBottomNavigation />, document.getElementById('root'));*/}
        </div>
    );
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
