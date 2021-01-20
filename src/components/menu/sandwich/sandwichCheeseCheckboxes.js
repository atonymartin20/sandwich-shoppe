import React from 'react';
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

export default function SandwichCheeseCheckboxes(props) {
	const [state, setState] = React.useState({
		hasAmericanCheese: props.cheeses['hasAmericanCheese'] || false,
		hasCheddarCheese: props.cheeses['hasCheddarCheese'] || false,
		hasMozzarellaCheese: props.cheeses['hasMozzarellaCheese'] || false,
		hasPepperjackCheese: props.cheeses['hasPepperjackCheese'] || false,
		hasProvoloneCheese: props.cheeses['hasProvoloneCheese'] || false,
		hasSwissCheese: props.cheeses['hasSwissCheese'] || false,
	});
    const classes = useStyles();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        
        if(event.target.name === 'hasAmericanCheese') {
            if(event.target.checked === true) {
                props.updateButtons(true, state.hasCheddarCheese, state.hasMozzarellaCheese, state.hasPepperjackCheese, state.hasProvoloneCheese, state.hasSwissCheese)
            }
            else {
                props.updateButtons(false, state.hasCheddarCheese, state.hasMozzarellaCheese, state.hasPepperjackCheese, state.hasProvoloneCheese, state.hasSwissCheese)
            }
        }
        else if(event.target.name === 'hasCheddarCheese') {
            if(event.target.checked === true) {
                props.updateButtons(state.hasAmericanCheese, true, state.hasMozzarellaCheese, state.hasPepperjackCheese, state.hasProvoloneCheese, state.hasSwissCheese)
            }
            else {
                props.updateButtons(state.hasAmericanCheese, false, state.hasMozzarellaCheese, state.hasPepperjackCheese, state.hasProvoloneCheese, state.hasSwissCheese)
            }        }
        else if(event.target.name === 'hasMozzarellaCheese') {
            if(event.target.checked === true) {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, true, state.hasPepperjackCheese, state.hasProvoloneCheese, state.hasSwissCheese)
            }
            else {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, false, state.hasPepperjackCheese, state.hasProvoloneCheese, state.hasSwissCheese)
            }        }
        else if(event.target.name === 'hasPepperjackCheese') {
            if(event.target.checked === true) {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, state.hasMozzarellaCheese, true, state.hasProvoloneCheese, state.hasSwissCheese)
            }
            else {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, state.hasMozzarellaCheese, false, state.hasProvoloneCheese, state.hasSwissCheese)
            }        }
        else if(event.target.name === 'hasProvoloneCheese') {
            if(event.target.checked === true) {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, state.hasMozzarellaCheese, state.hasPepperjackCheese, true, state.hasSwissCheese)
            }
            else {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, state.hasMozzarellaCheese, state.hasPepperjackCheese, false, state.hasSwissCheese)
            }        }
        else if(event.target.name === 'hasSwissCheese') {
            if(event.target.checked === true) {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, state.hasMozzarellaCheese, state.hasPepperjackCheese, state.hasProvoloneCheese, true)
            }
            else {
                props.updateButtons(state.hasAmericanCheese, state.hasCheddarCheese, state.hasMozzarellaCheese, state.hasPepperjackCheese, state.hasProvoloneCheese, false)
            }
        }
	};

	return (
		<FormGroup className={classes.root}>
			<FormControlLabel
				control={
					<Checkbox
						checked={state.hasAmericanCheese}
						onChange={handleChange}
						name="hasAmericanCheese"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>American</Typography>}
                className={classes.formControlLabel}
			/>

            <FormControlLabel
				control={
					<Checkbox
						checked={state.hasCheddarCheese}
						onChange={handleChange}
						name="hasCheddarCheese"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>Cheddar</Typography>}
                className={classes.formControlLabel}
			/>

            <FormControlLabel
				control={
					<Checkbox
						checked={state.hasMozzarellaCheese}
						onChange={handleChange}
						name="hasMozzarellaCheese"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>Mozzarella</Typography>}
                className={classes.formControlLabel}
			/>

            <FormControlLabel
				control={
					<Checkbox
						checked={state.hasPepperjackCheese}
						onChange={handleChange}
						name="hasPepperjackCheese"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>Pepperjack</Typography>}
                className={classes.formControlLabel}
			/>

            <FormControlLabel
				control={
					<Checkbox
						checked={state.hasProvoloneCheese}
						onChange={handleChange}
						name="hasProvoloneCheese"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>Provolone</Typography>}
                className={classes.formControlLabel}
			/>

            <FormControlLabel
				control={
					<Checkbox
						checked={state.hasSwissCheese}
						onChange={handleChange}
						name="hasSwissCheese"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>Swiss</Typography>}
                className={classes.formControlLabel}
			/>
		</FormGroup>
	);
}
