import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';
import BLTImg from '../../images/Sandwiches/BLT.jpg';
import BuffaloChickenImg from '../../images/Sandwiches/BuffaloChicken.jpg';
import ChickenBaconRanchImg from '../../images/Sandwiches/ChickenBaconRanch.jpg';
import ChickenParmImg from '../../images/Sandwiches/ChickenParm.jpg';
import ClubImg from '../../images/Sandwiches/Club.jpg';
import HamAndCheeseImg from '../../images/Sandwiches/HamAndCheese.jpg';
import MeatballImg from '../../images/Sandwiches/Meatball.jpg';
import PhillyCheesesteakImg from '../../images/Sandwiches/PhillyCheeseSteak.jpg';
import TurkeyImg from '../../images/Sandwiches/Turkey.jpg';
import CreateYourOwnImg from '../../images/Sandwiches/CreateYourOwn.jpg';
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom';
import SandwichInfo from './sandwichInfo.js';

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
    groupDivBLT: {
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
        backgroundImage: `url(${BLTImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivBuffaloChicken: {
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
        backgroundImage: `url(${BuffaloChickenImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChickenBaconRanch: {
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
        backgroundImage: `url(${ChickenBaconRanchImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivChickenParm: {
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
        backgroundImage: `url(${ChickenParmImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivClub: {
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
        backgroundImage: `url(${ClubImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivHamAndCheese: {
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
        backgroundImage: `url(${HamAndCheeseImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivMeatball: {
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
        backgroundImage: `url(${MeatballImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivPhillyCheesesteak: {
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
        backgroundImage: `url(${PhillyCheesesteakImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivTurkey: {
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
        backgroundImage: `url(${TurkeyImg})`,
        [theme.breakpoints.down(850)]: {
            width: '45%',
        },
        [theme.breakpoints.down(550)]: {
            width: '100%',
            margin: '10px 0px',
        }
    },
    groupDivCreateYourOwn: {
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
        backgroundImage: `url(${CreateYourOwnImg})`,
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

class Sandwiches extends React.Component {
    state={
        redirect: false,
        moreInfoBLT: false,
        moreInfoBuffaloChicken: false,
        moreInfoChickenBaconRanch: false,
        moreInfoChickenParm: false,
        moreInfoClub: false,
        moreInfoHamAndCheese: false,
        moreInfoMeatball: false,
        moreInfoPhillyCheesesteak: false,
        moreInfoTurkey: false,
        moreInfoCreateYourOwn: false,
    }

    checkout = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true,
        })
    }

    openMoreInfoBLT = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoBLT: true,
        })
    }

    openMoreInfoBuffaloChicken = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoBuffaloChicken: true,
        })
    }

    openMoreInfoChickenBaconRanch = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoChickenBaconRanch: true,
        })
    }

    openMoreInfoChickenParm = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoChickenParm: true,
        })
    }

    openMoreInfoClub = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoClub: true,
        })
    }

    openMoreInfoHamAndCheese = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoHamAndCheese: true,
        })
    }

    openMoreInfoMeatball = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoMeatball: true,
        })
    }

    openMoreInfoPhillyCheesesteak = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoPhillyCheesesteak: true,
        })
    }

    openMoreInfoTurkey = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoTurkey: true,
        })
    }

    openMoreInfoCreateYourOwn = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoCreateYourOwn: true,
        })
    }

    closeMoreInfo = (event) => {
        event.preventDefault();
        this.setState({
            moreInfoBLT: false,
            moreInfoBuffaloChicken: false,
            moreInfoChickenBaconRanch: false,
            moreInfoChickenParm: false,
            moreInfoClub: false,
            moreInfoHamAndCheese: false,
            moreInfoMeatball: false,
            moreInfoPhillyCheesesteak: false,
            moreInfoTurkey: false,
            moreInfoCreateYourOwn: false,
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
                        <h1 className={classes.headerText}>Sandwiches</h1>
                        <div className={classes.menuInsideContainer}>
    
                            <div className={classes.groupDivBLT} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    BLT
                                </div>
                            </div>
    
                            <div className={classes.groupDivBuffaloChicken} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Buffalo Chicken
                                </div>
                            </div>
    
                            <div className={classes.groupDivChickenBaconRanch} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Bacon Ranch
                                </div>
                            </div>
    
                            <div className={classes.groupDivChickenParm} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Parm
                                </div>
                            </div>
    
                            <div className={classes.groupDivClub} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Club
                                </div>
                            </div>
    
                            <div className={classes.groupDivHamAndCheese} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Ham and Cheese
                                </div>
                            </div>
    
                            <div className={classes.groupDivMeatball} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Meatball
                                </div>
                            </div>
    
                            <div className={classes.groupDivPhillyCheesesteak} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Philly Cheesesteak
                                </div>
                            </div>
    
                            <div className={classes.groupDivTurkey} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Turkey
                                </div>
                            </div>
    
                            <div className={classes.groupDivCreateYourOwn} onClick={this.chooseSandwiches}>
                                <div className={classes.insideGroupDiv}>
                                    Create Your Own
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
                    <div className={classes.menuSpacingDiv}>
                        {this.state.moreInfoBLT === true ? <SandwichInfo close={this.closeMoreInfo} name='BLT' text='Bacon, lettuce, and tomato' img={BLTImg} /> : null }
                        {this.state.moreInfoBuffaloChicken === true ? <SandwichInfo close={this.closeMoreInfo} name='Buffalo Chicken' text='Homemade Buffalo sauce, chicken, lettuce, and tomato' img={BuffaloChickenImg} /> : null }
                        {this.state.moreInfoChickenBaconRanch === true ? <SandwichInfo close={this.closeMoreInfo} name='Chicken Bacon Ranch' text='Bacon, chicken, lettuce, tomato, and ranch dressing' img={ChickenBaconRanchImg} /> : null }
                        {this.state.moreInfoChickenParm === true ? <SandwichInfo close={this.closeMoreInfo} name='Chicken Parm' text='Homemade Marinara and chicken' img={ChickenParmImg} /> : null }
                        {this.state.moreInfoClub === true ? <SandwichInfo close={this.closeMoreInfo} name='Club' text='Turkey, bacon, ham, lettuce, and tomato' img={ClubImg} /> : null }
                        {this.state.moreInfoHamAndCheese === true ? <SandwichInfo close={this.closeMoreInfo} name='Ham and Cheese' text='Ham, lettuce, and tomato' img={HamAndCheeseImg} /> : null }
                        {this.state.moreInfoMeatball === true ? <SandwichInfo close={this.closeMoreInfo} name='Meatball' text='Homemade Marinara and meatballs' img={MeatballImg} /> : null }
                        {this.state.moreInfoPhillyCheesesteak === true ? <SandwichInfo close={this.closeMoreInfo} name='Philly Cheesesteak' text='Steak, grilled onions, and peppers' img={PhillyCheesesteakImg} /> : null }
                        {this.state.moreInfoTurkey === true ? <SandwichInfo close={this.closeMoreInfo} name='Turkey' text='Turkey, lettuce, and tomato' img={TurkeyImg} /> : null }
                        {this.state.moreInfoCreateYourOwn === true ? <SandwichInfo close={this.closeMoreInfo} name='Create your Own' text='Choose your own ingredients' img={CreateYourOwnImg} /> : null }

                        <div className={classes.goBackDiv}>
                            <Button className={classes.backButton} onClick={this.props.goBack}>Go Back</Button>
                        </div>

                        <h1 className={classes.headerText}>Sandwiches</h1>
                        <div className={classes.menuInsideContainer}>

                            <div className={classes.groupDivBLT} onClick={this.openMoreInfoBLT}>
                                <div className={classes.insideGroupDiv}>
                                    BLT
                                </div>
                            </div>

                            <div className={classes.groupDivBuffaloChicken} onClick={this.openMoreInfoBuffaloChicken}>
                                <div className={classes.insideGroupDiv}>
                                    Buffalo Chicken
                                </div>
                            </div>

                            <div className={classes.groupDivChickenBaconRanch} onClick={this.openMoreInfoChickenBaconRanch}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Bacon Ranch
                                </div>
                            </div>

                            <div className={classes.groupDivChickenParm} onClick={this.openMoreInfoChickenParm}>
                                <div className={classes.insideGroupDiv}>
                                    Chicken Parm
                                </div>
                            </div>

                            <div className={classes.groupDivClub} onClick={this.openMoreInfoClub}>
                                <div className={classes.insideGroupDiv}>
                                    Club
                                </div>
                            </div>

                            <div className={classes.groupDivHamAndCheese} onClick={this.openMoreInfoHamAndCheese}>
                                <div className={classes.insideGroupDiv}>
                                    Ham and Cheese
                                </div>
                            </div>

                            <div className={classes.groupDivMeatball} onClick={this.openMoreInfoMeatball}>
                                <div className={classes.insideGroupDiv}>
                                    Meatball
                                </div>
                            </div>

                            <div className={classes.groupDivPhillyCheesesteak} onClick={this.openMoreInfoPhillyCheesesteak}>
                                <div className={classes.insideGroupDiv}>
                                    Philly Cheesesteak
                                </div>
                            </div>

                            <div className={classes.groupDivTurkey} onClick={this.openMoreInfoTurkey}>
                                <div className={classes.insideGroupDiv}>
                                    Turkey
                                </div>
                            </div>

                            <div className={classes.groupDivCreateYourOwn} onClick={this.openMoreInfoCreateYourOwn}>
                                <div className={classes.insideGroupDiv}>
                                    Create Your Own
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

Sandwiches.contextType = AppContext;

export default withStyles(styles)(Sandwiches);