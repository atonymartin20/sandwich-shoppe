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
        textAlign: 'center',
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

export default function SandwichBreadRadioButtons(props) {
    const classes = useStyles();
	const [value, setValue] = React.useState('small');

	const handleChange = (event) => {
        setValue(event.target.value);
        if(event.target.value === 'italian') {
            props.updateButtons(true, false, false, false, false, false)
        }
        else if(event.target.value === 'parm') {
            props.updateButtons(false, true, false, false, false, false)
        }
        else if(event.target.value === 'wheat') {
            props.updateButtons(false, false, true, false, false, false)
        }
        else if(event.target.value === 'white') {
            props.updateButtons(false, false, false, true, false, false)
        }
        else if(event.target.value === 'wrap') {
            props.updateButtons(false, false, false, false, true, false)
        }
        else if(event.target.value === 'none') {
            props.updateButtons(false, false, false, false, false, true)
        }
    };
    
	return (
		<FormControl component="fieldset" className={classes.root}>
			<RadioGroup
				aria-label="sandwichBread"
				name="sandwichBread"
				value={value}
                onChange={handleChange}
                className={classes.radioGroup}
			>
				<FormControlLabel
					value="italian"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Italian bread</Typography>}
                    className={classes.formControlLabel}
				/>
				<FormControlLabel
					value="parm"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Parmesan Oregano bread</Typography>}
                    className={classes.formControlLabel}
				/>
				<FormControlLabel
					value="wheat"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Wheat bread</Typography>}
                    className={classes.formControlLabel}
				/>
                <FormControlLabel
					value="white"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>White bread</Typography>}
                    className={classes.formControlLabel}
				/>
				<FormControlLabel
					value="wrap"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Wrap</Typography>}
                    className={classes.formControlLabel}
				/>
                <FormControlLabel
					value="none"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>No bread</Typography>}
                    className={classes.formControlLabel}
				/>
			</RadioGroup>
		</FormControl>
	);
}
