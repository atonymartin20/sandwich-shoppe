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

export default function SandwichDefaultsCheckboxes(props) {
	const [state, setState] = React.useState({
        defaults: props.defaults,
	});
    const classes = useStyles();

    useEffect(() => {
        if(props.defaults) {
            let defaults = props.defaults;

            setState({
                ...state,
                defaults
            })
        }
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let defaults = state.defaults

        defaults[event.target.name] = event.target.checked

        setState({
            ...state,
            defaults,
        })

        props.updateButtons(defaults)
        
	};

    if(Object.keys(state.defaults).length === 5) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.defaults).length === 4) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.defaults).length === 3) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.defaults).length === 2) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.defaults)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.defaults)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.defaults)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
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