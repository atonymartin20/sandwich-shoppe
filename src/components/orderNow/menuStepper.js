import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Menu from '../menu';
import AddItemOrCheckout from './addItemOrCheckout.js';
import Checkout from '../checkout/checkout.js';

const styles = theme => ({
    menuDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    menuSpacingDiv: {
        width: '100%',
        maxWidth: 1400,
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
        marginTop: 90,
    },
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class MenuStepper extends React.Component {
    state={
        step1: true,
        step2: false,
        checkout: false,
    }

    itemAddedToCart = () => {
        this.setState({
            step1: false,
            step2: true,
            checkout: false,
        })
    }

    goToCheckout = () => {
        this.setState({
            step1: false,
            step2: false,
            checkout: true,
        })
    }

    addAnotherItem = () => {
        this.setState({
            step1: true,
            step2: false,
            checkout: false,
        })
    }

    render() {
        const { classes } = this.props;

            return (
                <div className={classes.menuDiv}>
                    <Navbar />
                    <div className={classes.menuSpacingDiv}>
                        {this.state.step1 === true ? <Menu type='order' itemAddedToCart={this.itemAddedToCart} goToCheckout={this.goToCheckout} checkout={this.state.checkout} /> : null}
                        {this.state.step2 === true ? <AddItemOrCheckout addAnotherItem={this.addAnotherItem} goToCheckout={this.goToCheckout} /> : null}
                        {this.state.checkout === true ? <Checkout addAnotherItem={this.addAnotherItem} /> : null}
                    </div>
                </div>
            )
    }
}

MenuStepper.contextType = AppContext;

export default withStyles(styles)(MenuStepper);