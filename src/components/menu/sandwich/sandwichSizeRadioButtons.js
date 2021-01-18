import React from 'react';
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

export default function SandwichSizeRadioButtons(props) {
    const classes = useStyles();
	const [value, setValue] = React.useState('small');

	const handleChange = (event) => {
        setValue(event.target.value);
        if(event.target.value === 'small') {
            props.updateButtons(true, false, false)
        }
        else if(event.target.value === 'medium') {
            props.updateButtons(false, true, false)
        }
        else if(event.target.value === 'large') {
            props.updateButtons(false, false, true)
        }
    };
    
	return (
		<FormControl component="fieldset" className={classes.root}>
			<RadioGroup
				aria-label="sandwichSize"
				name="sandwichSize"
				value={value}
                onChange={handleChange}
                className={classes.radioGroup}
			>
				<FormControlLabel
					value="small"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Small Sandwich ${props.price}</Typography>}
                    className={classes.formControlLabel}
				/>
				<FormControlLabel
					value="medium"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Medium Sandwich ${props.price + 2}</Typography>}
                    className={classes.formControlLabel}
				/>
				<FormControlLabel
					value="large"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Large Sandwich ${props.price + 4}</Typography>}
                    className={classes.formControlLabel}
				/>
			</RadioGroup>
		</FormControl>
	);
}
