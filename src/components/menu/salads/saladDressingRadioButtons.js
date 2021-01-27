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

export default function SaladDressingRadioButtons(props) {
    const [state, setState] = React.useState({
        salad: props.salad,
    });
    const [value, setValue] = React.useState('');

    const classes = useStyles();

    useEffect(() => {
        if(props.salad) {
            let newSalad = props.salad;

            setState({
                ...state,
                salad: newSalad
            })
        }
    }, [props]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let salad = state.salad
        setValue(event.target.value)
        salad['hasFatFreeRanchDressing'] = false
        salad['hasFrenchDressing'] = false
        salad['hasItalianDressing'] = false
        salad['hasRanchDressing'] = false
        salad['hasThousandIslandDressing'] = false
        salad[event.target.value] = true

        setState({
            ...state,
            salad,
        })

        props.updateButtons(salad)
    };
    
    return (
        <FormControl component="fieldset" className={classes.root}>
            <RadioGroup
                aria-label="saladDressing"
                name="saladDressing"
                value={value}
                onChange={handleChange}
                className={classes.radioGroup}
            >
                <FormControlLabel
                    value="hasFatFreeRanchDressing"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Fat Free Ranch</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="hasFrenchDressing"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>French</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="hasItalianDressing"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Italian</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="hasRanchDressing"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Ranch</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="hasThousandIslandDressing"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>Thousand Island</Typography>}
                    className={classes.formControlLabel}
                />
            </RadioGroup>
        </FormControl>
    );
}