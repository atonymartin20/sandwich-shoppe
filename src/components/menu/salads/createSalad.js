import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import SaladDressingRadioButtons from './saladDressingRadioButtons.js';

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
        salad: {},
        render: false,
        disableCartButton: false,
    }

    componentDidMount() {
        let salad = this.props.salad;

        this.setState({
            salad,
            render: true,
        })
    }

    UpdateDressingRadios = (salad) => {
        this.setState({
            salad,
        })
    }

    AddSideToCart = () => {
        this.setState({
            disableCartButton: true,
        })
        let salad = this.state.salad

        this.props.itemAddedToCart();
        this.context.addSaladToCart(salad);
    }

    render() {
        const { classes } = this.props;
        if(this.state.render) {
            return (
                <div className={classes.container}>
                    <div className={classes.menuSpacingDiv}>
                        <div className={classes.header}>
                            <h1 className={classes.headerText}>{this.props.title}</h1>
                            <CloseIcon onClick={this.props.close} className={classes.closeIconStyling} />
                        </div>

                            <div className={classes.holderDiv}>
                                <div className={classes.categoryBar}>Choose Dressing:</div>
                                <SaladDressingRadioButtons updateButtons={this.UpdateDressingRadios} salad={this.props.salad} />
                            </div>

                        <div className={classes.finalInfo}>Price: ${this.state.salad['price']}<Button className={classes.addToCartButton} onClick={this.AddSideToCart} disabled={this.state.disableCartButton}>Add to Cart</Button></div>
                    </div>
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