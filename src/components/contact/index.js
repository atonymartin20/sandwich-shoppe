import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import ContactImg from '../../images/contact-hq-2.jpg';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

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
    contactDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contactInfoDiv: {
        width: '40%',
        fontSize: '1.75rem',
        [theme.breakpoints.down(800)]: {
            width: '100%',
            fontSize: '1.6rem',
            marginBottom: '15px',
        },
    },
    contactSpacingDiv: {
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
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    dualTextfieldDiv: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        [theme.breakpoints.down(450)]: {
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'column',
        },
    },
    header: {
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundColor: 'rgba(43, 43, 43, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 2.5%',
        textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        height: '200px',
        color: 'white',
        fontSize: '5.5rem',
        [theme.breakpoints.down(400)]: {
            fontSize: '4.0rem',
        },
    },
    input: {
        marginBottom: 10,
    },
    inputHalfSize: {
        width: '48%',
        marginBottom: 10,
        [theme.breakpoints.down(450)]: {
            width: '100%',
        },
    },
    labelRoot: {
        fontSize: '2.0rem',
        backgroundColor: 'white',
        paddingRight: '5px',
    },
    rightSideContainer: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down(800)]: {
            width: '100%',
        },
    },
    textField: {
        fontSize: '2.0rem',
    },
    textFieldLarge: {
        fontSize: '2.0rem',
        height: 150,
        lineHeight: 1.1,
    },
    textFieldContainer: {
        width: '100%',
        padding: 20,
        display: 'flex',
        [theme.breakpoints.down(800)]: {
            flexDirection: 'column',
        },
    },

    topImg: {
        backgroundImage: `url(${ContactImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '200px',
    },
});

class Contact extends React.Component {
    state={
        firstName: '',
        lastName: '',
        emailAddress: '',
        store: '',
        question: '',
    }

    submitResponse = () => {
        console.log(this.state)
        let firstName = '';
        let lastName = '';
        let emailAddress = '';
        let store = '';
        let question = '';

        this.setState({
            firstName,
            lastName,
            emailAddress,
            store,
            question,
        })
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
            <div className={classes.contactDiv}>
                <Navbar />
                <div className={classes.contactSpacingDiv}>
                    <div className={classes.topImg}>
                        <header className={classes.header}>
                            <h1>Contact Us</h1>
                        </header>
                    </div>
                    <div className={classes.textFieldContainer}>
                        <div className={classes.contactInfoDiv}>
                            <p>At Sandwich Shoppe, we want to know what you are thinking.  Please send us a message.</p>
                            <p>Email: <a href="support@sandwichshoppe.com">support@sandwichshoppe.com</a></p>
                        </div>

                        <div className={classes.rightSideContainer}>
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
                            className={classes.input}
                            fullWidth
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
                                id="store"
                                variant="outlined"
                                name='store'
                                value={this.state.store}
                                label={'Store'}
                                onChange={this.handleChange}
                                className={classes.input}
                                fullWidth
                            />

                            <TextField 
                                InputProps={{
                                    classes: {input: classes.textFieldLarge,
                                    },
                                }}
                                InputLabelProps={{
                                    classes:{
                                        root: classes.labelRoot,
                                    },
                                }}
                                id="question"
                                variant="outlined"
                                name='question'
                                value={this.state.question}
                                label={'Question or Comment'}
                                onChange={this.handleChange}
                                className={classes.inputLarge}
                                fullWidth
                                multiline
                                rows={4}
                            />

                            <Button className={classes.button} onClick={this.submitResponse}>Submit</Button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);