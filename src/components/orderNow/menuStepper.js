import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Button from "@material-ui/core/Button";
import Menu from '../menu';

const styles = theme => ({
    menuDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    menuSpacingDiv: {
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
        backgroundColor: 'blue',
    },
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class MenuStepper extends React.Component {
    state = {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
    }

    goBack = (event) => {
        event.preventDefault();
        if(this.state.step4 === true) {
            this.setState({
                step1: true,
                step2: true,
                step3: true,
                step4: false,
            })
        }
        else if(this.state.step3 === true) {
            this.setState({
                step1: true,
                step2: true,
                step3: false,
                step4: false,
            })
        }
        else if(this.state.step2 === true) {
            this.setState({
                step1: true,
                step2: false,
                step3: false,
                step4: false,
            })
        }
        else {
            console.log('Button logic broke.')
        }
    }

    render() {
        const { classes } = this.props;


        console.log(this.context.state)
            return (
                <div className={classes.menuDiv}>
                    <Navbar />
                    <div className={classes.menuSpacingDiv}>
                        {this.state.step2 === true ? <Button></Button> : null }

                        {this.state.step1 === true ? <Menu /> : null}
                        {/* Add Stepper Here */}
                        {/* Top Stepper Past Step 1 Back button to push stepper back a page*/}
                        {/* 
                            Step 1
                            4 Div Boxes  (100px from top) (Split 2 and 2 accept for mobile)
                            Top Left Sandwiches
                            Top Right Salads
                            Bottom Left: Sides
                            Bottom Right: Drinks
                            Pass functions for choice and passing step change


                            Step 2
                            More Div Boxes for inside items
                            Sandwiches has different sandwich types(Meatball etc)
                            Salads has different salad types
                            Sides has cookies, cheesebread, chips
                            Drinks has ... drinks
                            Again passing functions to components

                            Step 3:
                            If Sandwich(
                                Make alterations to sandwich
                                Choose Size and Bread
                                Extra toppings etc
                            )

                            If Salad()
                                Choose Dressing

                            If Side()
                                Add to cart button

                            If Drink()
                                Choose flavour of soda

                            Bottom of Page
                            Add to Cart

                            Step 4
                            Add another item or checkout

                            If add another item() Revert to step 1
                            If checkout go to checkout
                        */}
                        {/* Below Stepper while item count > 0,  Show cart on bottom of screen*/}
                    </div>
                </div>
            )
    }
}

MenuStepper.contextType = AppContext;

export default withStyles(styles)(MenuStepper);