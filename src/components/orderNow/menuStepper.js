import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
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
        marginTop: 90,
    },
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class MenuStepper extends React.Component {
    render() {
        const { classes } = this.props;


        console.log(this.context.state)
            return (
                <div className={classes.menuDiv}>
                    <Navbar />
                    <div className={classes.menuSpacingDiv}>
                        <Menu type='order' />
                        {/* Top Stepper Past Step 1 Back button to push stepper back a page*/}
                        {/* 
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
                        {this.context.state.orderItemCount > 0 ? null : null }

                        {/* Below Stepper while item count > 0,  Show cart on bottom of screen*/}
                    </div>
                </div>
            )
    }
}

MenuStepper.contextType = AppContext;

export default withStyles(styles)(MenuStepper);