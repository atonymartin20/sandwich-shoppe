import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, price, item) {
	return { name, price, item };
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
        maxWidth: '800px',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
        width: '100%',
        marginBottom: '5px',
	},
	tableCell: {
        fontSize: '1.6rem',
        border: 'none',
        padding: '4px',
    },
    tableCellDelete: {
        fontSize: '1.6rem',
        border: 'none',
        width: '60px',
        padding: '4px',
        color: 'red',
    },
    tableCellPrice: {
        fontSize: '1.6rem',
        border: 'none',
        width: '75px',
        padding: '4px',
    },
	tableRow: {
		fontSize: '2.0rem',
        borderBottom: '1px solid black',
	},
}));

export default function BasicTable(props) {
	const classes = useStyles();
    const [rows, setRows] = React.useState([]);
    const [value, setValue] = React.useState('');
	React.useEffect(() => {
		if (props.sandwiches) {
            setValue(`Sandwiches(${props.sandwichCount})`)
            setRows(
                props.sandwiches.map((sandwich, index) => createData(
                    sandwich['name'],
                    sandwich['finalPrice'],
                    sandwich,
                ))
            )
        } 
        
        else if (props.salads) {
            setValue(`Salads(${props.saladCount})`)
            setRows(
                props.salads.map((salad, index) => createData(
                    salad['name'],
                    salad['price'],
                    salad,
                ))
            )
        } 
        
        else if (props.sides) {
            setValue(`Sides(${props.sideCount})`)
            setRows(
                props.sides.map((side, index) => createData(
                    side['name'],
                    side['price'],
                    side,
                ))
            )
        } 
        
        else if (props.drinks) {
            setValue(`Drinks(${props.drinkCount})`)
            setRows(
                props.drinks.map((drink, index) => createData(
                    drink['name'],
                    drink['price'],
                    drink
                ))
            )
        } 
        
        else {
            setRows([createData('Failed to Load.', 0)]);
            setValue('Error')
		}
	}, [props]);

	return (
		<TableContainer component={Paper} className={classes.root}>
			<Table className={classes.table} aria-label="cart table">
				<TableHead>
					<TableRow className={classes.tableRow}>
						<TableCell className={classes.tableCell}>{value}</TableCell>
                        <TableCell align="right" className={classes.tableCell}></TableCell>
						<TableCell align="right" className={classes.tableCell}></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<TableRow key={`${row.name}-${index}`}>
							<TableCell component="th" scope="row" className={classes.tableCell}>
								{row.name}
							</TableCell>
                            <TableCell component="th" scope="row" className={classes.tableCellDelete} align="right" onClick={() => props.deleteItem(row.item, index)} >
								Delete
							</TableCell>
							<TableCell className={classes.tableCellPrice} align="right">{`$${row.price}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
