import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: '2.0rem',
    },
    radioGroup: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },

}));

export default function SandwichSizeRadioButtons() {
    const classes = useStyles();
	const [value, setValue] = React.useState('small');

	const handleChange = (event) => {
		setValue(event.target.value);
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
                    label= {<Typography className={classes.label}>Small</Typography>}
				/>
				<FormControlLabel
					value="medium"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Medium</Typography>}
				/>
				<FormControlLabel
					value="large"
					control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Large</Typography>}
				/>
			</RadioGroup>
		</FormControl>
	);
}
