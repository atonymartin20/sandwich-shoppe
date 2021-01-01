import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
    menuDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
        if(this.props.type === 'order') {
            return (
                <div className={classes.menuDiv}>
                    <Navbar />
                    <div className={classes.menuSpacingDiv}>
                        {/* Add Stepper Here */}
                        {/* 
                            Step 1
                            4 Boxes
                            Top Left Sandwiches
                            Top Right Salads
                            Bottom Left: Sides
                            Bottom Right: Drinks
                            
                            Step 2
                            Boxes for inside things

                            Step 3
                            Alteration page
                            Bottom of page Add to Cart

                            Back to Step 1
                        
                        */}

                        <h1>Menu:</h1>
                        <div className={classes.menuInsideContiner}>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.menuDiv}>
                    <Navbar />
                    <div className={classes.menuSpacingDiv}>
                        <h1>Menu:</h1>
                        <div className={classes.menuInsideContiner}>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

Menu.contextType = AppContext;

export default withStyles(styles)(Menu);