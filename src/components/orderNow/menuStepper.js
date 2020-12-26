import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Button from "@material-ui/core/Button";

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

class MenuStepper extends React.Component {
    state = {
        step0: true,
        step1: false,
        step2: false,
        step3: false,
        step4: false,
    }

    goBack = (event) => {
        event.preventDefault();
        if(this.state.step4 === true) {
            this.setState({
                step0: true,
                step1: true,
                step2: true,
                step3: true,
                step4: false,
            })
        }
        else if(this.state.step3 === true) {
            this.setState({
                step0: true,
                step1: true,
                step2: true,
                step3: false,
                step4: false,
            })
        }
        else if(this.state.step2 === true) {
            this.setState({
                step0: true,
                step1: true,
                step2: false,
                step3: false,
                step4: false,
            })
        }
        else if(this.state.step1 === true) {
            this.setState({
                step0: true,
                step1: false,
                step2: false,
                step3: false,
                step4: false,
            })
        }
        else {
            this.setState({
                step0: false,
                step1: false,
                step2: false,
                step3: false,
                step4: false,
            })
        }
    }

    render() {
        const { classes } = this.props;


        console.log(this.context.state)
            return (
                <div className={classes.menuDiv}>
                    <Navbar />
                    <div className={classes.menuSpacingDiv}>
                        {this.state.step1 === true ? <Button></Button> : null }

                        {/* Add Stepper Here */}
                        {/* Top Stepper Past Step 1 Back button to push stepper back a page*/}
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

                            Step 4
                            Add another item or checkout
                        */}
                        {/* Below Stepper while item count > 0,  Show cart on bottom of screen*/}

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

MenuStepper.contextType = AppContext;

export default withStyles(styles)(MenuStepper);