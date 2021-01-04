import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import SandwichImg from '../../images/Sandwiches/sandwichesBackgroundImg.jpg';
import SaladImg from '../../images/Salads/CaesarSalad.jpg';
import SidesImg from '../../images/Sides/Cookies.jpg';
import DrinkImg from '../../images/Drinks/Soda.jpg';
import Sandwiches from './sandwiches.js';
import Salads from './salads.js';
import Sides from './sides.js';
import Drinks from './drinks.js';
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom';

const styles = theme => ({
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
    },
    checkoutDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0px 25px',
    },
    groupDivDrinks: {
        width: '45%',
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
        backgroundImage: `url(${DrinkImg})`,
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivSalads: {
        width: '45%',
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
        backgroundImage: `url(${SaladImg})`,
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivSandwich: {
        width: '45%',
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
        backgroundImage: `url(${SandwichImg})`,
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivSides: {
        width: '45%',
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
        backgroundImage: `url(${SidesImg})`,
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
        fontSize: '3.5rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    menuDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    menuInsideContainer: {
        width: '100%',
        maxWidth: 1400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    menuSpacingDiv: {
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
    menuSpacingOrderDiv: {
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
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class Menu extends React.Component {
    state={
        showIntro: true,
        showSandwiches: false,
        showSalads: false,
        showSides: false,
        showDrinks: false,
        redirect: false,
    }

    chooseSandwiches = (event) => {
        event.preventDefault();
        this.setState({
            showSandwiches: true,
            showIntro: false,
            redirect: false,
        })
    }

    chooseSalads = (event) => {
        event.preventDefault();
        this.setState({
            showSalads: true,
            showIntro: false,
            redirect: false,
        })
    }

    chooseSides = (event) => {
        event.preventDefault();
        this.setState({
            showSides: true,
            showIntro: false,
            redirect: false,
        })
    }

    chooseDrinks = (event) => {
        event.preventDefault();
        this.setState({
            showDrinks: true,
            showIntro: false,
            redirect: false,
        })
    }

    goBack = (event) => {
        event.preventDefault();
        this.setState({
            showIntro: true,
            showSandwiches: false,
            showSalads: false,
            showSides: false,
            showDrinks: false,
            redirect: false,
        })
    }

    checkout = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true,
        })
    }

    render() {
        const { classes } = this.props;
        if(this.props.type === 'order') {
            return (
                <div className={classes.menuDiv}>
                    {this.state.redirect === true ? <Redirect to='/orderNow/checkout' /> : null }
    
                    {this.state.showIntro === true ?
                        <div className={classes.menuSpacingOrderDiv}>
                            {this.context.state.orderItemCount > 0 ? 
                                <div className={classes.checkoutDiv}>
                                    <Button className={classes.checkoutButton} onClick={this.checkout}>
                                        Checkout
                                    </Button>
                                </div> : null 
                            }
                            <h1 className={classes.headerText}>Menu</h1>
                            <div className={classes.menuInsideContainer}>
                                <div className={classes.groupDivSandwich} onClick={this.chooseSandwiches}>
                                    <div className={classes.insideGroupDiv}>
                                        Sandwiches
                                    </div>
                                </div>
                                <div className={classes.groupDivSalads} onClick={this.chooseSalads}>
                                    <div className={classes.insideGroupDiv}>
                                        Salads
                                    </div>
                                </div>
                                <div className={classes.groupDivSides} onClick={this.chooseSides}>
                                    <div className={classes.insideGroupDiv}>
                                        Sides
                                    </div>
                                </div>
                                <div className={classes.groupDivDrinks} onClick={this.chooseDrinks}>
                                    <div className={classes.insideGroupDiv}>
                                        Drinks
                                    </div>
                                </div>
                            </div>
                        </div>
                    : null }
    
                    {this.state.showSandwiches === true ? 
                        <Sandwiches type='order' goBack={this.goBack} />
                    : null }
    
                    {this.state.showSalads === true ? 
                        <Salads type='order' goBack={this.goBack} />
                    : null }
    
                    {this.state.showSides === true ? 
                        <Sides type='order' goBack={this.goBack} />
                    : null }
    
                    {this.state.showDrinks === true ?
                        <Drinks type='order' goBack={this.goBack} />
                    : null }
                </div>
            )
        }
        else {
            return (
                <div className={classes.menuDiv}>
                    <Navbar />
    
                    {this.state.showIntro === true ?
                        <div className={classes.menuSpacingDiv}>
                            <h1 className={classes.headerText}>Menu</h1>
                            <div className={classes.menuInsideContainer}>
                                <div className={classes.groupDivSandwich} onClick={this.chooseSandwiches}>
                                    <div className={classes.insideGroupDiv}>
                                        Sandwiches
                                    </div>
                                </div>
                                <div className={classes.groupDivSalads} onClick={this.chooseSalads}>
                                    <div className={classes.insideGroupDiv}>
                                        Salads
                                    </div>
                                </div>
                                <div className={classes.groupDivSides} onClick={this.chooseSides}>
                                    <div className={classes.insideGroupDiv}>
                                        Sides
                                    </div>
                                </div>
                                <div className={classes.groupDivDrinks} onClick={this.chooseDrinks}>
                                    <div className={classes.insideGroupDiv}>
                                        Drinks
                                    </div>
                                </div>
                            </div>
                        </div>
                    : null }
    
                    {this.state.showSandwiches === true ? 
                        <Sandwiches goBack={this.goBack} />
                    : null }
    
                    {this.state.showSalads === true ? 
                        <Salads goBack={this.goBack} />
                    : null }
    
                    {this.state.showSides === true ? 
                        <Sides goBack={this.goBack} />
                    : null }
    
                    {this.state.showDrinks === true ?
                        <Drinks goBack={this.goBack} />
                    : null }
                </div>
            )
        }
    }
}

Menu.contextType = AppContext;

export default withStyles(styles)(Menu);