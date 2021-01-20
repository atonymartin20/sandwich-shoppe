import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    checkbox: {
        transform: 'scale(1.5)'
    },
    formControlLabel: {
        margin: '0px 10px',
        textAlign: 'center',
    },
    label: {
        fontSize: '2.0rem',
        padding: '0px 10px 0px 0px',
    },
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        padding: '10px 30px',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down(550)]: {
            padding: '10px 10px',
        }
    }
}));

export default function SandwichMeatCheckboxes(props) {
	const [state, setState] = React.useState({
        defaults: props.defaults,
        meats: props.meats
	});
    const classes = useStyles();

    useEffect(() => {
        if(props.defaults && props.meats) {
            let newMeats = props.meats;
            Object.keys(props.defaults).forEach(function (defaultsKey) {
                Object.keys(props.meats).forEach(function (meatsKey) {
                    if(defaultsKey === meatsKey) {
                        delete newMeats[meatsKey] 
                    }
                })
            });

            setState({
                ...state,
                meats: newMeats
            })
        }
    }, [props])

    const handleChange = (event) => {
        let meats = state.meats

        meats[event.target.name] = event.target.checked

        setState({
            ...state,
            meats,
        })

        let extraMeatPrice = 0.00
        Object.values(meats).forEach(function (meatValue) {
            if(meatValue === true) {
                extraMeatPrice += .80
            }
        })
        props.updateButtons(meats, extraMeatPrice)
	};

    if(Object.keys(state.meats).length === 6) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[5]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[5]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[5].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.meats).length === 5) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.meats).length === 4) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.meats).length === 3) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.meats).length === 2) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.meats)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.meats)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.meats)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else {
        return (
            <FormGroup className={classes.root}>
            </FormGroup>
        ); 
    }
}