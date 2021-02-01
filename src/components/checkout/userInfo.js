import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    button: {
        backgroundColor: '#7600A8',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid# 7600A8',
        borderRadius: '10px',
        width: '350px',
        textTransform: 'none',
        margin: '0 auto',
        marginTop: '10px',
        marginBottom: '10px',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginLeft: 0,
            marginTop: '10px',
            marginBottom: '10px',
        },
        [theme.breakpoints.down(400)]: {
            fontSize: '2.25rem',
        },
    },
    dualTextfieldDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    inputHalfSize: {
        marginBottom: 10,
        width: '100%',
        maxWidth: '500px',
        [theme.breakpoints.down(1050)]: {
            maxWidth: '400px',
        },
        [theme.breakpoints.down(850)]: {
            maxWidth: '350px',
        },
        [theme.breakpoints.down(720)]: {
            maxWidth: '300px',
        },
        [theme.breakpoints.down(620)]: {
            maxWidth: '250px',
        },
        [theme.breakpoints.down(520)]: {
            maxWidth: '100%',
            marginBottom: '15px',
        },
    },
    inputSmall: {
        marginBottom: 10,
        width: '100%',
        maxWidth: '200px',
        marginLeft: '20px',
        [theme.breakpoints.down(520)]: {
            maxWidth: '40%',
            marginLeft: 0,
            marginBottom: '15px',
        },
    },
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
    labelRoot: {
        fontSize: '2.0rem',
        backgroundColor: 'white',
        paddingRight: '5px',
    },
    pickupLocation: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
    },
    span: {
        fontSize: '2.5rem',
        margin: '0 auto',
        marginBottom: '10px',
    },
    textField: {
        fontSize: '2.0rem',
    }
});

class UserInfo extends React.Component {
    state={
        delivery: this.context.state.delivery,
        pickup: this.context.state.pickup,
        firstName: 'Jon',
        lastName: 'Smith',
        address: this.context.state.address,
        city: this.context.state.city,
        stateValue: this.context.state.stateValue,
        zipCode: this.context.state.zipCode,
        emailAddress: 'JonSmith1@email.com',
        business: this.context.state.business,
        phoneNumber: 1234567890,
    }

    handleChange = (event) => {
        let value = event.target.value

        this.setState({
            [event.target.name]: value,
        })
    }

    render() {
        const { classes } = this.props;
        if(this.state.delivery) {
            return (
                <div className={classes.insideDiv}>
                    <span className={classes.span}>Delivery Info:</span>
                    <div className={classes.dualTextfieldDiv}>
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="first-name"
                            variant="outlined"
                            name='firstName'
                            value={this.state.firstName}
                            label={'First Name'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                        />
    
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="last-name"
                            variant="outlined"
                            name='lastName'
                            value={this.state.lastName}
                            label={'Last Name'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                        />
                    </div>
    
                    <div className={classes.dualTextfieldDiv}>
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="address"
                            variant="outlined"
                            name='address'
                            value={this.state.address}
                            label={'Address'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                            />
        
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="city"
                            variant="outlined"
                            name='city'
                            value={this.state.city}
                            label={'City'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                            />
                    </div>

                    <div className={classes.dualTextfieldDiv}>
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="state"
                            variant="outlined"
                            name='stateValue'
                            value={this.state.stateValue}
                            label={'State'}
                            onChange={this.handleChange}
                            className={classes.inputSmall}
                        />
    
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="zipcode"
                            variant="outlined"
                            name='zipCode'
                            value={this.state.zipCode}
                            label={'Zip Code'}
                            onChange={this.handleChange}
                            className={classes.inputSmall}
                            type='number'
                        />
                    </div>
    
                    <span className={classes.span}>User Info:</span>

                    <div className={classes.dualTextfieldDiv}>
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="email"
                            variant="outlined"
                            name='emailAddress'
                            value={this.state.emailAddress}
                            label={'Email Address'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                            />
        
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="phone"
                            variant="outlined"
                            name='phoneNumber'
                            value={this.state.phoneNumber}
                            label={'Phone Number'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                            type="number"
                        />
                    </div>

                    <Button className={classes.button} onClick={this.props.continue}>Continue to Payment Info</Button>
                </div>
            )
        }
        else {
            return (
                <div className={classes.insideDiv}>
                    <span className={classes.span}>Pickup Info:</span>
                    <div className={classes.dualTextfieldDiv}>
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="first-name"
                            variant="outlined"
                            name='firstName'
                            value={this.state.firstName}
                            label={'First Name'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                        />
    
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="last-name"
                            variant="outlined"
                            name='lastName'
                            value={this.state.lastName}
                            label={'Last Name'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                        />
                    </div>

                    <span className={classes.span}>Restaurant Location:</span>

                    <div className={classes.pickupLocation}>
                        <span>{this.state.business['Title']}</span>
                        <span>{this.state.business['StreetAddress']}</span>
                        <span>{this.state.business['CityStateZip']}</span>
                    </div>
  
                    <span className={classes.span}>User Info:</span>

                    <div className={classes.dualTextfieldDiv}>
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="email"
                            variant="outlined"
                            name='emailAddress'
                            value={this.state.emailAddress}
                            label={'Email Address'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                            />
        
                        <TextField 
                            InputProps={{
                                classes: {input: classes.textField,
                                },
                            }}
                            InputLabelProps={{
                                classes:{
                                    root: classes.labelRoot,
                                },
                            }}
                            id="phone"
                            variant="outlined"
                            name='phoneNumber'
                            value={this.state.phoneNumber}
                            label={'Phone Number'}
                            onChange={this.handleChange}
                            className={classes.inputHalfSize}
                            type="number"
                        />
                    </div>

                    <Button className={classes.button} onClick={this.props.continue}>Continue to Payment Info</Button>
                </div>
            )
        }
    }
}

UserInfo.contextType = AppContext;

export default withStyles(styles)(UserInfo);