import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import SandwichSizeRadioButtons from './sandwichSizeRadioButtons.js';
import SandwichBreadRadioButtons from './sandwichBreadRadioButtons.js';
import SandwichCheeseCheckboxes from './sandwichCheeseCheckboxes.js';
import SandwichDefaultsCheckboxes from './sandwichDefaultsCheckboxes.js';
import SandwichMeatCheckboxes from './sandwichMeatCheckboxes.js';
import SandwichToastedCheckbox from './sandwichToastedCheckbox.js';
import SandwichVeggiesCheckboxes from './sandwichVeggiesCheckboxes.js';
import SandwichSaucesCheckboxes from './sandwichSaucesCheckboxes.js';
import SandwichSeasoningsCheckboxes from './sandwichSeasoningsCheckboxes.js';

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

class CreateSandwich extends React.Component {
    state={
        sandwich: {},
        breads: {},
        meats: {},
        cheeses: {},
        veggies: {},
        seasonings: {},
        sauces: {},
        otherValues: {},
        sandwichDefaults: {},
        render: false,
        disableCartButton: false,
    }

    componentDidMount() {
        let sandwich = this.props.sandwich;
        let breads = {};
        let meats = {};
        let cheeses = {};
        let veggies = {};
        let seasonings = {};
        let sauces = {};
        let otherValues = {};
        let sandwichDefaults = {};

        for (const [key, value] of Object.entries(sandwich)) {
            if(value === true && !key.includes('Sandwich')) {
                sandwichDefaults[key] = value
            }

            if(key.includes('Bread') || key === 'hasWrap') {
                breads[key] = value
            }

            if(key === 'hasBacon' || key === 'hasChicken' || key === 'hasHam'  || key === 'hasMeatball' || key === 'hasSteak' || key === 'hasTurkey') {
                meats[key] = value
            }

            if(key.includes('Cheese')) {
                cheeses[key] = value
            }

            if(key.includes('Lettuce') || key.includes('Peppers') || key === 'hasCucumbers' || key.includes('Onions') || key === 'hasJalapenos' || key === 'hasPickles' || key === 'hasSpinach' || key === 'hasTomatoes') {
                veggies[key] = value
            }

            if(key.includes('Salt') || key === 'hasOregano' || key === 'hasPepper') {
                seasonings[key] = value
            }

            if(key.includes('Sauce') || key === 'hasMarinara' || key === 'hasMayo' || key.includes('Mustard') || key === 'hasOil' || key.includes('Dressing')) {
                sauces[key] = value
            }

            if (key === 'name' || key === 'isToasted' || key.includes('Sandwich') || key.includes('Price')) {
                otherValues[key] = value
            }
        }

        otherValues['finalPrice'] = otherValues['startingPrice']

        this.setState({
            sandwichDefaults,
            sandwich,
            breads,
            meats,
            cheeses,
            veggies,
            seasonings,
            sauces,
            otherValues,
            render: true,
        })
    }

    UpdateSandwichSizeRadios = (small, medium, large, largerSandwichPrice) => {
        let otherValues = this.state.otherValues
        
        if(small || medium || large) {
            otherValues['isSmallSandwich'] = small;
            otherValues['isMediumSandwich'] = medium;
            otherValues['isLargeSandwich'] = large;
            otherValues['largerSandwichPrice'] = largerSandwichPrice;
            let finalPrice = Number(this.state.otherValues['startingPrice'] + largerSandwichPrice + this.state.otherValues['extraCheesePrice'] + this.state.otherValues['extraMeatPrice']).toFixed(2)
            otherValues['finalPrice'] = Number(finalPrice)

            this.setState({
                otherValues,
            })
        }
        else {
            otherValues['isSmallSandwich'] = true;
            otherValues['isMediumSandwich'] = false;
            otherValues['isLargeSandwich'] = false;
            otherValues['largerSandwichPrice'] = 0.00;

            this.setState({
                otherValues,
            })
        }
    }

