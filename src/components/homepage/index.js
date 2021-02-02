import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import BuffaloChickenImg from '../../images/Sandwiches/BuffaloChicken.jpg';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Socials from './socialsContainer.js';

const styles = theme => ({
    button: {
        backgroundColor: '#7600A8',
        marginTop: '2%',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid #7600A8',
        borderRadius: '10px',
        width: '200px',
        textTransform: 'none',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(350)]: {
            width: '100%',
            marginBottom: '10px',
        },
    },
    footer: {
        fontSize: '1.5rem',
        backgroundColor: '#cdcdcd',
        width: '100%',
        minHeight: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLargeText: {
        fontSize: '8.0rem',
        [theme.breakpoints.down(400)]: {
            fontSize: '7.0rem',
        },
    },
    headerMainText: {
        fontSize: '4.5rem',
        marginTop: '2%',
        [theme.breakpoints.down(400)]: {
            fontSize: '3.5rem',
        },
    },
    homepageDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    homepageSpacingDiv: {
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
    homepageText: {
        marginTop: 20,
        marginBottom: 20,
    },
    insideImageDiv: {
        backgroundColor: 'rgba(43, 43, 43, 0.1)',
        width: '100%',
        height: '75vh',
        textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        fontSize: '4.0rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        flexDirection: 'column',
        [theme.breakpoints.down(800)]: {
            height: '60vh',
        },
        [theme.breakpoints.down(600)]: {
            minHeight: '50vh',
            height: 'auto',
        },
    },
    mainImageDiv: {
        width: '100%',
        minWidth: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${BuffaloChickenImg})`,
        [theme.breakpoints.down(800)]: {
            height: '60vh',
        },
        [theme.breakpoints.down(600)]: {
            minHeight: '50vh',
            height: 'auto',
        },
    },
});

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageSpacingDiv}>
                    <div className={classes.mainImageDiv}>
                        <div className={classes.insideImageDiv}>
                            <span className={classes.headerLargeText}>Hungry?</span>

                            <span className={classes.headerMainText}>We can fix that!</span>

                            <Button className={classes.button} component={Link} to='/orderNow'>Order Now</Button>
                        </div>
                    </div>

                    <Socials />

                    <footer className={classes.footer}>
                        Sandwich Shoppe is a Registered Trademark of Sandwich Shoppe Incorporated.  All Rights Reserved.
                    </footer>

                </div>
            </div>
        )
    }
}

Homepage.contextType = AppContext;

export default withStyles(styles)(Homepage);