import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const styles = theme => ({
    icons: {
        width: '75px',
        height: '75px',
        [theme.breakpoints.down(600)]: {
            width: '60px',
            height: '60px',
        },
        [theme.breakpoints.down(400)]: {
            width: '40px',
            height: '40px',
        },
    },
    iconsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
    },
    socialContainer: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: '#0087A8',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(600)]: {
            width: '85px',
            height: '85px',
        },
        [theme.breakpoints.down(400)]: {
            width: '65px',
            height: '65px',
        },
    },
    socialNameSpan: {
        marginBottom: '10px',
        [theme.breakpoints.down(400)]: {
            fontSize: '2.0rem',
        },
        [theme.breakpoints.down(350)]: {
            fontSize: '1.5rem',
        },
    },
    socialsDiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15px',
    },
    socialsSpan: {
        fontSize: '3.5rem',
        borderBottom: '1px solid black',
        width: '100%',
        textAlign: 'center',
        paddingBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    spacing: {
        marginLeft: '5%',
        marginRight: '5%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down(400)]: {
            marginLeft: '3%',
            marginRight: '3%',
        },
    }
});

class Socials extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.socialsDiv}>
                <span className={classes.socialsSpan}>Stay Connected:</span>
                <div className={classes.iconsContainer}>
                    <div className={classes.spacing}>
                        <div className={classes.socialContainer}>
                            <FacebookIcon className={classes.icons} />
                        </div>
                            <span className={classes.socialNameSpan}>Facebook</span>
                    </div>

                    <div className={classes.spacing}>
                        <div className={classes.socialContainer}>
                            <InstagramIcon className={classes.icons} />
                        </div>
                            <span className={classes.socialNameSpan}>Instagram</span>
                    </div>

                    <div className={classes.spacing}>
                        <div className={classes.socialContainer}>
                            <TwitterIcon className={classes.icons} />
                        </div>
                            <span className={classes.socialNameSpan}>Twitter</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Socials);