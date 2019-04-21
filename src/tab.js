import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/WbSunny';
import TomorrowIcon from '@material-ui/icons/Cloud';
// import TenDaysIcon from '@material-ui/icons/WbCloudy';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';
import SimpleExpansionPanel from "./expansionPanel";
import SimpleExpansionPanel2 from "./expansionPanel2";
import ExpansionPanelDay0 from "./expansionPanelDay0";
import ExpansionPanelDay1 from "./expansionPanelDay1";
import ExpansionPanelDay2 from "./expansionPanelDay2";
import ExpansionPanelDay3 from "./expansionPanelDay3";
import ExpansionPanelDay4 from "./expansionPanelDay4";
import ExpansionPanelDay5 from "./expansionPanelDay5";
import ExpansionPanelDay6 from "./expansionPanelDay6";
import ExpansionPanelDay7 from "./expansionPanelDay7";
import ExpansionPanelDay8 from "./expansionPanelDay8";
import ExpansionPanelDay9 from "./expansionPanelDay9";

const styles = {
    root: {
        position:'absolute',
        top:0,
        width:'100%',
        alignSelf:'stretch'
    },
    tabBackground: {
        background: '#FFFFFF',
        color:'#000000',
    },

    tabHeight: {
        padding: '1*1',
        height: '250'
    }
};
function TabContainer(props) {
    return (
        <Typography component="div" className="tabHeight">
            {props.children}
        </Typography>
    );
}
function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}
class SimpleBottomNavigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <NoSsr>
                <div className={classes.root} >
                    <AppBar position="static">
                        <Tabs variant="fullWidth" className={classes.tabBackground} value={value} onChange={this.handleChange}>
                            <LinkTab label="Today" href="page1" icon={<TodayIcon />} className={classes.tabBackground} />
                            <LinkTab label="Tomorrow" href="page2" icon={<TomorrowIcon />} />
                            <LinkTab label="10 Days" href="page3" />
                            {/*icon={<TenDaysIcon />}*/}
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer><SimpleExpansionPanel/></TabContainer>}
                    {value === 1 && <TabContainer><SimpleExpansionPanel2/></TabContainer>}
                    {value === 2 && <TabContainer>
                        <ExpansionPanelDay0/><ExpansionPanelDay1/>
                        <ExpansionPanelDay2/><ExpansionPanelDay3/>
                        <ExpansionPanelDay4/><ExpansionPanelDay5/>
                        <ExpansionPanelDay6/><ExpansionPanelDay7/>
                        <ExpansionPanelDay8/><ExpansionPanelDay9/>

                    </TabContainer>}
                </div>
            </NoSsr>
            // <BottomNavigationAction
            //     value={value}
            //     onChange={this.handleChange}
            //     showLabels
            //     className={classes.root}
            //     variant="fullWidth"
            //     label="Today" icon={<TodayIcon />}>
            //
            //     <BottomNavigationAction label="Today" icon={<TodayIcon />} />
            //         <BottomNavigationAction label="Tomorrow" icon={<TomorrowIcon />} onClick={'./expansionPanel2.js'}/>
            //     <BottomNavigationAction label="10 days" icon={<TenDaysIcon />} />
            // </BottomNavigation>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
