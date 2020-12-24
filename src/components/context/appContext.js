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
        orderSandwichCount: 0,
        drink1Created: false,
        drink1: {
            name: '',
            isSmall: false,
            isLarge: false,
            smallPrice: 1.50,
            largePrice: 2.50,
        },
        sandwich1Created: false,
        sandwich1: {
            name: '',
            // Bread
            hasItalianBread: false,
            hasParmesanOreganoBread: false,
            hasWheatBread: false,
            hasWhiteBread: false,
            hasWrap: false,
            // Meats
            hasChicken: false,
            hasTurkey: false,
            hasHam: false,
            hasSteak: false,
            hasBacon: false,
            hasMeatball: false,
            // Cheese
            hasAmericanCheese: false,
            hasCheddarCheese: false,
            hasMozzarellaCheese: false,
            hasPepperjackCheese: false,
            hasProvoloneCheese: false,
            hasSwissCheese: false,
            // Veggies
            hasBananaPeppers: false,
            hasCucumbers: false,
            hasGreenPeppers: false,
            hasJalapenos: false,
            hasLeafLettuce: false,
            hasPickles: false,
            hasRedOnions: false,
            hasShreddedLettuce: false,
            hasSpinach: false,
            hasTomatoes: false,
            // Seasonings
            hasOregano: false,
            hasPepper: false,
            hasSalt: false,
            hasSaltAndPepper: false,
            // Sauces
            hasBarbecueSauce: false,
            hasBuffaloSauce: false,
            hasMayo: false,
            hasMustard: false,
            hasOil: false,
            hasRanchDressing: false,
            hasSpicyMustard: false,
            hasSrirachaSauce: false,
            hasThousandIslandDressing: false,
            // Other
            isToasted: false,
            isSmallSandwich: false,
            isMediumSandwich: false,
            isLargeSandwich: false,
            price: 0.00,
        },
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
                    }

                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}