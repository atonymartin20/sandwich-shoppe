import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
        maxWidth: '800px',
	},
	table: {
        width: '100%',
        marginTop: '5px',
        borderTop: '2px solid black',
	},
	tableCell: {
        fontSize: '1.6rem',
        border: 'none',
        padding: '4px',
    },
    tableCellPrice: {
        fontSize: '1.6rem',
        border: 'none',
        width: '100px',
        padding: '4px',
    },
}));

export default function BasicTable(props) {
	const classes = useStyles();
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [tax, setTax] = React.useState(0);
    const [finalPrice, setFinalPrice] = React.useState(0);

	React.useEffect(() => {
		if (props.itemCount) {
            setTotalPrice(props.orderPrice.toFixed(2))
            setTax((props.orderPrice * 0.075).toFixed(2))
            setFinalPrice(((props.orderPrice * 0.075) + props.orderPrice).toFixed(2))
        }  
       
        else {
            return null;
		}
	}, [props]);

	return (
		<TableContainer component={Paper} className={classes.root}>
			<Table className={classes.table} aria-label="cart table">
				<TableBody>
                    <TableRow key={'row1'}>
                        <TableCell className={classes.tableCell}>
                            {`Subtotal`}
                        </TableCell>
                        <TableCell className={classes.tableCellPrice} align='right' >
                            {`$${totalPrice}`}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'row2'}>
                        <TableCell className={classes.tableCell}>
                            {'Tax'}
                        </TableCell>
                        <TableCell className={classes.tableCellPrice} align='right' >
                            {`$${tax}`}
                        </TableCell>
                    </TableRow>
                    <TableRow key={'row3'}>
                        <TableCell className={classes.tableCell}>
                            {'Total'}
                        </TableCell>
                        <TableCell className={classes.tableCellPrice} align='right' >
                            {`$${finalPrice}`}
                        </TableCell>
                    </TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
