import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    contactDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contactSpacingDiv: {
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
    contactText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class Contact extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.contactDiv}>
                <Navbar />
                <div className={classes.contactSpacingDiv}>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);