    UpdateSandwichBreadRadios = (italian, parm, wheat, white, wrap, none) => {
        let breads = this.state.breads

        if(italian || parm || wheat || white || wrap) {
            breads['hasItalianBread'] = italian;
            breads['hasParmesanOreganoBread'] = parm;
            breads['hasWheatBread'] = wheat;
            breads['hasWhiteBread'] = white;
            breads['hasWrap'] = wrap;
            breads['hasNoBread'] = none

            this.setState({
                breads,
            })
        }
        else {
            breads['hasItalianBread'] = true;
            breads['hasParmesanOreganoBread'] = false;
            breads['hasWheatBread'] = false;
            breads['hasWhiteBread'] = false;
            breads['hasWrap'] = false;
            breads['hasNoBread'] = false;

            this.setState({
                breads,
            })
        }
    }

    UpdateSandwichCheeseCheckboxes = (american, cheddar, mozzarella, pepperjack, provolone, swiss) => {
        let cheeses = this.state.cheeses;
        let otherValues = this.state.otherValues;
        let extraCheesePrice = -0.40
        if(american || cheddar || mozzarella || pepperjack || provolone || swiss) {
            cheeses['hasAmericanCheese'] = american;
            cheeses['hasCheddarCheese'] = cheddar;
            cheeses['hasMozzarellaCheese'] = mozzarella;
            cheeses['hasPepperjackCheese'] = pepperjack;
            cheeses['hasProvoloneCheese'] = provolone;
            cheeses['hasSwissCheese'] = swiss;

            Object.values(cheeses).forEach(function (cheeseValue) {
                if(cheeseValue === true) {
                    extraCheesePrice += .40
                }
            })

            if(extraCheesePrice > 0){
                otherValues['extraCheesePrice'] = extraCheesePrice;
                let finalPrice = Number(this.state.otherValues['startingPrice'] + this.state.otherValues['largerSandwichPrice'] + extraCheesePrice + this.state.otherValues['extraMeatPrice']).toFixed(2)
                otherValues['finalPrice'] = Number(finalPrice)
            }

            else {
                otherValues['extraCheesePrice'] = 0.00
            }

            this.setState({
                cheeses,
                otherValues,
            })
        }
        else {
            cheeses['hasAmericanCheese'] = false;
            cheeses['hasCheddarCheese'] = false;
            cheeses['hasMozzarellaCheese'] = false;
            cheeses['hasPepperjackCheese'] = false;
            cheeses['hasProvoloneCheese'] = false;
            cheeses['hasSwissCheese'] = false;
            otherValues['extraCheesePrice'] = 0.00;

            this.setState({
                cheeses,
                otherValues,
            })
        }
    }

    UpdateSandwichDefaultsCheckboxes = (sandwichDefault) => {
        if (sandwichDefault) {
            this.setState({
                sandwichDefaults: sandwichDefault
            })
        }
    }

    UpdateSandwichMeatCheckboxes = (meats, extraMeatPrice) => {
        if (meats) {
            let otherValues = this.state.otherValues;
            otherValues['extraMeatPrice'] = extraMeatPrice;
            let finalPrice =  Number(this.state.otherValues['startingPrice'] + this.state.otherValues['largerSandwichPrice'] + this.state.otherValues['extraCheesePrice'] + extraMeatPrice).toFixed(2)
            otherValues['finalPrice'] = Number(finalPrice)

            this.setState({
                meats,
                otherValues
            })
        }
    }

    UpdateSandwichToastedCheckbox = (toasted) => {
        if(toasted) {
            let otherValues = this.state.otherValues;
            otherValues['isToasted'] = toasted;
            this.setState({
                otherValues
            })
        }
        else {
            let otherValues = this.state.otherValues;
            otherValues['isToasted'] = false;
            this.setState({
                otherValues
            })
        }
    }

    UpdateSandwichVeggiesCheckboxes = (veggies) => {
        if (veggies) {
            this.setState({
                veggies,
            })
        }
    }

    UpdateSandwichSaucesCheckboxes = (sauces) => {
        if (sauces) {
            this.setState({
                sauces,
            })
        }
    }

