import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
	const rows = [
		// {
		// 	id: 1143155,
		// 	product: "Christina Jan",
		// 	img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
		// 	date: "1 Mar",
		// 	amount: 20649,
		// 	status: "Open",
		// },
		// {
		// 	id: 2342353,
		// 	product: "Eric Grundy",
		// 	img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
		// 	date: "7 May",
		// 	amount: 7535,
		// 	status: "Open",
		// },
		// {
		// 	id: 2235235,
		// 	product: "Tang Lam trong",
		// 	img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
		// 	date: "14 Feb",
		// 	amount: 6095,
		// 	status: "Pending",
		// },
		// {
		// 	id: 2342355,
		// 	product: "Grio Hanbi",
		// 	img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
		// 	date: "2 Sep",
		// 	amount: 2471,
		// 	status: "Pending",
		// },
		// {
		// 	id: 2357741,
		// 	product: "Ali Yanthon",
		// 	img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
		// 	date: "8 Feb",
		// 	amount: 920,
		// 	status: "Close",
		// },
	];
	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">User ID</TableCell>
						<TableCell className="tableCell">User</TableCell>
						<TableCell className="tableCell">Date</TableCell>
						<TableCell className="tableCell">Fans</TableCell>
						<TableCell className="tableCell">Revenue </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="tableCell">{row.id}</TableCell>
							<TableCell className="tableCell">
								<div className="cellWrapper">
									<img src={row.img} alt="" className="image" />
									{row.product}
								</div>
							</TableCell>
							<TableCell className="tableCell">{row.date}</TableCell>
							<TableCell className="tableCell">{row.amount}</TableCell>
							<TableCell className="tableCell">
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
