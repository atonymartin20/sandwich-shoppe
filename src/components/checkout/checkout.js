import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import PaymentOptions from './paymentOptions.js';
import UserInfo from './userInfo.js';
import OrderComplete from './orderComplete.js';

const styles = theme => ({
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

class Checkout extends React.Component {
    state={
        userInfo: true,
        paymentInfo: false,
        orderCompleted: false,
    }

    continueToPaymentInfo = () => {
        this.setState({
            userInfo: false,
            paymentInfo: true,
            orderCompleted: false,
        })
    }

    backToUserInfo = () => {
        this.setState({
            userInfo: true,
            paymentInfo: false,
            orderCompleted: false,
        })
    }

    orderComplete = () => {
        this.setState({
            userInfo: false,
            paymentInfo: false,
            orderCompleted: true,
        })   
    }

    render() {
        const { classes } = this.props;

            return (
                <div className={classes.outsideDiv}>
                    <div className={classes.insideDiv}>
                        {this.state.userInfo ? <UserInfo continue={this.continueToPaymentInfo} /> : null }

                        {this.state.paymentInfo ? <PaymentOptions back={this.backToUserInfo} continue={this.orderComplete} /> : null }

                        {this.state.orderCompleted ? <OrderComplete  /> : null }
                    </div>
                </div>
            )
    }
}

Checkout.contextType = AppContext;

export default withStyles(styles)(Checkout);