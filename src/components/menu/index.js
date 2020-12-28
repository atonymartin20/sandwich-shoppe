import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import SandwichImg from '../../images/homepage-sub.jpg';
import SaladImg from '../../images/saladBackgroundImg.jpg';
import DrinkImg from '../../images/drinksBackgroundImg.jpg';
import SidesImg from '../../images/cookiesBackgroundImg.jpg';

const styles = theme => ({
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
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class Menu extends React.Component {
    render() {
        const { classes } = this.props;
        console.log(this.context.state)
        return (
            <div className={classes.menuDiv}>
                <Navbar />
                <div className={classes.menuSpacingDiv}>
                    <h1 className={classes.headerText}>Menu</h1>
                    <div className={classes.menuInsideContainer}>
                        <div className={classes.groupDivSandwich}>
                            <div className={classes.insideGroupDiv}>
                                Sandwiches
                            </div>
                        </div>
                        <div className={classes.groupDivSalads}>
                            <div className={classes.insideGroupDiv}>
                                Salads
                            </div>
                        </div>
                        <div className={classes.groupDivSides}>
                            <div className={classes.insideGroupDiv}>
                                Sides
                            </div>
                        </div>
                        <div className={classes.groupDivDrinks}>
                            <div className={classes.insideGroupDiv}>
                                Drinks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Menu.contextType = AppContext;

export default withStyles(styles)(Menu);