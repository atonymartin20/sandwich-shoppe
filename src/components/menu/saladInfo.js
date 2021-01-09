import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    closeIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
        marginRight: '2%',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    container: {
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(43, 43, 43, 0.3)',
    },
    headerText: {
        fontSize: '3.5rem',
        marginBottom: 10,
        textAlign: 'center',
    },
    imgStyling: {
        maxWidth: '1000px',
        maxHeight: '50vh',
        [theme.breakpoints.down(550)]: {
            marginBottom: '10px',
        },
    },
    infoText: {
        fontSize: '3.0rem',
        marginTop: 10,
        width: '100%',
        padding: '0px 10px',
        textAlign: 'center',
        [theme.breakpoints.down(800)]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down(550)]: {
            fontSize: '2.0rem',
        },
    },
    menuSpacingDiv: {
        margin: '0 auto',
        marginTop: '15vh',
        width: '100%',
        maxWidth: 1000,
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
});

class SaladInfo extends React.Component {
    render() {
        const { classes } = this.props;
            return (
                <div className={classes.container}>
                    <div className={classes.menuSpacingDiv}>
                        <CloseIcon onClick={this.props.close} className={classes.closeIconStyling} />
                        <h1 className={classes.headerText}>{this.props.name}</h1>
                        <img className={classes.imgStyling} src={this.props.img} alt='Img of a salad' />
                        <p className={classes.infoText}>{this.props.text}</p>
                    </div>
                </div>
            )
        }
}

SaladInfo.contextType = AppContext;

export default withStyles(styles)(SaladInfo);