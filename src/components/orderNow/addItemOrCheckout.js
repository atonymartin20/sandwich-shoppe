import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Button from "@material-ui/core/Button";
import Cart from './cart';

const styles = theme => ({
    backButton: {
        backgroundColor: '#0087A8',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid #0087A8',
        borderRadius: '10px',
        width: '40%',
        "&:hover": {
            color: '#0087A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginBottom: '10px',
        },
    },
    buttonContainerDiv: {
        width: '100%',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        padding: '0px 25px',
        [theme.breakpoints.down(550)]: {
            padding: '0px',    
        },
    },
    checkoutButton: {
        backgroundColor: '#7600A8',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid #7600A8',
        borderRadius: '10px',
        width: '40%',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginBottom: '10px',
        },
    },
    insideDiv: {
        marginTop: 0,
        width: '100%',
        maxWidth: 1400,
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    outsideDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
});

class AddItemOrCheckout extends React.Component {
    state={
    }

    render() {
        const { classes } = this.props;
            return (
                <div className={classes.outsideDiv}>
                    <div className={classes.insideDiv}>
                        <div className={classes.buttonContainerDiv}>
                            <Button className={classes.backButton} onClick={this.props.addAnotherItem}>
                                Add Another Item
                            </Button>
                            <Button className={classes.checkoutButton} onClick={this.props.goToCheckout}>
                                Checkout
                            </Button>
                        </div>

                        <Cart />
                    </div>
                </div>
            )
    }
}

AddItemOrCheckout.contextType = AppContext;

export default withStyles(styles)(AddItemOrCheckout);