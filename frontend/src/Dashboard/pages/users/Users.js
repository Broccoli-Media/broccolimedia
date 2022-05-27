import "./Users.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const Users = ({ columns }) => {
	return (
		<div className="users">
			<Sidebar />
			<div className="usersContainer">
				<Navbar />
				<Datatable columns={columns} />
			</div>
		</div>
	)
}

export default Users;