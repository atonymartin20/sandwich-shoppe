import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import TotalsTable from '../orderNow/cart/totalsTable.js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    backButton: {
        backgroundColor: '#0087A8',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid #0087A8',
        borderRadius: '10px',
        width: '200px',
        textTransform: 'none',
        "&:hover": {
            color: '#0087A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginBottom: '10px',
        },
    },
    bottomContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
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
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#bebebe',
        marginTop: '10px',
    },
    dualTextfieldDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    formControlLabel: {
        margin: '0px 10px',
    },
    goBackDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0px 25px',
        [theme.breakpoints.down(550)]: {
            padding: '0px',    
        },
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
        [theme.breakpoints.down(400)]: {
            maxWidth: '45%',
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
    label: {
        fontSize: '2.0rem',
        padding: '0px 10px 0px 0px',
    },
    labelRoot: {
        fontSize: '2.0rem',
        backgroundColor: '#bebebe',
        paddingRight: '5px',
        color: 'black',
    },
    radioGroup: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        padding: '10px 10%',
        justifyContent: 'flex-start',
        marginBottom: '10px',
        [theme.breakpoints.down(550)]: {
            padding: '10px 10px',
        }
    },
    span: {
        fontSize: '2.5rem',
        marginTop: '10px',
        marginBottom: '5px',
    },
    textField: {
        fontSize: '2.0rem',
    },
});

class UserInfo extends React.Component {
    state={
        nameOnCard: 'Jon Smith',
        cardNumber: 4242424242424242,
        securityCode: 123,
        expirationDate: '01/23',
        value: 'active',
    }

    handleChange = (event) => {
        let value = event.target.value

        this.setState({
            [event.target.name]: value,
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.insideDiv}>
                <div className={classes.goBackDiv}>
                    <Button className={classes.backButton} onClick={this.props.back}>Go Back</Button>
                </div>

                <div className={classes.card}>
                    <RadioGroup
                    aria-label="drinkSize"
                    name="drinkSize"
                    value={this.state.value}
                    className={classes.radioGroup}
                    >
                        <FormControlLabel
                            value='active'
                            control={<Radio color="default" />}
                            label= {<Typography className={classes.label}>New Credit Card</Typography>}
                            className={classes.formControlLabel}
                        />
                    </RadioGroup>

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
                            id="nameOnCard"
                            variant="outlined"
                            name='nameOnCard'
                            value={this.state.nameOnCard}
                            label={'Name on Card'}
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
                            id="cardNumber"
                            variant="outlined"
                            name='cardNumber'
                            value={this.state.cardNumber}
                            label={'Card Number'}
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
                            id="securityCode"
                            variant="outlined"
                            name='securityCode'
                            value={this.state.securityCode}
                            label={'Security Code'}
                            onChange={this.handleChange}
                            className={classes.inputSmall}
                            type='numbers'
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
                            id="expirationDate"
                            variant="outlined"
                            name='expirationDate'
                            value={this.state.expirationDate}
                            label={'Expiration Date'}
                            onChange={this.handleChange}
                            className={classes.inputSmall}
                        />
                    </div>
                </div>
                <div className={classes.bottomContainer}>
                    <span className={classes.span}>Review Order</span>
                    <span>Total Items: {this.context.state.orderItemCount}</span>
                <TotalsTable orderPrice={this.context.state.totalOrderPrice} />
                </div>

                <Button className={classes.button} onClick={this.props.continue}>Place Order</Button>
            </div>
        )
    }
}

UserInfo.contextType = AppContext;

export default withStyles(styles)(UserInfo);