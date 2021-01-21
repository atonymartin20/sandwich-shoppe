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

export default function SandwichVeggiesCheckboxes(props) {
	const [state, setState] = React.useState({
        defaults: props.defaults,
        veggies: props.veggies
	});
    const classes = useStyles();

    useEffect(() => {
        if(props.defaults && props.veggies) {
            let newVeggies = props.veggies;
            Object.keys(props.defaults).forEach(function (defaultsKey) {
                Object.keys(props.veggies).forEach(function (veggiesKey) {
                    if(defaultsKey === veggiesKey) {
                        delete newVeggies[veggiesKey] 
                    }
                })
            });

            setState({
                ...state,
                veggies: newVeggies
            })
        }
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let veggies = state.veggies

        veggies[event.target.name] = event.target.checked

        setState({
            ...state,
            veggies,
        })

        props.updateButtons(veggies)
	};

    if(Object.keys(state.veggies).length === 11) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[5]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[5]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[5].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[6]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[6]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[6].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[7]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[7]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[7].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[8]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[8]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[8].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[9]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[9]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[9].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[10]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[10]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[10].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else if(Object.keys(state.veggies).length === 9) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[4]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[4]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[4].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[5]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[5]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[5].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[6]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[6]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[6].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[7]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[7]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[7].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.veggies)[8]}
                            onChange={handleChange}
                            name={Object.keys(state.veggies)[8]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.veggies)[8].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
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