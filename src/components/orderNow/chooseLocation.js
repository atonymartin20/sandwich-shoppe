import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
    orderNowDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    orderNowSpacingDiv: {
        marginTop: 90,
        width: '100%',
        maxWidth: 1400,
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
});

class ChooseLocation extends React.Component {
    state = {
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.orderNowDiv}>
                <Navbar />
                <div className={classes.orderNowSpacingDiv}>
                    <h1>pg 2</h1>
                </div>
            </div>
        )
    }
}

ChooseLocation.contextType = AppContext;

export default withStyles(styles)(ChooseLocation);