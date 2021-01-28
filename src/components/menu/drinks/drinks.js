import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import LemonadeImg from '../../../images/Drinks/Lemonade.jpg';
import SodaImg from '../../../images/Drinks/Soda.jpg';
import TeaImg from '../../../images/Drinks/Tea.jpg';
import Button from "@material-ui/core/Button";
import DrinkInfo from './drinkInfo.js';
import CreateDrink from './createDrink.js';

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
        width: '200px',
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
        width: '200px',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginBottom: '10px',
        },
    },
    drinksDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    drinksInsideContainer: {
        width: '100%',
        maxWidth: 1400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    drinksSpacingDiv: {
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
        padding: '20px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    drinksSpacingOrderDiv: {
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
    goBackDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0px 25px',
        [theme.breakpoints.down(550)]: {
            padding: '0px',    
        },
    },
    groupDivLemonade: {
        width: '30%',
        minWidth: 200,
        border: '1px solid black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        minHeight: 200,
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${LemonadeImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivSoda: {
        width: '30%',
        minWidth: 200,
        border: '1px solid black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        minHeight: 200,
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${SodaImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivTea: {
        width: '30%',
        minWidth: 200,
        border: '1px solid black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        minHeight: 200,
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${TeaImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    headerText: {
        fontSize: '3.5rem',
        borderBottom: '2px solid black',
    },
    insideGroupDiv: {
        backgroundColor: 'rgba(43, 43, 43, 0.1)',
        width: '100%',
        height: '100%',
        textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        fontSize: '4.0rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
    },
});

class Drinks extends React.Component {
    state={
        moreInfoLemonade: false,
        moreInfoSoda: false,
        moreInfoTea: false,
        createDrink: false,
        drink: {
            name: '',
            type: '',
            isSmall: true,
            isLarge: false,
            smallPrice: 1.49,
            largePrice: 2.49,
        }
    }

    openMoreInfoLemonade = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoLemonade: true,
        })
    }

    openMoreInfoSoda = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoSoda: true,
        })
    }

    openMoreInfoTea = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoTea: true,
        })
    }

    closeMoreInfo = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoLemonade: false,
            moreInfoSoda: false,
            moreInfoTea: false,
        })
    }

    createDrink = (drink) => {
        let newDrink = this.state.drink;
        Object.keys(newDrink).forEach(function (newDrinkKey) {
            Object.keys(drink).forEach(function (drinkKey) {
                if(drinkKey === newDrinkKey) {
                    newDrink[newDrinkKey] = drink[drinkKey]
                }
            })
        });
        
        newDrink['name'] = `Small ${newDrink['type']}`

        this.setState({
            drink: newDrink,
            createDrink: true,
        })
    }

    closeMenu = (event) => {
        event.preventDefault();
        let drink = {
            name: '',
            type: '',
            isSmall: true,
            isLarge: false,
            smallPrice: 1.49,
            largePrice: 2.49,
        }

        this.setState({
            createDrink: false,
            drink,
        })
    }

    render() {
        const { classes } = this.props;

        if(this.props.type === 'order') {
            return (
                <div className={classes.drinksDiv}>
                    {this.state.createDrink === true ? <CreateDrink itemAddedToCart={this.props.itemAddedToCart} title={this.state.drink['type']} drink={this.state.drink} close={this.closeMenu} /> : null }

                    <div className={classes.drinksSpacingOrderDiv}>
                        {this.context.state.orderItemCount > 0 ? 
                            <div className={classes.buttonContainerDiv}>
                                <Button className={classes.backButton} onClick={this.props.goBack}>
                                    Go Back
                                </Button>
                                <Button className={classes.checkoutButton} onClick={this.props.goToCheckout}>
                                    Checkout
                                </Button>
                            </div> : 
                            <div className={classes.goBackDiv}>
                                <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                            </div>
                        }
                        <h1 className={classes.headerText}>Drinks</h1>
                        <div className={classes.drinksInsideContainer}>
    
                            <div className={classes.groupDivLemonade} onClick={() => {this.createDrink({type: 'Lemonade', name: 'Lemonade'})}} >
                                <div className={classes.insideGroupDiv}>
                                    Lemonade
                                </div>
                            </div>
    
                            <div className={classes.groupDivSoda} onClick={() => {this.createDrink({type: 'Soda'})}} >
                                <div className={classes.insideGroupDiv}>
                                    Soda
                                </div>
                            </div>
    
                            <div className={classes.groupDivTea} onClick={() => {this.createDrink({type: 'Tea'})}} >
                                <div className={classes.insideGroupDiv}>
                                    Tea
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.drinksDiv}>
                    <div className={classes.drinksSpacingDiv}>
                        {this.state.moreInfoLemonade === true ? <DrinkInfo close={this.closeMoreInfo} name='Lemonade' text='Homemade lemonade' img={LemonadeImg} /> : null }
                        {this.state.moreInfoSoda === true ? <DrinkInfo close={this.closeMoreInfo} name='Soda' text='Pepsi, Diet Pepsi, Dr. Pepper, Diet Dr. Pepper, Sierra Mist, Mountain Dew, and MUG Root Beer' img={SodaImg} /> : null }
                        {this.state.moreInfoTea === true ? <DrinkInfo close={this.closeMoreInfo} name='Tea' text='Sweet or unsweet tea' img={TeaImg} /> : null }

                        <div className={classes.goBackDiv}>
                            <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                        </div>

                        <h1 className={classes.headerText}>Drinks</h1>
                        <div className={classes.drinksInsideContainer}>
    
                            <div className={classes.groupDivLemonade} onClick={this.openMoreInfoLemonade}>
                                <div className={classes.insideGroupDiv}>
                                    Lemonade
                                </div>
                            </div>
    
                            <div className={classes.groupDivSoda} onClick={this.openMoreInfoSoda}>
                                <div className={classes.insideGroupDiv}>
                                    Soda
                                </div>
                            </div>
    
                            <div className={classes.groupDivTea} onClick={this.openMoreInfoTea}>
                                <div className={classes.insideGroupDiv}>
                                    Tea
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

Drinks.contextType = AppContext;

export default withStyles(styles)(Drinks);