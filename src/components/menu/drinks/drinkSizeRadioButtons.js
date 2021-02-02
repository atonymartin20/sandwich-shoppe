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

export default function DrinkSizeRadioButtons(props) {
    const [state, setState] = React.useState({
        drink: props.drink,
    });
    const [value, setValue] = React.useState('small');

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

        if(event.target.value === 'small') {
            drink['isSmall'] = true
            drink['isLarge'] = false

            setState({
                ...state,
                drink,
            })
        }
        else {
            drink['isLarge'] = true
            drink['isSmall'] = false

            setState({
                ...state,
                drink,
            })
        }
        props.updateButtons(drink)
    };
        
	return (
		<FormControl component="fieldset" className={classes.root}>
			<RadioGroup
				aria-label="drinkSize"
				name="drinkSize"
				value={value}
                onChange={handleChange}
                className={classes.radioGroup}
			>
				<FormControlLabel
					value="small"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Small ${state.drink['smallPrice']}</Typography>}
                    className={classes.formControlLabel}
				/>
				<FormControlLabel
					value="large"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Large ${state.drink['largePrice']}</Typography>}
                    className={classes.formControlLabel}
				/>
			</RadioGroup>
		</FormControl>
	);
}
