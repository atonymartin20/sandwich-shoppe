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
                            if(this.state.orderDrinkCount === 9) {
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

                            else if(this.state.orderDrinkCount === 8) {
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

                            else if(this.state.orderDrinkCount === 7) {
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

                            else if(this.state.orderDrinkCount === 6) {
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

                            else if(this.state.orderDrinkCount === 5) {
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

                            else if(this.state.orderDrinkCount === 4) {
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

                            else if(this.state.orderDrinkCount === 3) {
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

                            else if(this.state.orderDrinkCount === 2) {
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

                            else if(this.state.orderDrinkCount === 1) {
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
                        }
                    },
                    addSaladToCart: (salad) => {
                        if(this.state.orderSaladCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            if(this.state.orderSaladCount === 9) {
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

                            else if(this.state.orderSaladCount === 8) {
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

                            else if(this.state.orderSaladCount === 7) {
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

                            else if(this.state.orderSaladCount === 6) {
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

                            else if(this.state.orderSaladCount === 5) {
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

                            else if(this.state.orderSaladCount === 4) {
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

                            else if(this.state.orderSaladCount === 3) {
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

                            else if(this.state.orderSaladCount === 2) {
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

                            else if(this.state.orderSaladCount === 1) {
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
                        }
                    },
                    addSandwichToCart: (sandwich) => {
                        if(this.state.orderSandwichCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            if(this.state.orderSandwichCount === 9) {
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

                            else if(this.state.orderSandwichCount === 8) {
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

                            else if(this.state.orderSandwichCount === 7) {
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

                            else if(this.state.orderSandwichCount === 6) {
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

                            else if(this.state.orderSandwichCount === 5) {
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

                            else if(this.state.orderSandwichCount === 4) {
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

                            else if(this.state.orderSandwichCount === 3) {
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

                            else if(this.state.orderSandwichCount === 2) {
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

                            else if(this.state.orderSandwichCount === 1) {
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
                        }
                    },
                    addSideToCart: (side) => {
                        if(this.state.orderSideCount >= 10 || this.state.orderItemCount >= 25) {
                            return null;
                        }
                        else {
                            if(this.state.orderSideCount === 9) {
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

                            else if(this.state.orderSideCount === 8) {
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

                            else if(this.state.orderSideCount === 7) {
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

                            else if(this.state.orderSideCount === 6) {
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

                            else if(this.state.orderSideCount === 5) {
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

                            else if(this.state.orderSideCount === 4) {
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

                            else if(this.state.orderSideCount === 3) {
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

                            else if(this.state.orderSideCount === 2) {
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

                            else if(this.state.orderSideCount === 1) {
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