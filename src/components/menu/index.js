import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Sandwich from '../../images/homepage-sub.jpg';

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
        [theme.breakpoints.down(550)]: {
            width: '100%',
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
        [theme.breakpoints.down(550)]: {
            width: '100%',
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
        backgroundImage: `url(${Sandwich})`,
        [theme.breakpoints.down(550)]: {
            width: '100%',
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
        [theme.breakpoints.down(550)]: {
            width: '100%',
        }
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
        padding: 20,
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
                    <h1>Menu:</h1>
                    <div className={classes.menuInsideContainer}>
                        <div className={classes.groupDivSandwich}>
                            <div className={classes.insideGroupDiv}>
                                Sandwiches
                            </div>
                        </div>
                        <div className={classes.groupDivSalads}>Salads</div>
                        <div className={classes.groupDivSides}>Sides</div>
                        <div className={classes.groupDivDrinks}>Drinks</div>
                    </div>
                </div>
            </div>
        )
    }
}

Menu.contextType = AppContext;

export default withStyles(styles)(Menu);