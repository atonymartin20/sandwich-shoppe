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
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}