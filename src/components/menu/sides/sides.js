import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../../context/appContext.js';
import CheesebreadImg from '../../../images/Sides/Cheesebread.jpg';
import ChipsImg from '../../../images/Sides/Chips.jpg';
import CookiesImg from '../../../images/Sides/Cookies.jpg';
import Button from "@material-ui/core/Button";
import SideInfo from './sideinfo.js';
import CreateSide from './createSide.js';

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
        "&:hover": {
            color: '#0087A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginBottom: '10px',
        },
    },
    buttonContainerDiv: {
        width: '100%',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        padding: '0px 25px',
        [theme.breakpoints.down(550)]: {
            padding: '0px',    
        },
    },
    checkoutButton: {
        backgroundColor: '#7600A8',
        fontWeight: 500,
        height: 50,
        fontSize: '2.5rem',
        color: 'white',
        padding: '0px 15px',
        border: '3px solid #7600A8',
        borderRadius: '10px',
        width: '200px',
        "&:hover": {
            color: '#7600A8',
            backgroundColor: 'white',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            marginBottom: '10px',
        },
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
    groupDivCheesebread: {
        width: '30%',
        minWidth: 200,
        border: '1px solid black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        minHeight: 200,
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${CheesebreadImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChips: {
        width: '30%',
        minWidth: 200,
        border: '1px solid black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        minHeight: 200,
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${ChipsImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivCookies: {
        width: '30%',
        minWidth: 200,
        border: '1px solid black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        minHeight: 200,
        fontSize: '2.5rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${CookiesImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
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
        fontSize: '4.0rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
    },
    sideDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    sideInsideContainer: {
        width: '100%',
        maxWidth: 1400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    sideSpacingDiv: {
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
        padding: '20px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
    sideSpacingOrderDiv: {
        marginTop: 0,
        width: '100%',
        maxWidth: 1400,
        borderRadius: '4px',
        backgroundColor: '#f8fbfd',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0px 0px',
        fontSize: '2.0rem',
        lineHeight: 1.25,
    },
});

class Sides extends React.Component {
    state={
        moreInfoCheesebread: false,
        moreInfoChips: false,
        moreInfoCookies: false,
        createSide: false,
        side: {
            name: '',
            type: '',
            price: 0.00,
            is1CookiePack: false,
            is3CookiePack: false,
            is5CookiePack: false,
            addMarinara: false,
        }
    }

    openMoreInfoCheesebread = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoCheesebread: true,
        })
    }

    openMoreInfoChips = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoChips: true,
        })
    }

    openMoreInfoCookies = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoCookies: true,
        })
    }

    closeMoreInfo = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoCheesebread: false,
            moreInfoChips: false,
            moreInfoCookies: false,
        })
    }

    createSide = (side) => {
        let newSide = this.state.side;
        Object.keys(newSide).forEach(function (newSideKey) {
            Object.keys(side).forEach(function (sideKey) {
                if(sideKey === newSideKey) {
                    newSide[newSideKey] = side[sideKey]
                }
            })
        });

        this.setState({
            side: newSide,
            createSide: true,
        })
    }

    closeMenu = (event) => {
        event.preventDefault();
        let side = {
            name: '',
            type: '',
            price: 0.00,
            is1CookiePack: false,
            is3CookiePack: false,
            is5CookiePack: false,
            addMarinara: false,
        }

        this.setState({
            createSide: false,
            side,
        })
    }

    render() {
        const { classes } = this.props;

        if(this.props.type === 'order') {
            return (
                <div className={classes.sideDiv}>
                    {this.state.createSide === true ? <CreateSide itemAddedToCart={this.props.itemAddedToCart} title={this.state.side['type']} side={this.state.side} close={this.closeMenu} /> : null }

                    <div className={classes.sideSpacingOrderDiv}>
                        {this.context.state.orderItemCount > 0 ? 
                            <div className={classes.buttonContainerDiv}>
                                <Button className={classes.backButton} onClick={this.props.goBack}>
                                    Go Back
                                </Button>
                                <Button className={classes.checkoutButton} onClick={this.props.goToCheckout}>
                                    Checkout
                                </Button>
                            </div> : 
                            <div className={classes.goBackDiv}>
                                <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                            </div>
                        }
                        <h1 className={classes.headerText}>Sides</h1>
                        <div className={classes.sideInsideContainer}>
    
                            <div className={classes.groupDivCheesebread} onClick={() => {this.createSide({type: 'Cheesebread', name: 'Cheesebread', price: 4.49})}}>
                                <div className={classes.insideGroupDiv}>
                                    Cheesebread
                                </div>
                            </div>
    
                            <div className={classes.groupDivChips} onClick={() => {this.createSide({type: 'Chips', price: 1.09})}}>
                                <div className={classes.insideGroupDiv}>
                                    Chips
                                </div>
                            </div>
    
                            <div className={classes.groupDivCookies} onClick={() => {this.createSide({type: 'Cookies', price: 0.00})}}>
                                <div className={classes.insideGroupDiv}>
                                    Cookies
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.sideDiv}>
                    <div className={classes.sideSpacingDiv}>
                        {this.state.moreInfoCheesebread === true ? <SideInfo close={this.closeMoreInfo} name='Cheesebread' text='Stuffed cheesebread with garlic and italian seasoning' img={CheesebreadImg} /> : null }
                        {this.state.moreInfoChips === true ? <SideInfo close={this.closeMoreInfo} name='Chips' text='Doritos, Fritos, Lays, or Sun Chips' img={ChipsImg} /> : null }
                        {this.state.moreInfoCookies === true ? <SideInfo close={this.closeMoreInfo} name='Cookies' text='Chocolate chip or sugar cookies' img={CookiesImg} /> : null }

                        <div className={classes.goBackDiv}>
                            <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                        </div>

                        <h1 className={classes.headerText}>Sides</h1>
                        <div className={classes.sideInsideContainer}>
    
                            <div className={classes.groupDivCheesebread} onClick={this.openMoreInfoCheesebread}>
                                <div className={classes.insideGroupDiv}>
                                    Cheesebread
                                </div>
                            </div>
    
                            <div className={classes.groupDivChips} onClick={this.openMoreInfoChips}>
                                <div className={classes.insideGroupDiv}>
                                    Chips
                                </div>
                            </div>
    
                            <div className={classes.groupDivCookies} onClick={this.openMoreInfoCookies}>
                                <div className={classes.insideGroupDiv}>
                                    Cookies
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

Sides.contextType = AppContext;

export default withStyles(styles)(Sides);