    UpdateSandwichSeasoningsCheckboxes = (seasonings) => {
        if (seasonings) {
            this.setState({
                seasonings
            })
        }
    }

    AddSandwichToCart = () => {
        this.setState({
            disableCartButton: true,
        })
        let newSandwich = {
            ...this.state.sandwichDefaults,
            ...this.state.breads,
            ...this.state.meats,
            ...this.state.cheeses,
            ...this.state.veggies,
            ...this.state.seasonings,
            ...this.state.sauces,
            ...this.state.otherValues,
        }
        this.props.itemAddedToCart();
        this.context.addSandwichToCart(newSandwich);

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
                        <div className={classes.categoryBar}>Choose Size:</div>
                        <SandwichSizeRadioButtons updateButtons={this.UpdateSandwichSizeRadios} price={this.state.otherValues['startingPrice']} largerSandwichPrice={this.state.otherValues['largerSandwichPrice']} />

                        <div className={classes.categoryBar}>Choose Bread:</div>
                        <SandwichBreadRadioButtons updateButtons={this.UpdateSandwichBreadRadios} />

                        <div className={classes.categoryBar}>Choose Cheese:</div>
                        <div className={classes.categoryInfoBar}>One cheese comes with the sandwich.  Extra cheeses $.40 each.</div>
                        <SandwichCheeseCheckboxes updateButtons={this.UpdateSandwichCheeseCheckboxes} cheeses={this.state.cheeses} extraCheesePrice={this.state.otherValues['extraCheesePrice']} />

                        {(Object.keys(this.state.sandwichDefaults).length > 0) ? <div className={classes.holderDiv}><div className={classes.categoryBar}>Comes With:</div>
                        <SandwichDefaultsCheckboxes updateButtons={this.UpdateSandwichDefaultsCheckboxes} defaults={this.state.sandwichDefaults} /></div> : null }

                        <div className={classes.categoryBar}>Add Meat:</div>
                        <div className={classes.categoryInfoBar}>Extra meats $.80 each.</div>
                        <SandwichMeatCheckboxes updateButtons={this.UpdateSandwichMeatCheckboxes} defaults={this.state.sandwichDefaults} meats={this.state.meats} extraMeatPrice={this.state.otherValues['extraMeatPrice']} />

                        <div className={classes.categoryBar}>Toasted:</div>
                        <SandwichToastedCheckbox updateButton={this.UpdateSandwichToastedCheckbox} toasted={this.state.otherValues['isToasted']} />

                        <div className={classes.categoryBar}>Add Veggies:</div>
                        <SandwichVeggiesCheckboxes updateButtons={this.UpdateSandwichVeggiesCheckboxes} defaults={this.state.sandwichDefaults} veggies={this.state.veggies} />

                        <div className={classes.categoryBar}>Add Sauces:</div>
                        <SandwichSaucesCheckboxes updateButtons={this.UpdateSandwichSaucesCheckboxes} defaults={this.state.sandwichDefaults} sauces={this.state.sauces} />

                        <div className={classes.categoryBar}>Add Seasonings:</div>
                        <SandwichSeasoningsCheckboxes updateButtons={this.UpdateSandwichSeasoningsCheckboxes} seasonings={this.state.seasonings} />

                        <div className={classes.finalInfo}>Price: ${ this.state.otherValues['finalPrice']}<Button className={classes.addToCartButton} onClick={this.AddSandwichToCart} disabled={this.state.disableCartButton || (this.state.breads['hasItalianBread'] === false && this.state.breads['hasParmesanOreganoBread'] === false && this.state.breads['hasWheatBread'] === false && this.state.breads['hasWhiteBread'] === false && this.state.breads['hasWrap'] === false && this.state.breads['hasNoBread'] === false) }>Add to Cart</Button></div>
                    </div>
                </div>
            )
        }

        else {
            return null
        }

    }
}

CreateSandwich.contextType = AppContext;

export default withStyles(styles)(CreateSandwich);