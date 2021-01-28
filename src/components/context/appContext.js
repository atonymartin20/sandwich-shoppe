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
                                
                            }

                            else if(this.state.orderSaladCount === 8) {

                            }

                            else if(this.state.orderSaladCount === 7) {
                                
                            }

                            else if(this.state.orderSaladCount === 6) {
                                
                            }

                            else if(this.state.orderSaladCount === 5) {
                                
                            }

                            else if(this.state.orderSaladCount === 4) {
                                
                            }

                            else if(this.state.orderSaladCount === 3) {
                                
                            }

                            else if(this.state.orderSaladCount === 2) {
                                
                            }

                            else if(this.state.orderSaladCount === 1) {
                                
                            }

                            else {

                            }
                        }
                        console.log(salad)
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
                                
                            }

                            else if(this.state.orderSideCount === 8) {

                            }

                            else if(this.state.orderSideCount === 7) {
                                
                            }

                            else if(this.state.orderSideCount === 6) {
                                
                            }

                            else if(this.state.orderSideCount === 5) {
                                
                            }

                            else if(this.state.orderSideCount === 4) {
                                
                            }

                            else if(this.state.orderSideCount === 3) {
                                
                            }

                            else if(this.state.orderSideCount === 2) {
                                
                            }

                            else if(this.state.orderSideCount === 1) {
                                
                            }

                            else {

                            }
                        }
                        console.log(side)
                    },

                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}