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

export default function CookieCountRadioButtons(props) {
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

        if(event.target.value === 'is5CookiePack') {
            side['is1CookiePack'] = false
            side['is3CookiePack'] = false
            side['is5CookiePack'] = true
            side['price'] = 1.99
        }

        else if(event.target.value === 'is3CookiePack') {
            side['is1CookiePack'] = false
            side['is3CookiePack'] = true
            side['is5CookiePack'] = false
            side['price'] = 1.49
        }

        else {
            side['is1CookiePack'] = true
            side['is3CookiePack'] = false
            side['is5CookiePack'] = false
            side['price'] = 0.59
        }

        setState({
            ...state,
            side,
        })

        props.updateButtons(side)
    };
    
    return (
        <FormControl component="fieldset" className={classes.root}>
            <RadioGroup
                aria-label="cookieCount"
                name="cookieCount"
                value={value}
                onChange={handleChange}
                className={classes.radioGroup}
            >
                <FormControlLabel
                    value="is1CookiePack"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>1 Cookie $0.59</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="is3CookiePack"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>3 Cookies $1.49</Typography>}
                    className={classes.formControlLabel}
                />
                <FormControlLabel
                    value="is5CookiePack"
                    control={<Radio color="default" />}
                    label= {<Typography className={classes.label}>5 Cookies $1.99</Typography>}
                    className={classes.formControlLabel}
                />
            </RadioGroup>
        </FormControl>
    );
}
