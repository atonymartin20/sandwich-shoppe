import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import OrderTypeDropdown from './orderTypeDropdown.js';

const styles = theme => ({
    buttonsDiv: {
        width: '100%',
        maxWidth: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    deliveryButton: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.5rem',
        padding: '10px',
        fontFamily: 'Roboto, sans-serif',
        marginTop: 10,
        cursor: 'pointer',
    },
    expandIcon: {
        width: 20,
        height: 20,
    },
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
    orderNowText: {
        marginTop: 20,
        marginBottom: 20,
    },
    pickupButton: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.5rem',
        padding: '10px',
        fontFamily: 'Roboto, sans-serif',
        marginTop: 10,
        cursor: 'pointer',
    }
});

class OrderNow extends React.Component {
    state = {
        pickup: false,
        delivery: false,
    }

    flipPickup = () => {
        this.setState({
            pickup: !this.state.pickup
        })
    }

    flipDelivery = () => {
        this.setState({
            delivery: !this.state.delivery
        })
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.orderNowDiv}>
                <Navbar />
                <div className={classes.orderNowSpacingDiv}>
                    <div className={classes.buttonsDiv}>
                        { this.state.pickup ? 
                            <OrderTypeDropdown flipType={this.flipPickup} name='Pickup' type='open' />
                        : 
                            <OrderTypeDropdown flipType={this.flipPickup} name='Pickup' type='closed' />
                        }

                        { this.state.delivery ? 
                            <OrderTypeDropdown flipType={this.flipDelivery} name='Delivery' type='open' />
                        : 
                            <OrderTypeDropdown flipType={this.flipDelivery} name='Delivery' type='closed' />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

OrderNow.contextType = AppContext;

export default withStyles(styles)(OrderNow);