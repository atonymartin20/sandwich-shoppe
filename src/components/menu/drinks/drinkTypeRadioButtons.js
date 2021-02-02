import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControlLabel: {
        margin: '0px 10px',
    },
    label: {
        fontSize: '2.0rem',
        padding: '0px 10px 0px 0px',
    },
    radioGroup: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        padding: '10px 30px',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down(550)]: {
            padding: '10px 10px',
        }
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
}));

export default function DrinkTypeRadioButtons(props) {
    const [state, setState] = React.useState({
        drink: props.drink,
    });
    const [value, setValue] = React.useState('');

    const classes = useStyles();

    useEffect(() => {
        if(props.drink) {
            let newDrink = props.drink;

            setState({
                ...state,
                drink: newDrink
            })
        }
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let drink = state.drink
        
        setValue(event.target.value)

        drink['name'] = event.target.value

        setState({
            ...state,
            drink,
        })

        props.updateButtons(drink)
    };
    
    if (state.drink['type'] === 'Soda') {
        return (
            <FormControl component="fieldset" className={classes.root}>
                <RadioGroup
                    aria-label="drinkFlavor"
                    name="drinkFlavor"
                    value={value}
                    onChange={handleChange}
                    className={classes.radioGroup}
                >
                    <FormControlLabel
                        value="Pepsi"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Pepsi</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="Diet Pepsi"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Diet Pepsi</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="Dr. Pepper"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Dr. Pepper</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="Diet Dr. Pepper"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Diet Dr. Pepper</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="Sierra Mist"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Sierra Mist</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="Mountain Dew"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Mountain Dew</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="MUG Root Beer"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>MUG Root Beer</Typography>}
                        className={classes.formControlLabel}
                    />
                </RadioGroup>
            </FormControl>
        );
    }

    else if(state.drink['type'] === 'Tea') {
        return (
            <FormControl component="fieldset" className={classes.root}>
                <RadioGroup
                    aria-label="drinkFlavor"
                    name="drinkFlavor"
                    value={value}
                    onChange={handleChange}
                    className={classes.radioGroup}
                >
                    <FormControlLabel
                        value="Unsweet Tea"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Unsweet Tea</Typography>}
                        className={classes.formControlLabel}
                    />
                    <FormControlLabel
                        value="Sweet Tea"
                        control={<Radio color="default" />}
                        label= {<Typography className={classes.label}>Sweet Tea</Typography>}
                        className={classes.formControlLabel}
                    />
                </RadioGroup>
            </FormControl>
        );    }

    else {
        return null;
    }
}
