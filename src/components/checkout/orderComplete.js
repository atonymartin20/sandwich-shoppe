import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

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
        flexDirection: 'column',
        padding: '0px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    span: {
        fontSize: '2.5rem',
        margin: '0 auto',
        marginBottom: '10px',
    },
});

class OrderComplete extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.insideDiv}>
                {this.context.state.delivery ? 
                    <span className={classes.span}>Thank you for shopping at Sandwich Shoppe.  Your order should be delivered in about 30 minutes.</span>
                : null }

                {this.context.state.pickup ? 
                    <span className={classes.span}>Thank you for shopping at Sandwich Shoppe.  Your order will be ready for pickup in 30 minutes.</span>
                : null }

            </div>
        )
    }
}

OrderComplete.contextType = AppContext;

export default withStyles(styles)(OrderComplete);