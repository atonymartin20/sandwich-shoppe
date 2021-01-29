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
                                
                            }

                            else if(this.state.orderSandwichCount === 8) {

                            }

                            else if(this.state.orderSandwichCount === 7) {
                                
                            }

                            else if(this.state.orderSandwichCount === 6) {
                                
                            }

                            else if(this.state.orderSandwichCount === 5) {
                                
                            }

                            else if(this.state.orderSandwichCount === 4) {
                                
                            }

                            else if(this.state.orderSandwichCount === 3) {
                                
                            }

                            else if(this.state.orderSandwichCount === 2) {
                                
                            }

                            else if(this.state.orderSandwichCount === 1) {
                                
                            }

                            else {

                            }
                        }
                        console.log(sandwich)
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

                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}