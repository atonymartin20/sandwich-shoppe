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

export default function SandwichSeasoningsCheckboxes(props) {
	const [state, setState] = React.useState({
        seasonings: props.seasonings
	});
    const classes = useStyles();

    const handleChange = (event) => {
        let seasonings = state.seasonings

        seasonings[event.target.name] = event.target.checked

        setState({
            ...state,
            seasonings,
        })

        props.updateButtons(seasonings)
	};

    if(Object.keys(state.seasonings).length === 4) {
        return (
            <FormGroup className={classes.root}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.seasonings)[0]}
                            onChange={handleChange}
                            name={Object.keys(state.seasonings)[0]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.seasonings)[0].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.seasonings)[1]}
                            onChange={handleChange}
                            name={Object.keys(state.seasonings)[1]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.seasonings)[1].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.seasonings)[2]}
                            onChange={handleChange}
                            name={Object.keys(state.seasonings)[2]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.seasonings)[2].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
    
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={Object.values(state.seasonings)[3]}
                            onChange={handleChange}
                            name={Object.keys(state.seasonings)[3]}
                            color="default"
                            className={classes.checkbox}
                        />
                    }
                    label= {<Typography className={classes.label}>{Object.keys(state.seasonings)[3].substr(3).match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Typography>}
                    className={classes.formControlLabel}
                />
            </FormGroup>
        );
    }

    else {
        return (
            <FormGroup className={classes.root}>
            </FormGroup>
        ); 
    }
}