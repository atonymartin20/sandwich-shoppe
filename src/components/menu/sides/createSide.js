import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import CheesebreadMarinaraCheckbox from './cheesebreadMarinaraCheckbox.js';
import ChipFlavorRadioButtons from './chipFlavorRadioButtons.js';
import CookieCountRadioButtons from './cookieCountRadioButtons.js';
import CookieFlavorRadioButtons from './cookieFlavorRadioButtons.js';

const styles = theme => ({
    addToCartButton: {
        backgroundColor: '#7600A8',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid# 7600A8',
        borderRadius: '10px',
        width: '200px',
        textTransform: 'none',
        marginLeft: '10%',
        marginTop: '10px',
        marginBottom: '10px',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        "&:disabled": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginLeft: 0,
            marginTop: '10px',
            marginBottom: '10px',
        },
    },
    categoryBar: {
        width: '100%',
        backgroundColor: '#0087A8',
        color: 'white',
        marginTop: 0,
        textAlign: 'center',
    },
    categoryInfoBar: {
        width: '100%',
        backgroundColor: '#CDCDCD',
        color: 'black',
        marginTop: 0,
        textAlign: 'center',
        fontSize: '1.7rem',
    },
    closeIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
        marginLeft: 'auto',
        marginRight: '2%',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    container: {
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(43, 43, 43, 0.3)',
    },
    finalInfo: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 500,
        backgroundColor: '#CDCDCD',
    },
    header: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
    },
    headerText: {
        fontSize: '3.5rem',
        marginLeft: 'auto',
        paddingLeft: '42px',
        marginBottom: 10,
        textAlign: 'center',
        [theme.breakpoints.down(550)]: {
            fontSize: '3.0rem',
            paddingLeft: '34px'
        },
    },
    holderDiv: {
        width: '100%',
    },
    infoText: {
        fontSize: '3.0rem',
        marginTop: 10,
        width: '100%',
        padding: '0px 10px',
        textAlign: 'center',
        [theme.breakpoints.down(800)]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down(550)]: {
            fontSize: '2.0rem',
        },
    },
    menuSpacingDiv: {
        margin: '0 auto',
        marginTop: '15vh',
        width: '100%',
        maxWidth: 1000,
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
    },
});

class CreateSide extends React.Component {
    state={
        side: {},
        render: false,
        disableCartButton: false,
    }

    componentDidMount() {
        let side = this.props.side;

        this.setState({
            side,
            render: true,
        })
    }

    UpdateChipFlavorRadios = (side) => {
        this.setState({
            side,
        })
    }

    UpdateCookieCountRadios = (side) => {
        this.setState({
            side,
        })
    }

    UpdateCookieFlavorRadios = (side) => {
        this.setState({
            side,
        })
    }

    UpdateSideMarinaraRadio = (side) => {
        this.setState({
            side,
        })
    }

    AddSideToCart = () => {
        this.setState({
            disableCartButton: true,
        })
        let side = this.state.side
        if(this.state.side['name'].includes('Cookie')) {
            if(this.state.side['is1CookiePack'] === true) {
                side['name'] += ' (1)'
            }

            else if(this.state.side['is3CookiePack'] === true) {
                side['name'] += ' (3)'
            }

            else if(this.state.side['is5CookiePack'] === true) {
                side['name'] += ' (5)'
            }
        }
        this.props.itemAddedToCart();
        this.context.addSideToCart(side);
    }

    render() {
        const { classes } = this.props;
        if(this.state.render) {
            return (
                <div className={classes.container}>
                    {this.context.state.orderItemCount >= 25 || this.context.state.orderSaladCount >= 10 ? 
                        <div className={classes.menuSpacingDiv}>
                            <div className={classes.header}>
                                <h1 className={classes.headerText}>{this.props.title}</h1>
                                <CloseIcon onClick={this.props.close} className={classes.closeIconStyling} />
                            </div>
                            <div>This order is getting too large.  Please call the store for large orders.</div>
                        </div>
                    :
                        <div className={classes.menuSpacingDiv}>
                            <div className={classes.header}>
                                <h1 className={classes.headerText}>{this.props.title}</h1>
                                <CloseIcon onClick={this.props.close} className={classes.closeIconStyling} />
                            </div>

                            {this.state.side['type'] === 'Cookies' ? 
                                <div className={classes.holderDiv}>
                                    <div className={classes.categoryBar}>Choose Flavor:</div>
                                    <CookieFlavorRadioButtons updateButtons={this.UpdateCookieFlavorRadios} side={this.props.side} />

                                    <div className={classes.categoryBar}>Choose Amount:</div>
                                    <CookieCountRadioButtons updateButtons={this.UpdateCookieCountRadios} side={this.props.side} />
                                </div>
                            : null }

                            {this.state.side['type'] === 'Cheesebread' ? 
                                <div className={classes.holderDiv}>
                                    <div className={classes.categoryBar}>Side of Marinara:</div>
                                    <CheesebreadMarinaraCheckbox updateButton={this.UpdateSideMarinaraRadio} side={this.props.side} />
                                </div>
                            : null }

                            {this.state.side['type'] === 'Chips' ?
                                <div className={classes.holderDiv}>
                                    <div className={classes.categoryBar}>Choose Flavor:</div>
                                    <ChipFlavorRadioButtons updateButtons={this.UpdateChipFlavorRadios} side={this.props.side} />
                                </div>
                            : null }

                            {this.state.side['type'] === 'Chips' ?
                            <div className={classes.finalInfo}>Price: ${this.state.side['price']}<Button className={classes.addToCartButton} onClick={this.AddSideToCart} disabled={this.state.disableCartButton || this.state.side['name'] === ''}>Add to Cart</Button></div>
                            : null }

                            {this.state.side['type'] === 'Cookies' ?
                            <div className={classes.finalInfo}>Price: ${this.state.side['price']}<Button className={classes.addToCartButton} onClick={this.AddSideToCart} disabled={this.state.disableCartButton || (this.state.side['name'] === '' || this.state.side['price'] === 0.00)}>Add to Cart</Button></div>
                            : null }

                            {this.state.side['type'] === 'Cheesebread' ?
                                <div className={classes.finalInfo}>Price: ${this.state.side['price']}<Button className={classes.addToCartButton} onClick={this.AddSideToCart} disabled={this.state.disableCartButton || this.context.state.orderItemCount >= 25 || this.context.state.orderSideCount >= 10}>Add to Cart</Button></div>
                            : null }
                        </div>
                    }
                </div>
            )
        }

        else {
            return null
        }

    }
}

CreateSide.contextType = AppContext;

export default withStyles(styles)(CreateSide);