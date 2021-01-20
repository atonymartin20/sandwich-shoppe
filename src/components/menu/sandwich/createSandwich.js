import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import CloseIcon from '@material-ui/icons/Close';
import SandwichSizeRadioButtons from './sandwichSizeRadioButtons.js';
import SandwichBreadRadioButtons from './sandwichBreadRadioButtons.js';
import SandwichCheeseCheckboxes from './sandwichCheeseCheckboxes.js';
import SandwichDefaultsCheckboxes from './sandwichDefaultsCheckboxes.js';
import SandwichMeatCheckboxes from './sandwichMeatCheckboxes.js';
// import SandwichToastedCheckbox from './sandwichToastedCheckbox.js';
// import SandwichVeggiesCheckboxes from './sandwichVeggiesCheckboxes.js';
// import SandwichSaucesCheckboxes from './sandwichSaucesCheckboxes.js';
// import SandwichSeasoningsCheckboxes from './sandwichSeasoningsCheckboxes.js';

const styles = theme => ({
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
    }

    componentDidMount() {
        let sandwich = this.props.sandwich || {}
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
        })
    }

    UpdateSandwichSizeRadios = (small, medium, large) => {
        let otherValues = this.state.otherValues
        
        if(small || medium || large) {
            otherValues['isSmallSandwich'] = small;
            otherValues['isMediumSandwich'] = medium;
            otherValues['isLargeSandwich'] = large;
            this.setState({
                otherValues,
            })
        }
        else {
            otherValues['isSmallSandwich'] = true;
            otherValues['isMediumSandwich'] = false;
            otherValues['isLargeSandwich'] = false;
            
            this.setState({
                otherValues,
            })
        }
    }

    UpdateSandwichBreadRadios = (italian, parm, wheat, white, wrap) => {
        let breads = this.state.breads

        if(italian || parm || wheat || white || wrap) {
            breads['hasItalianBread'] = italian;
            breads['hasParmesanOreganoBread'] = parm;
            breads['hasWheatBread'] = wheat;
            breads['hasWhiteBread'] = white;
            breads['hasWrap'] = wrap;

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

            this.setState({
                breads,
            })
        }
    }

    UpdateSandwichCheeseCheckboxes = (american, cheddar, mozzarella, pepperjack, provolone, swiss) => {
        let cheeses = this.state.cheeses
        if(american || cheddar || mozzarella || pepperjack || provolone || swiss) {
            cheeses['hasAmericanCheese'] = american;
            cheeses['hasCheddarCheese'] = cheddar;
            cheeses['hasMozzarellaCheese'] = mozzarella;
            cheeses['hasPepperjackCheese'] = pepperjack;
            cheeses['hasProvoloneCheese'] = provolone;
            cheeses['hasSwissCheese'] = swiss;
            this.setState({
                cheeses,
            })
        }
        else {
            cheeses['hasAmericanCheese'] = false;
            cheeses['hasCheddarCheese'] = false;
            cheeses['hasMozzarellaCheese'] = false;
            cheeses['hasPepperjackCheese'] = false;
            cheeses['hasProvoloneCheese'] = false;
            cheeses['hasSwissCheese'] = false;

            this.setState({
                cheeses,
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
    
    render() {
        const { classes } = this.props;

            return (
                <div className={classes.container}>
                    <div className={classes.menuSpacingDiv}>
                        <div className={classes.header}>
                            <h1 className={classes.headerText}>{this.props.title}</h1>
                            <CloseIcon onClick={this.props.close} className={classes.closeIconStyling} />
                        </div>
                        <div className={classes.categoryBar}>Choose Size:</div>
                        <SandwichSizeRadioButtons updateButtons={this.UpdateSandwichSizeRadios} price={this.state.otherValues['startingPrice']} />

                        <div className={classes.categoryBar}>Choose Bread:</div>
                        <SandwichBreadRadioButtons updateButtons={this.UpdateSandwichBreadRadios} />

                        <div className={classes.categoryBar}>Choose Cheese:</div>
                        <div className={classes.categoryInfoBar}>One cheese comes with the sandwich.  Extra cheeses $.40 each.</div>
                        <SandwichCheeseCheckboxes updateButtons={this.UpdateSandwichCheeseCheckboxes} cheeses={this.state.cheeses} />

                        <div className={classes.categoryBar}>Comes With:</div>
                        <SandwichDefaultsCheckboxes updateButtons={this.UpdateSandwichDefaultsCheckboxes} defaults={this.state.sandwichDefaults} />

                        <div className={classes.categoryBar}>Add Meat:</div>
                        <SandwichMeatCheckboxes updateButtons={this.UpdateSandwichMeatCheckboxes} defaults={this.state.sandwichDefaults} meats={this.state.meats} />

                        {/*<SandwichToastedCheckbox updateButton={this.UpdateSandwichToastedCheckbox} toasted={this.state.otherValues['toasted']} />

                        <div className={classes.categoryBar}>Add Veggies:</div>
                        <SandwichVeggiesCheckboxes updateButtons={this.UpdateSandwichVeggiesCheckboxes} defaults={this.state.sandwichDefaults} veggies={this.state.veggies} />

                        <div className={classes.categoryBar}>Add Sauces:</div>
                        <SandwichSaucesCheckboxes updateButtons={this.UpdateSandwichSaucesCheckboxes} defaults={this.state.sandwichDefaults} sauces={this.state.sauces} />

                        <div className={classes.categoryBar}>Add Seasonings:</div>
                        <SandwichSeasoningsCheckboxes updateButtons={this.UpdateSandwichSeasoningsCheckboxes} defaults={this.state.sandwichDefaults} seasonings={this.state.seasonings} /> */}

                        <p className={classes.infoText}>{this.props.text}</p>
                    </div>
                </div>
            )
        }
}

CreateSandwich.contextType = AppContext;

export default withStyles(styles)(CreateSandwich);