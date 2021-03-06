import React from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
    state = {
        address: '',
        city: '',
        stateValue: '',
        zipCode: '',
        business: {
            CityStateZip: '',
            Hours: '',
            Phone: '',
            StreetAddress: '',
            Title: '',
        },
        delivery: false,
        pickup: false,
        orderItemCount: 0,
        orderDrinkCount: 0,
        orderSaladCount: 0,
        orderSandwichCount: 0,
        orderSideCount: 0,
        drinks: [],
        salads: [],
        sandwiches: [],
        sides: [],
        totalOrderPrice: 0,
        totalDrinkPrice: 0,
        totalSaladPrice: 0,
        totalSandwichPrice: 0,
        totalSidePrice: 0,
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    //functions
                    userChosePickup: () => {
                        let pickup = true;
                        let delivery = false;
                        this.setState({
                            pickup,
                            delivery,
                        })
                    },
                    userChoseDelivery: () => {
                        let delivery = true;
                        let pickup = false;
                        this.setState({
                            delivery,
                            pickup
                        })
                    },
                    storeAddress: (address, city, stateValue, zipCode) => {
                        this.setState({
                            address,
                            city,
                            stateValue,
                            zipCode
                        })
                    },
                    storeBusinessAddress: (business) => {
                        this.setState({
                            business
                        })
                    },
                    addDrinkToCart: (drink) => {
                        if(this.state.orderDrinkCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            let orderDrinkCount = this.state.orderDrinkCount + 1;
                            let orderItemCount = this.state.orderItemCount + 1;
                            let totalOrderPrice = this.state.totalOrderPrice + drink['price'];
                            let totalDrinkPrice = this.state.totalDrinkPrice + drink['price'];
                            let drinks = [...this.state.drinks, drink];
                            
                            this.setState({
                                orderDrinkCount,
                                orderItemCount,
                                totalOrderPrice,
                                totalDrinkPrice,
                                drinks,
                            })
                        }
                    },
                    addSaladToCart: (salad) => {
                        if(this.state.orderSaladCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            let orderSaladCount = this.state.orderSaladCount + 1;
                            let orderItemCount = this.state.orderItemCount + 1;
                            let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                            let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                            let salads = [...this.state.salads, salad];
                            
                            this.setState({
                                orderSaladCount,
                                orderItemCount,
                                totalOrderPrice,
                                totalSaladPrice,
                                salads,
                            })
                        }
                    },
                    addSandwichToCart: (sandwich) => {
                        if(this.state.orderSandwichCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            let orderSandwichCount = this.state.orderSandwichCount + 1;
                            let orderItemCount = this.state.orderItemCount + 1;
                            let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                            let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                            let sandwiches = [...this.state.sandwiches, sandwich];
                            
                            this.setState({
                                orderSandwichCount,
                                orderItemCount,
                                totalOrderPrice,
                                totalSandwichPrice,
                                sandwiches,
                            })
                        }
                    },
                    addSideToCart: (side) => {
                        if(this.state.orderSideCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            let orderSideCount = this.state.orderSideCount + 1;
                            let orderItemCount = this.state.orderItemCount + 1;
                            let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                            let totalSidePrice = this.state.totalSidePrice + side['price'];
                            let sides = [...this.state.sides, side];
                            
                            this.setState({
                                orderSideCount,
                                orderItemCount,
                                totalOrderPrice,
                                totalSidePrice,
                                sides,
                            })
                        }
                    },
                    clearCart: () => {
                        let orderItemCount = 0;
                        let orderDrinkCount = 0;
                        let orderSaladCount = 0;
                        let orderSandwichCount = 0;
                        let orderSideCount = 0;
                        let drinks = [];
                        let salads = [];
                        let sandwiches = [];
                        let sides = [];
                        let totalOrderPrice = 0;
                        let totalDrinkPrice = 0;
                        let totalSaladPrice = 0;
                        let totalSandwichPrice = 0;
                        let totalSidePrice = 0;

                        this.setState({
                            orderItemCount,
                            orderDrinkCount,
                            orderSaladCount,
                            orderSandwichCount,
                            orderSideCount,
                            drinks,
                            salads,
                            sandwiches,
                            sides,
                            totalOrderPrice,
                            totalDrinkPrice,
                            totalSaladPrice,
                            totalSandwichPrice,
                            totalSidePrice,
                        })
                    },
                    removeDrink: (drink, index) => {
                        let drinks = this.state.drinks;
                        let orderItemCount = this.state.orderItemCount - 1;
                        let orderDrinkCount = this.state.orderDrinkCount - 1;
                        let totalOrderPrice = this.state.totalOrderPrice - drink['price'];
                        let totalDrinkPrice = this.state.totalDrinkPrice - drink['price'];

                        if(drinks[index] === drink) {
                            drinks.splice([index], 1)
                        }
                        this.setState({
                            orderItemCount,
                            orderDrinkCount,
                            totalOrderPrice,
                            totalDrinkPrice,
                            drinks,
                        })
                    },
                    removeSalad: (salad, index) => {
                        let salads = this.state.salads;
                        let orderItemCount = this.state.orderItemCount - 1;
                        let orderSaladCount = this.state.orderSaladCount - 1;
                        let totalOrderPrice = this.state.totalOrderPrice - salad['price'];
                        let totalSaladPrice = this.state.totalSaladPrice - salad['price'];

                        if(salads[index] === salad) {
                            salads.splice([index], 1)
                        }
                        this.setState({
                            orderItemCount,
                            orderSaladCount,
                            totalOrderPrice,
                            totalSaladPrice,
                            salads,
                        })
                    },
                    removeSandwich: (sandwich, index) => {
                        let sandwiches = this.state.sandwiches
                        let orderItemCount = this.state.orderItemCount - 1;
                        let orderSandwichCount = this.state.orderSandwichCount - 1;
                        let totalOrderPrice = this.state.totalOrderPrice - sandwich['finalPrice'];
                        let totalSandwichPrice = this.state.totalSandwichPrice - sandwich['finalPrice'];

                        if(sandwiches[index] === sandwich) {
                            sandwiches.splice([index], 1)
                        }
                        this.setState({
                            orderItemCount,
                            orderSandwichCount,
                            totalOrderPrice,
                            totalSandwichPrice,
                            sandwiches,
                        })
                    },
                    removeSide: (side, index) => {
                        let sides = this.state.sides
                        let orderItemCount = this.state.orderItemCount - 1;
                        let orderSideCount = this.state.orderSideCount - 1;
                        let totalOrderPrice = this.state.totalOrderPrice - side['price'];
                        let totalSidePrice = this.state.totalSidePrice - side['price'];

                        if(sides[index] === side) {
                            sides.splice([index], 1)
                        }
                        this.setState({
                            orderItemCount,
                            orderSideCount,
                            totalOrderPrice,
                            totalSidePrice,
                            sides,
                        })
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}