import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import LooksOneIcon from '@material-ui/icons/LooksOne';

const styles = theme => ({
    businessAddress: {
        fontSize: '1.5rem',
        fontFamily: 'Roboto, sans-serif',
    },
    businessDistance: {
        fontSize: '1.5rem',
        marginTop: 4,
        color: '#800020',
        fontFamily: 'Roboto, sans-serif',
        marginBottom: 2,
    },
    businessHours: {
        fontSize: '1.5rem',
        marginBottom: 2,
    },
    businessPhone: {
        fontSize: '1.6rem',
        marginTop: 2,
    },
    businessTitle: {
        fontSize: '2.4rem',
        fontStyle: 'bold',
        marginBottom: 5,
        fontFamily: 'Roboto, sans-serif',
    },
    button: {
        margin: '0 auto',
        marginTop: 15,
		color: 'white',
        backgroundColor: '#7600A8',
        height: 60,
		width: '100%',
		maxWidth: '350px',
		fontSize: '2.4rem',
		fontFamily: 'Roboto, sans-serif',
        textTransform: 'none',
        fontWeight: "400",
        border: '2px solid #7600A8',
        borderRadius: '4px',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
		},
	},
    card: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif',
    },
    icon: {
		width: 30,
        height: 30,
        marginRight: 10,
    },
    insideCard: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto, sans-serif',
    },
    location: {
        fontSize: '2.0rem',
        borderBottom: '1px solid black',
        width: '100%',
        marginTop: 10,
        paddingBottom: 5,
        marginBottom: 15,
    },
    orderNowDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Roboto, sans-serif',
    },
    orderNowSpacingDiv: {
        marginTop: 90,
        width: '100%',
        maxWidth: 1400,
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        fontSize: '2.0rem',
        lineHeight: 1.25,
        fontFamily: 'Roboto, sans-serif',
    },
});

class ChooseLocation extends React.Component {
    state = {
        disableButton: false,
        redirect: false,
    }

	ChooseLocation = event => {
		event.preventDefault();
		this.setState({
			disableButton: true,
		})
		this.context.storeBusinessAddress(this.state.address, this.state.city, this.state.stateValue, this.state.zipCode)
		
		setTimeout(() => {this.setState({ redirect: true})}, 500);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.orderNowDiv}>
                <Navbar />
                <div className={classes.orderNowSpacingDiv}>
                    <h1 className={classes.location}>Choose from one of our nearby locations:</h1>
                    <div className={classes.card}>
                        <LooksOneIcon className={classes.icon} />
                        <div className={classes.insideCard}>
                            <p className={classes.businessTitle}>Sandwich Shoppe</p>
                            <p className={classes.businessAddress}>123 Street Rd.</p>
                            <p className={classes.businessAddress}>Your Town, ST 12345</p>
                            <p className={classes.businessDistance}>5.0 miles away</p>
                            <p className={classes.businessHours}>Today's Hours:</p>
                            <p className={classes.businessHours}>10AM - 7PM</p>
                            <p className={classes.businessPhone}>(123)456-7890</p>
                            <button onClick={this.ChooseLocation} disabled={this.state.disableButton} className={classes.button}>Order</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

ChooseLocation.contextType = AppContext;

export default withStyles(styles)(ChooseLocation);