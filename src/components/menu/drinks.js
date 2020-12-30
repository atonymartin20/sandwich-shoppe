import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import LemonadeImg from '../../images/Drinks/Lemonade.jpg';
import SodaImg from '../../images/Drinks/Soda.jpg';
import TeaImg from '../../images/Drinks/Tea.jpg';

const styles = theme => ({
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

class Drinks extends React.Component {
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
                        <h1 className={classes.headerText}>Drinks</h1>
                        <div className={classes.menuInsideContainer}>

                            <div className={classes.groupDivLemonade} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Lemonade
                                </div>
                            </div>

                            <div className={classes.groupDivSoda} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Soda
                                </div>
                            </div>

                            <div className={classes.groupDivTea} onClick={this.chooseSandwiches}>
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

Drinks.contextType = AppContext;

export default withStyles(styles)(Drinks);