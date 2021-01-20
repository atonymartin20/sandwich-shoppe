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

export default function SandwichToastedCheckbox(props) {
	const [state, setState] = React.useState({
		toasted: props.toasted || false,
    });
    
    const classes = useStyles();

    const handleChange = (event) => {
        setState({ ...state, toasted: event.target.checked });
        props.updateButton(event.target.checked)
	};

	return (
		<FormGroup className={classes.root}>
			<FormControlLabel
				control={
					<Checkbox
						checked={state.toasted}
						onChange={handleChange}
						name="toasted"
                        color="default"
                        className={classes.checkbox}
					/>
                }
                label= {<Typography className={classes.label}>Toasted</Typography>}
                className={classes.formControlLabel}
			/>
		</FormGroup>
	);
}
