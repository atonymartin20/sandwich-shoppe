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
        drink1Created: false,
        drink2Created: false,
        drink3Created: false,
        drink4Created: false,
        drink5Created: false,
        drink6Created: false,
        drink7Created: false,
        drink8Created: false,
        drink9Created: false,
        drink10Created: false,
        drinks: [],
        salad1Created: false,
        salad2Created: false,
        salad3Created: false,
        salad4Created: false,
        salad5Created: false,
        salad6Created: false,
        salad7Created: false,
        salad8Created: false,
        salad9Created: false,
        salad10Created: false,
        salads: [],
        sandwich1Created: false,
        sandwich2Created: false,
        sandwich3Created: false,
        sandwich4Created: false,
        sandwich5Created: false,
        sandwich6Created: false,
        sandwich7Created: false,
        sandwich8Created: false,
        sandwich9Created: false,
        sandwich10Created: false,
        sandwiches: [],
        side1Created: false,
        side2Created: false,
        side3Created: false,
        side4Created: false,
        side5Created: false,
        side6Created: false,
        side7Created: false,
        side8Created: false,
        side9Created: false,
        side10Created: false,
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
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink10Created = true;
                                let drinks = [...this.state.drinks, drink];

                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink10Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 8) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink9Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink9Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 7) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink8Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink8Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 6) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink7Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink7Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 5) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink6Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink6Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 4) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink5Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink5Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 3) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink4Created = true;
                                let drinks = [...this.state.drinks, drink];

                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink4Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 2) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink3Created = true;
                                let drinks = [...this.state.drinks, drink];

                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink3Created,
                                    drinks,
                                })
                            }

                            else if(this.state.orderDrinkCount === 1) {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink2Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink2Created,
                                    drinks,
                                })
                            }

                            else {
                                let orderDrinkCount = this.state.orderDrinkCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice;
                                let totalDrinkPrice = this.state.totalDrinkPrice;
                                if(drink['isSmall'] === true) {
                                    totalOrderPrice += drink['smallPrice'];
                                    totalDrinkPrice += drink['smallPrice'];
                                }
                                else {
                                    totalOrderPrice += drink['largePrice'];
                                    totalDrinkPrice += drink['largePrice'];
                                }
                                let drink1Created = true;
                                let drinks = [...this.state.drinks, drink];
                                
                                this.setState({
                                    orderDrinkCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalDrinkPrice,
                                    drink1Created,
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
                                let salad10Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad10Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 8) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad9Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad9Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 7) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad8Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad8Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 6) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad7Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad7Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 5) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad6Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad6Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 4) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad5Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad5Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 3) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad4Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad4Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 2) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad3Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad3Created,
                                    salads,
                                })
                            }

                            else if(this.state.orderSaladCount === 1) {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad2Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad2Created,
                                    salads,
                                })
                            }

                            else {
                                let orderSaladCount = this.state.orderSaladCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + salad['price'];
                                let totalSaladPrice = this.state.totalSaladPrice + salad['price'];
                                let salad1Created = true;
                                let salads = [...this.state.salads, salad];
                                
                                this.setState({
                                    orderSaladCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSaladPrice,
                                    salad1Created,
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
                                let sandwich10Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich10Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 8) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich9Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich9Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 7) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich8Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich8Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 6) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich7Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich7Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 5) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich6Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich6Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 4) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich5Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich5Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 3) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich4Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich4Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 2) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich3Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich3Created,
                                    sandwiches,
                                })
                            }

                            else if(this.state.orderSandwichCount === 1) {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich2Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich2Created,
                                    sandwiches,
                                })
                            }

                            else {
                                let orderSandwichCount = this.state.orderSandwichCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + sandwich['finalPrice'];
                                let totalSandwichPrice = this.state.totalSandwichPrice + sandwich['finalPrice'];
                                let sandwich1Created = true;
                                let sandwiches = [...this.state.sandwiches, sandwich];
                                
                                this.setState({
                                    orderSandwichCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSandwichPrice,
                                    sandwich1Created,
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
                                let side10Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side10Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 8) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side9Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side9Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 7) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side8Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side8Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 6) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side7Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side7Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 5) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side6Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side6Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 4) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side5Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side5Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 3) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side4Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side4Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 2) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side3Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side3Created,
                                    sides,
                                })
                            }

                            else if(this.state.orderSideCount === 1) {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side2Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side2Created,
                                    sides,
                                })
                            }

                            else {
                                let orderSideCount = this.state.orderSideCount + 1;
                                let orderItemCount = this.state.orderItemCount + 1;
                                let totalOrderPrice = this.state.totalOrderPrice + side['price'];
                                let totalSidePrice = this.state.totalSidePrice + side['price'];
                                let side1Created = true;
                                let sides = [...this.state.sides, side];
                                
                                this.setState({
                                    orderSideCount,
                                    orderItemCount,
                                    totalOrderPrice,
                                    totalSidePrice,
                                    side1Created,
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
                        let drink1Created = false;
                        let drink2Created = false;
                        let drink3Created = false;
                        let drink4Created = false;
                        let drink5Created = false;
                        let drink6Created = false;
                        let drink7Created = false;
                        let drink8Created = false;
                        let drink9Created = false;
                        let drink10Created = false;
                        let drinks = [];
                        let salad1Created = false;
                        let salad2Created = false;
                        let salad3Created = false;
                        let salad4Created = false;
                        let salad5Created = false;
                        let salad6Created = false;
                        let salad7Created = false;
                        let salad8Created = false;
                        let salad9Created = false;
                        let salad10Created = false;
                        let salads = [];
                        let sandwich1Created = false;
                        let sandwich2Created = false;
                        let sandwich3Created = false;
                        let sandwich4Created = false;
                        let sandwich5Created = false;
                        let sandwich6Created = false;
                        let sandwich7Created = false;
                        let sandwich8Created = false;
                        let sandwich9Created = false;
                        let sandwich10Created = false;
                        let sandwiches = [];
                        let side1Created = false;
                        let side2Created = false;
                        let side3Created = false;
                        let side4Created = false;
                        let side5Created = false;
                        let side6Created = false;
                        let side7Created = false;
                        let side8Created = false;
                        let side9Created = false;
                        let side10Created = false;
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
                            drink1Created,
                            drink2Created,
                            drink3Created,
                            drink4Created,
                            drink5Created,
                            drink6Created,
                            drink7Created,
                            drink8Created,
                            drink9Created,
                            drink10Created,
                            drinks,
                            salad1Created,
                            salad2Created,
                            salad3Created,
                            salad4Created,
                            salad5Created,
                            salad6Created,
                            salad7Created,
                            salad8Created,
                            salad9Created,
                            salad10Created,
                            salads,
                            sandwich1Created,
                            sandwich2Created,
                            sandwich3Created,
                            sandwich4Created,
                            sandwich5Created,
                            sandwich6Created,
                            sandwich7Created,
                            sandwich8Created,
                            sandwich9Created,
                            sandwich10Created,
                            sandwiches,
                            side1Created,
                            side2Created,
                            side3Created,
                            side4Created,
                            side5Created,
                            side6Created,
                            side7Created,
                            side8Created,
                            side9Created,
                            side10Created,
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