import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddressDropdown from './addressDropdown.js';

const styles = (theme) => ({
	icon: {
		width: 20,
		height: 20,
	},
	orderTypeDiv: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	orderTypeButton: {
		width: '100%',
		maxWidth: '600px',
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '1.5rem',
		padding: '10px',
		fontFamily: 'Roboto, sans-serif',
		marginTop: 10,
		cursor: 'pointer',
	},
});

class OrderTypeDropdown extends React.Component {
	render() {
		const { classes } = this.props;
		if (this.props.type === 'closed') {
			return (
				<div className={classes.orderTypeDiv}>
					<button
						className={classes.orderTypeButton}
						onClick={this.props.flipType}
					>
						<span>{this.props.name}</span>
						<ExpandMoreIcon className={classes.icon} />
					</button>
				</div>
			);
		} else {
			return (
				<div className={classes.orderTypeDiv}>
					<button
						className={classes.orderTypeButton}
						onClick={this.props.flipType}
					>
						<span>{this.props.name}</span>
						<ExpandLessIcon className={classes.icon} />
					</button>
					<AddressDropdown type={this.props.name} />
				</div>
			);
		}
	}
}

export default withStyles(styles)(OrderTypeDropdown);