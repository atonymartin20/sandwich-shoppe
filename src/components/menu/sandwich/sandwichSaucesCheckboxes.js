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

export default function SandwichSaucesCheckboxes(props) {
	const [state, setState] = React.useState({
        defaults: props.defaults,
        sauces: props.sauces
	});
    const classes = useStyles();

    useEffect(() => {
        if(props.defaults && props.sauces) {
            let newSauces = props.sauces;
            Object.keys(props.defaults).forEach(function (defaultsKey) {
                Object.keys(props.sauces).forEach(function (saucesKey) {
                    if(defaultsKey === saucesKey) {
                        delete newSauces[saucesKey] 
                    }
                })
            });

            setState({
                ...state,
                sauces: newSauces
            })
        }
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let sauces = state.sauces

        sauces[event.target.name] = event.target.checked

        setState({
            ...state,
            sauces,
        })

        props.updateButtons(sauces)
	};

    if(Object.keys(state.sauces).length === 10) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[5]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[5]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[5].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[6]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[6]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[6].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[7]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[7]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[7].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[8]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[8]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[8].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[9]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[9]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[9].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.sauces).length === 9) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[5]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[5]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[5].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[6]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[6]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[6].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[7]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[7]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[7].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.sauces)[8]}
                            onChange={handleChange}
                            name={Object.keys(state.sauces)[8]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.sauces)[8].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
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