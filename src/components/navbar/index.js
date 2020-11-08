// Logo Left with home redirect

// Right Side
// Order online
// 
// Menu
// Contact

import React from 'react';

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-router-dom';

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import Logo from '../../images/logo.png';

const styles = theme => ({
    appBar: {
        display: "flex",
        color: "white",
        width: "100%",
        boxShadow: "none",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        position: "fixed",
        height: 85,
        top: "0",
        padding: "0px 4%",
        fontSize: "2.5rem",
        backgroundColor: "#0087A8",
        zIndex: 10000,
        [theme.breakpoints.down(710)]: {
            padding: '0px 2%'
        }
    },
    centerLogo: {
        [theme.breakpoints.down(800)]: {
            margin: '0 auto',
        }
    },
    closeButton: {
        padding: 15,
        paddingLeft: 35,
    },
    closeIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    closeIconToolbar: {
        height: 85,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    drawerList: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        flexDirection: "column",
        paddingBottom: '60px',
    },
    drawerListItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "flex",
        alignItems: 'center',
        margin: "0",
        padding: "0",
        width: '100%',
        borderBottom: '1px solid #C2C2C2',
        borderRight: '1px solid #C2C2C2',
        backgroundColor: '#DDDDDD',
        "& ul": {
            maxHeight: "400px",
            overflow: "scroll"
        }
    },
    drawerNavLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "1.8rem",
        lineHeight: "20px",
        textDecoration: "none",
        display: "inline-flex",
        width: "100%",
        height: 60,
        paddingLeft: 15,
        textAlign: "left",
        textTransform: "none",
        "& > span:first-child": {
            justifyContent: "flex-start"
        },
        "&:hover,&:focus": {
            backgroundColor: "#AA1649",
            color: "white"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        }
    },
    drawerPaper: {
        marginTop: 85,
        width: '100%',
        backgroundColor: '#E2E2E2',
        color: 'black',
    },
    hide800: {
        display: 'flex',
        height: 'auto',
        alignItems: 'center',
        [theme.breakpoints.down(800)]: {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        margin: '0 auto',
        "&:hover": {
            paddingBottom: '5px',
            borderBottom: '3px solid #7600A8',
        }
    },
    linkStyling: {
        textDecoration: 'none',
        width: '100%',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        marginTop: '28px',
        marginLeft: '30px',
    },
    menuIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    show800: {
        display: 'flex',
        left: '50px',
        [theme.breakpoints.up(800)]: {
            display: 'none'
        }
    },
    toolbar: {
        height: 85,
        display: "flex",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down(800)]: {
            justifyContent: 'flex-start',
        }
    }
})

class Navbar extends React.Component {
    state = {
        drawerOpen: false
    }

    handleDrawerToggle = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }   

    handleClose = () => {
        this.setState({
            drawerOpen: false
        })
    }

    render() {
        const { classes } = this.props;

        const drawer = (
            <div>
                <div className={classes.closeIconToolbar}>
                    {this.state.drawerOpen ? (
                        <div className={classes.closeButton} onClick={this.handleClose}>
                            <CloseIcon className={classes.closeIconStyling} />
                        </div>
                    ) : null}
                </div>
                <Divider />
                <List className={classes.drawerList}>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Home
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/menu' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Menu
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/orderNow' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Order Now
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.drawerListItem}>
                        <Link to='/contact' className={classes.linkStyling}>
                            <Button
                                className={classes.drawerNavLink}
                            >
                                Contact
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </div>
        )

        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                    <Hidden implementation="css" className={classes.show800}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                            >
                                <MenuIcon className={classes.menuIconStyling} />
                            </IconButton>
                        </Hidden>
                        <Link to ='/' className={classes.centerLogo}>
                            <img src={Logo} alt='Logo' className={classes.logo} />
                        </Link>
                        <Hidden implementation='css' className={classes.hide800}>
                            <Link to='/menu' className={classes.link}><h1 className={classes.logo2}>Menu</h1></Link>
                            <Link to='/contact' className={classes.link}><h1 className={classes.logo2}>Contact</h1></Link>
                            <Link to='/orderNow' className={classes.link}>
                                <Button
                                    className={classes.drawerNavLink}
                                >
                                    Order Now
                                </Button>
                            </Link>
                        </Hidden>
                    </Toolbar>
                </AppBar>

                <nav>
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={'left'}
                            open={this.state.drawerOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);