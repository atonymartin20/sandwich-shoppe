import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import BLTImg from '../../images/Sandwiches/BLT.jpg';
import BuffaloChickenImg from '../../images/Sandwiches/BuffaloChicken.jpg';
import ChickenBaconRanchImg from '../../images/Sandwiches/ChickenBaconRanch.jpg';
import ChickenParmImg from '../../images/Sandwiches/ChickenParm.jpg';
import ClubImg from '../../images/Sandwiches/Club.jpg';
import HamAndCheeseImg from '../../images/Sandwiches/HamAndCheese.jpg';
import MeatballImg from '../../images/Sandwiches/Meatball.jpg';
import PhillyCheeseSteakImg from '../../images/Sandwiches/PhillyCheeseSteak.jpg';
import TurkeyImg from '../../images/Sandwiches/Turkey.jpg';
import CreateYourOwnImg from '../../images/Sandwiches/CreateYourOwn.jpg';
import Button from "@material-ui/core/Button";

const styles = theme => ({
    groupDivBLT: {
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
        backgroundImage: `url(${BLTImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivBuffaloChicken: {
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
        backgroundImage: `url(${BuffaloChickenImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChickenBaconRanch: {
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
        backgroundImage: `url(${ChickenBaconRanchImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChickenParm: {
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
        backgroundImage: `url(${ChickenParmImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivClub: {
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
        backgroundImage: `url(${ClubImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivHamAndCheese: {
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
        backgroundImage: `url(${HamAndCheeseImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivMeatball: {
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
        backgroundImage: `url(${MeatballImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivPhillyCheeseSteak: {
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
        backgroundImage: `url(${PhillyCheeseSteakImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivTurkey: {
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
        backgroundImage: `url(${TurkeyImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivCreateYourOwn: {
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
        backgroundImage: `url(${CreateYourOwnImg})`,
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
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class Sandwiches extends React.Component {
    state={
        showIntro: true,
        showSandwiches: false,
        showSalads: false,
        showSides: false,
        showDrinks: false,
    }

    chooseSandwiches = (event) => {
        event.preventDefault();
        this.setState({
            showSandwiches: true,
            showIntro: false,
        })
    }

    render() {
        const { classes } = this.props;
        console.log(this.context.state)
        return (
            <div className={classes.menuDiv}>
                    <div className={classes.menuSpacingDiv}>
                        <Button onClick={this.props.goBack}>Go Back</Button>
                        <h1 className={classes.headerText}>Sandwiches</h1>
                        <div className={classes.menuInsideContainer}>

                            <div className={classes.groupDivBLT} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    BLT
                                </div>
                            </div>

                            <div className={classes.groupDivBuffaloChicken} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Buffalo Chicken
                                </div>
                            </div>

                            <div className={classes.groupDivChickenBaconRanch} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Bacon Ranch
                                </div>
                            </div>

                            <div className={classes.groupDivChickenParm} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Parm
                                </div>
                            </div>

                            <div className={classes.groupDivClub} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Club
                                </div>
                            </div>

                            <div className={classes.groupDivHamAndCheese} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Ham and Cheese
                                </div>
                            </div>

                            <div className={classes.groupDivMeatball} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Meatball
                                </div>
                            </div>

                            <div className={classes.groupDivPhillyCheeseSteak} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Philly Cheese Steak
                                </div>
                            </div>

                            <div className={classes.groupDivTurkey} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Turkey
                                </div>
                            </div>

                            <div className={classes.groupDivCreateYourOwn} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Create Your Own
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

Sandwiches.contextType = AppContext;

export default withStyles(styles)(Sandwiches);