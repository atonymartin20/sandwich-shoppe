import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
    menuDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    menuSpacingDiv: {
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
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class Menu extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.menuDiv}>
                <Navbar />
                <div className={classes.menuSpacingDiv}>
                </div>
            </div>
        )
    }
}

Menu.contextType = AppContext;

export default withStyles(styles)(Menu);