import React, { useContext } from 'react';
import "./Dashboard.scss";

import Widget from "./components/widget/Widget";
import Featured from "./components/featured/Featured";
import Chart from "./components/chart/Chart";
import Table from "./components/table/Table";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { AuthContext } from "../Mainpage/context/AuthContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="Dashboard">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    {(user.Admin === true) && <Widget type="user" />}
                    <Widget type="order" />
                    <Widget type="earning" />
                    {/* <Widget type="balance" /> */}
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Recent Earning" aspect={2 / 1} />
                </div>
                {!user.Admin && (
                <div className="listContainer">
                    <div className="listTitle">Peer Ranking</div>
                    <Table />
                </div>
                )}
                {(user.Admin === true) && (
                    <div className="listContainer">
                        <div className="listTitle">User Onboard</div>
                        <Table />
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dashboard;
