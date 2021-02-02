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

export default function ChipFlavorRadioButtons(props) {
    const [state, setState] = React.useState({
        side: props.side,
    });
    const [value, setValue] = React.useState('');

    const classes = useStyles();

    useEffect(() => {
        if(props.side) {
            let newSide = props.side;

            setState({
                ...state,
                side: newSide
            })
        }
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let side = state.side
        setValue(event.target.value)

        side['name'] = event.target.value

        setState({
            ...state,
            side,
        })

        props.updateButtons(side)
    };
    
    return (
        <FormControl component="fieldset" className={classes.root}>
            <RadioGroup
                aria-label="cookieFlavor"
                name="cookieFlavor"
                value={value}
                onChange={handleChange}
                className={classes.radioGroup}
            >
                <FormControlLabel
                    value="Doritos"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Doritos</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="Fritos"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Fritos</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="Lays"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Lays</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="Sun Chips"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Sun Chips</Typography>}
                    className={classes.formControlLabel}
                />
            </RadioGroup>
        </FormControl>
    );
}