import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    closeIconStyling: {
        width: '20px',
        height: '20px',
        cursor: "pointer",
        marginRight: '2%',
        alignSelf: 'flex-end',
        marginLeft: '10px',
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
        borderBottom: '2px solid black',
    },
    insideGroupDiv: {
        backgroundColor: 'rgba(43, 43, 43, 0.1)',
        width: '100%',
        height: '100%',
        textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        fontSize: '3.5rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    menuDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    menuInsideContainer: {
        width: '100%',
        maxWidth: 1400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    menuSpacingDiv: {
        margin: '0 auto',
        marginTop: '25vh',
        width: '100%',
        maxWidth: 1400,
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
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class SandwichInfo extends React.Component {
    render() {
        const { classes } = this.props;
            return (
                <div className={classes.container}>
                    <div className={classes.menuSpacingDiv}>
                        <CloseIcon onClick={this.props.close} className={classes.closeIconStyling} />
                        <img src={this.props.img} />
                        <h1 className={classes.headerText}>{this.props.name}</h1>
                        <div className={classes.menuInsideContainer}>
                        </div>
                    </div>
                </div>
            )
        }
}

SandwichInfo.contextType = AppContext;

export default withStyles(styles)(SandwichInfo);