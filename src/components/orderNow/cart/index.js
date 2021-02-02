import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import ItemTable from './itemTable.js';
import TotalsTable from './totalsTable.js';

const styles = theme => ({
    insideDiv: {
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
        paddingTop: '5px',
    },
    outsideDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderTop: '2px solid black',
        marginTop: 30,
    },
});

class Cart extends React.Component {
    state={
    }

    deleteSandwich = (sandwich, index) => {
        this.context.removeSandwich(sandwich, index)
    }

    deleteSalad = (salad, index) => {
        this.context.removeSalad(salad, index)
    }

    deleteSide = (side, index) => {
        this.context.removeSide(side, index)
    }

    deleteDrink = (drink, index) => {
        this.context.removeDrink(drink, index)
    }

    render() {
        const { classes } = this.props;
        
            return (
                <div className={classes.outsideDiv}>
                    <div className={classes.insideDiv}>
                        {this.context.state.orderItemCount > 0 ? <div>Current Order</div> : <div>Current Order is Empty</div> }

                        {this.context.state.orderSandwichCount > 0 ?
                            <ItemTable sandwiches={this.context.state.sandwiches} sandwichCount={this.context.state.orderSandwichCount} deleteItem={this.deleteSandwich} />
                        : null }

                        {this.context.state.orderSaladCount > 0 ?
                            <ItemTable salads={this.context.state.salads} saladCount={this.context.state.orderSaladCount} deleteItem={this.deleteSalad} />
                        : null }

                        {this.context.state.orderSideCount > 0 ?
                            <ItemTable sides={this.context.state.sides} sideCount={this.context.state.orderSideCount} deleteItem={this.deleteSide} />
                        : null }

                        {this.context.state.orderDrinkCount > 0 ?
                            <ItemTable drinks={this.context.state.drinks} drinkCount={this.context.state.orderDrinkCount} deleteItem={this.deleteDrink} />
                        : null }

                        {this.context.state.orderItemCount > 0 ?
                            <TotalsTable orderPrice={this.context.state.totalOrderPrice} />
                        : null }
                    </div>
                </div>
            )
    }
}

Cart.contextType = AppContext;

export default withStyles(styles)(Cart);