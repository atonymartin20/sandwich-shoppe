import React from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
    state = {

    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    //functions
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}