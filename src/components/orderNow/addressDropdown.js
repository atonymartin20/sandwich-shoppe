import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Redirect } from 'react-router-dom';

const styles = (theme) => ({
	addressDropdownDiv: {
        width: '100%',
        maxWidth: 600,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
        flexDirection: 'column',
        padding: 10,
	},
	form: {
        width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	icon: {
		width: 20,
		height: 20,
		marginRight: 5,
	},
	input: {
		width: '100%',
		fontSize: '1.8rem',
		padding: '5px',
		marginBottom: '10px',
		fontFamily: 'Roboto, sans-serif',
		border: '1px solid #767676',
		borderRadius: 2,
	},
	menuItem: {
		fontSize: '1.8rem',
		fontFamily: 'Roboto, sans-serif',
		paddingLeft: '10px',
	},
	menuItemEmpty: {
		fontSize: '1.8rem',
		fontFamily: 'Roboto, sans-serif',
		paddingLeft: '10px',
		display: 'none',
	},
	select: {
		marginBottom: 10,
		fontSize: '1.8rem',
		fontFamily: 'Roboto, sans-serif',
		border: '1px solid #767676',
		padding: '5px',
		paddingLeft: '10px',
		borderRadius: 2,
		width: '100%',
	},
	submitButton: {
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
		"&:disabled": {
			backgroundColor: '#EAECED',
			border: '2px solid #CCCECE',
			color: '#A8AAAA'
		},
	},
});

class AddressDropdown extends React.Component {
	state = {
		address: this.context.state.address || '',
		city: this.context.state.city || '',
		stateValue: this.context.state.stateValue || 'Select State',
		zipCode: this.context.state.zipCode || '',
		deliveryRedirect: false,
		pickupRedirect: false,
		disableButton: false,
	};

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({ [target.name]: target.value });
	};
	
	SelectHandler = event => {
		event.preventDefault();
        const target = event.target;
        this.setState({ stateValue: target.value });
	}

	PickupSubmit = event => {
		event.preventDefault();
		this.setState({
			disableButton: true,
		})
		this.context.storeAddress("", this.state.city, this.state.stateValue, this.state.zipCode)
		setTimeout(() => {this.setState({ pickupRedirect: true})}, 500);
	}

	DeliverySubmit = event => {
		event.preventDefault();
		this.setState({
			disableButton: true,
		})
		this.context.storeAddress(this.state.address, this.state.city, this.state.stateValue, this.state.zipCode)
		
		setTimeout(() => {this.setState({ deliveryRedirect: true})}, 500);
	}

	render() {
		const { classes } = this.props;
		if (this.props.type === 'Delivery') {
			return (
				<div className={classes.addressDropdownDiv}>
					{this.state.deliveryRedirect === true ? <Redirect to='/orderNow/chooseLocation' /> : null }
					<form className={classes.form}>
							<Input className={classes.input} type='text' id='address' name='address' placeholder='Street Address' onChange={this.InputHandler} disableUnderline value={this.state.address} />
							<Input className={classes.input} type='text' id='city' name='city' placeholder='City' onChange={this.InputHandler} disableUnderline value={this.state.city} />
							<Select defaultValue={this.state.stateValue ?? "Select State"} value={this.state.stateValue ?? "Select State"} className={classes.select} onChange={this.SelectHandler} disableUnderline IconComponent={() => (<ExpandMoreIcon className={classes.icon} />)} style={{ color: this.state.stateValue === "Select State" ? '#AEB0B2' : 'black'}}>
								<MenuItem className={classes.menuItemEmpty} value="Select State" disabled selected hidden>Select State</MenuItem>
								<MenuItem className={classes.menuItem} value="AL">Alabama</MenuItem>
								<MenuItem className={classes.menuItem} value="AZ">Arizona</MenuItem>
								<MenuItem className={classes.menuItem} value="AR">Arkansas</MenuItem>
								<MenuItem className={classes.menuItem} value="CA">California</MenuItem>
								<MenuItem className={classes.menuItem} value="CO">Colorado</MenuItem>
								<MenuItem className={classes.menuItem} value="DE">Delaware</MenuItem>
								<MenuItem className={classes.menuItem} value="DC">District Of Columbia</MenuItem>
								<MenuItem className={classes.menuItem} value="FL">Florida</MenuItem>
								<MenuItem className={classes.menuItem} value="GA">Georgia</MenuItem>
								<MenuItem className={classes.menuItem} value="ID">Idaho</MenuItem>
								<MenuItem className={classes.menuItem} value="IL">Illinois</MenuItem>
								<MenuItem className={classes.menuItem} value="IN">Indiana</MenuItem>
								<MenuItem className={classes.menuItem} value="IA">Iowa</MenuItem>
								<MenuItem className={classes.menuItem} value="KS">Kansas</MenuItem>
								<MenuItem className={classes.menuItem} value="KY">Kentucky</MenuItem>
								<MenuItem className={classes.menuItem} value="LA">Louisiana</MenuItem>
								<MenuItem className={classes.menuItem} value="MD">Maryland</MenuItem>
								<MenuItem className={classes.menuItem} value="MA">Massachusetts</MenuItem>
								<MenuItem className={classes.menuItem} value="MI">Michigan</MenuItem>
								<MenuItem className={classes.menuItem} value="MN">Minnesota</MenuItem>
								<MenuItem className={classes.menuItem} value="MS">Mississippi</MenuItem>
								<MenuItem className={classes.menuItem} value="MO">Missouri</MenuItem>
								<MenuItem className={classes.menuItem} value="MT">Montana</MenuItem>
								<MenuItem className={classes.menuItem} value="NE">Nebraska</MenuItem>
								<MenuItem className={classes.menuItem} value="NV">Nevada</MenuItem>
								<MenuItem className={classes.menuItem} value="NJ">New Jersey</MenuItem>
								<MenuItem className={classes.menuItem} value="NM">New Mexico</MenuItem>
								<MenuItem className={classes.menuItem} value="NY">New York</MenuItem>
								<MenuItem className={classes.menuItem} value="NC">North Carolina</MenuItem>
								<MenuItem className={classes.menuItem} value="ND">North Dakota</MenuItem>
								<MenuItem className={classes.menuItem} value="OH">Ohio</MenuItem>
								<MenuItem className={classes.menuItem} value="OK">Oklahoma</MenuItem>
								<MenuItem className={classes.menuItem} value="OR">Oregon</MenuItem>
								<MenuItem className={classes.menuItem} value="PA">Pennsylvania</MenuItem>
								<MenuItem className={classes.menuItem} value="SC">South Carolina</MenuItem>
								<MenuItem className={classes.menuItem} value="SD">South Dakota</MenuItem>
								<MenuItem className={classes.menuItem} value="TN">Tennessee</MenuItem>
								<MenuItem className={classes.menuItem} value="TX">Texas</MenuItem>
								<MenuItem className={classes.menuItem} value="UT">Utah</MenuItem>
								<MenuItem className={classes.menuItem} value="VA">Virginia</MenuItem>
								<MenuItem className={classes.menuItem} value="WA">Washington</MenuItem>
								<MenuItem className={classes.menuItem} value="WV">West Virginia</MenuItem>
								<MenuItem className={classes.menuItem} value="WI">Wisconsin</MenuItem>
								<MenuItem className={classes.menuItem} value="WY">Wyoming</MenuItem>
							</Select>
							<Input className={classes.input} type='text' id='zipCode' inputProps={{ maxLength: 5 }} name='zipCode' placeholder='Zipcode' onChange={this.InputHandler} disableUnderline value={this.state.zipCode} />
						<button onClick={this.DeliverySubmit} className={classes.submitButton} disabled={this.state.zipCode === '' || this.state.city === '' || this.state.stateValue ==='' || this.state.disableButton}>
							Continue
						</button>
					</form>
				</div>
			);
		} else {
			return (
				<div className={classes.addressDropdownDiv}>
					{this.state.pickupRedirect === true ? <Redirect to='/orderNow/chooseLocation' /> : null }
					<form className={classes.form}>
					<Input className={classes.input} type='text' id='city' name='city' placeholder='City' onChange={this.InputHandler} disableUnderline value={this.state.city} />
					<Select defaultValue={this.state.stateValue ?? "Select State"} value={this.state.stateValue ?? "Select State"} className={classes.select} onChange={this.SelectHandler} disableUnderline IconComponent={() => (<ExpandMoreIcon className={classes.icon} />)} style={{ color: this.state.stateValue === "Select State" ? '#AEB0B2' : 'black'}}>
								<MenuItem className={classes.menuItemEmpty} value="Select State" disabled selected hidden>Select State</MenuItem>
								<MenuItem className={classes.menuItem} value="AL">Alabama</MenuItem>
								<MenuItem className={classes.menuItem} value="AZ">Arizona</MenuItem>
								<MenuItem className={classes.menuItem} value="AR">Arkansas</MenuItem>
								<MenuItem className={classes.menuItem} value="CA">California</MenuItem>
								<MenuItem className={classes.menuItem} value="CO">Colorado</MenuItem>
								<MenuItem className={classes.menuItem} value="DE">Delaware</MenuItem>
								<MenuItem className={classes.menuItem} value="DC">District Of Columbia</MenuItem>
								<MenuItem className={classes.menuItem} value="FL">Florida</MenuItem>
								<MenuItem className={classes.menuItem} value="GA">Georgia</MenuItem>
								<MenuItem className={classes.menuItem} value="ID">Idaho</MenuItem>
								<MenuItem className={classes.menuItem} value="IL">Illinois</MenuItem>
								<MenuItem className={classes.menuItem} value="IN">Indiana</MenuItem>
								<MenuItem className={classes.menuItem} value="IA">Iowa</MenuItem>
								<MenuItem className={classes.menuItem} value="KS">Kansas</MenuItem>
								<MenuItem className={classes.menuItem} value="KY">Kentucky</MenuItem>
								<MenuItem className={classes.menuItem} value="LA">Louisiana</MenuItem>
								<MenuItem className={classes.menuItem} value="MD">Maryland</MenuItem>
								<MenuItem className={classes.menuItem} value="MA">Massachusetts</MenuItem>
								<MenuItem className={classes.menuItem} value="MI">Michigan</MenuItem>
								<MenuItem className={classes.menuItem} value="MN">Minnesota</MenuItem>
								<MenuItem className={classes.menuItem} value="MS">Mississippi</MenuItem>
								<MenuItem className={classes.menuItem} value="MO">Missouri</MenuItem>
								<MenuItem className={classes.menuItem} value="MT">Montana</MenuItem>
								<MenuItem className={classes.menuItem} value="NE">Nebraska</MenuItem>
								<MenuItem className={classes.menuItem} value="NV">Nevada</MenuItem>
								<MenuItem className={classes.menuItem} value="NJ">New Jersey</MenuItem>
								<MenuItem className={classes.menuItem} value="NM">New Mexico</MenuItem>
								<MenuItem className={classes.menuItem} value="NY">New York</MenuItem>
								<MenuItem className={classes.menuItem} value="NC">North Carolina</MenuItem>
								<MenuItem className={classes.menuItem} value="ND">North Dakota</MenuItem>
								<MenuItem className={classes.menuItem} value="OH">Ohio</MenuItem>
								<MenuItem className={classes.menuItem} value="OK">Oklahoma</MenuItem>
								<MenuItem className={classes.menuItem} value="OR">Oregon</MenuItem>
								<MenuItem className={classes.menuItem} value="PA">Pennsylvania</MenuItem>
								<MenuItem className={classes.menuItem} value="SC">South Carolina</MenuItem>
								<MenuItem className={classes.menuItem} value="SD">South Dakota</MenuItem>
								<MenuItem className={classes.menuItem} value="TN">Tennessee</MenuItem>
								<MenuItem className={classes.menuItem} value="TX">Texas</MenuItem>
								<MenuItem className={classes.menuItem} value="UT">Utah</MenuItem>
								<MenuItem className={classes.menuItem} value="VA">Virginia</MenuItem>
								<MenuItem className={classes.menuItem} value="WA">Washington</MenuItem>
								<MenuItem className={classes.menuItem} value="WV">West Virginia</MenuItem>
								<MenuItem className={classes.menuItem} value="WI">Wisconsin</MenuItem>
								<MenuItem className={classes.menuItem} value="WY">Wyoming</MenuItem>
							</Select>
							<Input className={classes.input} type='text' id='zipCode' inputProps={{ maxLength: 5 }} name='zipCode' placeholder='Zipcode' onChange={this.InputHandler} disableUnderline value={this.state.zipCode} />
						<button onClick={this.PickupSubmit} className={classes.submitButton} disabled={this.state.zipCode === '' || this.state.city === '' || this.state.stateValue ===''  || this.state.disableButton}>
							Continue
						</button>
					</form>
				</div>
			);
		}
	}
}

AddressDropdown.contextType = AppContext;

export default withStyles(styles)(AddressDropdown);
