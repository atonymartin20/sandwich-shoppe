import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
});

class Checkout extends React.Component {
    state={
    }



    render() {
        const { classes } = this.props;

            return (
                <div>
                </div>
            )
    }
}

Checkout.contextType = AppContext;

export default withStyles(styles)(Checkout);