import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import BuffaloChickenSaladImg from '../../images/Salads/BuffaloChickenSalad.jpg';
import CaesarSaladImg from '../../images/Salads/CaesarSalad.jpg';
import ChickenCaesarSaladImg from '../../images/Salads/ChickenCaesarSalad.jpg';
import GardenSaladImg from '../../images/Salads/GardenSalad.jpg';
import SideSaladImg from '../../images/Salads/SideSalad.jpg';
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom';
import SaladInfo from './saladInfo.js';

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
    groupDivBuffaloChickenSalad: {
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
        backgroundImage: `url(${BuffaloChickenSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivCaesarSalad: {
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
        backgroundImage: `url(${CaesarSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChickenCaesarSalad: {
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
        backgroundImage: `url(${ChickenCaesarSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivGardenSalad: {
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
        backgroundImage: `url(${GardenSaladImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivSideSalad: {
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
        backgroundImage: `url(${SideSaladImg})`,
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
    menuSpacingOrderDiv: {
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
    menuText: {
        marginTop: 20,
        marginBottom: 20,
    },
});

class Salads extends React.Component {
    state={
        redirect: false,
        moreInfoBuffaloChickenSalad: false,
        moreInfoCaesarSalad: false,
        moreInfoChickenCaesarSalad: false,
        moreInfoGardenSalad: false,
        moreInfoSideSalad: false,
    }

    checkout = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true,
        })
    }

    openMoreInfoBuffaloChickenSalad = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoBuffaloChickenSalad: true,
        })
    }

    openMoreInfoCaesarSalad = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoCaesarSalad: true,
        })
    }
    openMoreInfoChickenCaesarSalad = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoChickenCaesarSalad: true,
        })
    }

    openMoreInfoGardenSalad = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoGardenSalad: true,
        })
    }

    openMoreInfoSideSalad = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoSideSalad: true,
        })
    }

    closeMoreInfo = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoBuffaloChickenSalad: false,
            moreInfoCaesarSalad: false,
            moreInfoChickenCaesarSalad: false,
            moreInfoGardenSalad: false,
            moreInfoSideSalad: false,
        })
    }


    render() {
        const { classes } = this.props;
        if(this.props.type === 'order') {
            return (
                <div className={classes.menuDiv}>
                    {this.state.redirect === true ? <Redirect to='/orderNow/checkout' /> : null }
                    <div className={classes.menuSpacingOrderDiv}>
                        {this.context.state.orderItemCount > 0 ? 
                            <div className={classes.buttonContainerDiv}>
                                <Button className={classes.backButton} onClick={this.props.goBack}>
                                    Go Back
                                </Button>
                                <Button className={classes.checkoutButton} onClick={this.checkout}>
                                    Checkout
                                </Button>
                            </div> : 
                            <div className={classes.goBackDiv}>
                                <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                            </div>
                        }
                        <h1 className={classes.headerText}>Salads</h1>
                        <div className={classes.menuInsideContainer}>
    
                            <div className={classes.groupDivBuffaloChickenSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Buffalo Chicken Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivCaesarSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Caesar Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivChickenCaesarSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Caesar Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivGardenSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Garden Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivSideSalad} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Side Salad
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.menuDiv}>
                    {this.state.moreInfoBuffaloChickenSalad === true ? <SaladInfo close={this.closeMoreInfo} name='Buffalo Chicken Salad' text='Romaine and iceburg lettuce, buffalo chicken, mozzarella cheese, and croutons' img={BuffaloChickenSaladImg} /> : null }
                    {this.state.moreInfoCaesarSalad === true ? <SaladInfo close={this.closeMoreInfo} name='Caesar Salad' text='Romaine and iceburg lettuce, parmesan cheese, and croutons' img={CaesarSaladImg} /> : null }
                    {this.state.moreInfoChickenCaesarSalad === true ? <SaladInfo close={this.closeMoreInfo} name='Chicken Caesar Salad' text='Romaine and iceburg lettuce, chicken, parmesan cheese, and croutons' img={ChickenCaesarSaladImg} /> : null }
                    {this.state.moreInfoGardenSalad === true ? <SaladInfo close={this.closeMoreInfo} name='Garden Salad' text='Romaine and iceburg lettuce, grape tomatoes, red onion, cheddar cheese, and croutons' img={GardenSaladImg} /> : null }
                    {this.state.moreInfoSideSalad === true ? <SaladInfo close={this.closeMoreInfo} name='Side Salad' text='Romaine and iceburg lettuce, grape tomatoes, and cheddar cheese' img={SideSaladImg} /> : null }

                    {this.state.redirect === true ? <Redirect to='/orderNow/checkout' /> : null }
                    <div className={classes.menuSpacingDiv}>
                        <div className={classes.goBackDiv}>
                            <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                        </div>
                        <h1 className={classes.headerText}>Salads</h1>
                        <div className={classes.menuInsideContainer}>
    
                            <div className={classes.groupDivBuffaloChickenSalad} onClick={this.openMoreInfoBuffaloChickenSalad}>
                                <div className={classes.insideGroupDiv}>
                                    Buffalo Chicken Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivCaesarSalad} onClick={this.openMoreInfoCaesarSalad}>
                                <div className={classes.insideGroupDiv}>
                                    Caesar Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivChickenCaesarSalad} onClick={this.openMoreInfoChickenCaesarSalad}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Caesar Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivGardenSalad} onClick={this.openMoreInfoGardenSalad}>
                                <div className={classes.insideGroupDiv}>
                                    Garden Salad
                                </div>
                            </div>
    
                            <div className={classes.groupDivSideSalad} onClick={this.openMoreInfoSideSalad}>
                                <div className={classes.insideGroupDiv}>
                                    Side Salad
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

Salads.contextType = AppContext;

export default withStyles(styles)(Salads);