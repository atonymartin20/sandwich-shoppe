import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import BuffaloChickenSaladImg from '../../images/Salads/BuffaloChickenSalad.jpg';
import CaesarSaladImg from '../../images/Salads/CaesarSalad.jpg';
import ChickenCaesarSaladImg from '../../images/Salads/ChickenCaesarSalad.jpg';
import GardenSaladImg from '../../images/Salads/GardenSalad.jpg';
import SideSaladImg from '../../images/Salads/SideSalad.jpg';

const styles = theme => ({
    groupDivBuffaloChickenSalad: {
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
        backgroundImage: `url(${BuffaloChickenSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivCaesarSalad: {
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
        backgroundImage: `url(${CaesarSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChickenCaesarSalad: {
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
        backgroundImage: `url(${ChickenCaesarSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivGardenSalad: {
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
        backgroundImage: `url(${GardenSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivSideSalad: {
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
        backgroundImage: `url(${SideSaladImg})`,
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

class Salads extends React.Component {
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
                        <h1 className={classes.headerText}>Salads</h1>
                        <div className={classes.menuInsideContainer}>

                            <div className={classes.groupDivBuffaloChickenSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Buffalo Chicken Salad
                                </div>
                            </div>

                            <div className={classes.groupDivCaesarSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Caesar Salad
                                </div>
                            </div>

                            <div className={classes.groupDivChickenCaesarSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Caesar Salad
                                </div>
                            </div>

                            <div className={classes.groupDivGardenSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Garden Salad
                                </div>
                            </div>

                            <div className={classes.groupDivSideSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Side Salad
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}

Salads.contextType = AppContext;

export default withStyles(styles)(Salads);