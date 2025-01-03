import React from 'react';
import './layout.css';
import group from '../../assets/grp.png';
import group1 from '../../assets/Group1.png';
import group2 from '../../assets/Group2.png';
import group3 from '../../assets/Group3.png';
import line from '../../assets/Line.png';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChart, Pie as RechartsPie, Cell, Legend as RechartsLegend } from 'recharts';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartJsData = {
    labels: ["Offline Selling", "Online Selling"],
    datasets: [
        {
            label: "Sales Data",
            backgroundColor: ["#00C5D5", "#405189"],
            borderWidth: 1,
            data: [7, 15],
        },
    ],
};

const rechartsData = [
    { name: 'Pending Order', value: 30, color: '#06D6D6' },
    { name: 'Complete Order', value: 70, color: '#26478C' },
];

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { month: 'Jan', value: 40000 },
    { month: 'Feb', value: 60000 },
    { month: 'Mar', value: 90000 },
    { month: 'Apr', value: 50000 },
    { month: 'May', value: 30000 },
    { month: 'Jun', value: 50000 },
    { month: 'Jul', value: 10000 },
    { month: 'Aug', value: 60000 },
    { month: 'Sep', value: 80000 },
];

const SemiCircularProgress = ({ percentage }) => {
    const clampedPercentage = Math.max(0, Math.min(percentage, 100));

    const angle = (clampedPercentage / 100) * 180;

    const radius = 50;
    const strokeWidth = 20;
    const centerX = 60;
    const centerY = 60;

    const largeArcFlag = angle > 180 ? 1 : 0;

    const x = centerX + radius * Math.cos((Math.PI / 180) * (180 - angle));
    const y = centerY - radius * Math.sin((Math.PI / 180) * (180 - angle));

    const arcPath = `
      M ${centerX - radius}, ${centerY}
      A ${radius},${radius} 0 ${largeArcFlag} 1 ${x},${y}
    `;

    return (
        <svg width="180" height="130" viewBox="0 0 120 70">
            <path
                d="M 10,60 A 50,50 0 1,1 110,60"
                fill="none"
                stroke="#00C5D5"
                strokeWidth={strokeWidth}
            />
            <path
                d={arcPath}
                fill="none"
                stroke="#405189"
                strokeWidth={strokeWidth}

            />
        </svg>
    );
};

const Layout = () => {
    return (
        <div className="layout">
            <div className="layout1">
                <div className="layout-frame">
                    <div className="same-div">
                        <img src={group} alt="Revenue" />
                        <p>Today Sale Revenue</p>
                        <h1>₹ 1150.00</h1>
                    </div>
                    <img className="line" src={line} alt="Line" />
                    <div className="same-div">
                        <img src={group1} alt="Sales" />
                        <p>Today Item Sales</p>
                        <h1>10</h1>
                    </div>
                    <img className="line" src={line} alt="Line" />
                    <div className="same-div">
                        <img src={group2} alt="Pending Orders" />
                        <p>Today Pending Orders</p>
                        <h1>51</h1>
                    </div>
                    <img className="line" src={line} alt="Line" />
                    <div className="same-div">
                        <img src={group3} alt="Staff" />
                        <p>All Staff Members</p>
                        <h1>110</h1>
                    </div>
                </div>
                <div className='line-chart'>
                    <div className='line-header'>
                        <p>
                            <h2>Overview</h2>
                            Profit & Loss &nbsp; <span><i className="fa-solid fa-angle-down"></i></span>
                        </p>
                        <div className='line-chart-btn'>
                            <button>All</button>
                            <button>1Y</button>
                            <button>2M</button>
                            <button>1D</button>
                        </div>
                    </div>
                    <hr />
                    <div style={{ width: '100%', height: "250px" }}>
                        <ResponsiveContainer>
                            <LineChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 0,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="month"
                                    tick={{ fill: '#000', fontSize: 12 }}
                                    tickLine={false}
                                />
                                <YAxis
                                    tick={{ fill: '#000', fontSize: 12 }}
                                    tickFormatter={(value) => `${value / 1000}k`}
                                    tickLine={false}
                                />
                                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`]} />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#405189"
                                    strokeWidth={2}
                                    dot={{ stroke: '#405189', strokeWidth: 2 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="layout2">
                <div className="pi-chart">
                    <div className="pi-header">
                        <h2>Selling Products</h2>

                        <button>Aug <i className="fa-solid fa-angle-down">
                        </i></button>

                    </div>
                    <div className="chart">
                        <Pie data={chartJsData} />
                    </div>
                </div>
                <div className="pi-chart">
                    <div className="pi-header">
                        <h2>Order Status</h2>
                    </div>
                    <div className='progress-chart'>
                        <SemiCircularProgress percentage={75} />
                        <div className='text'> <span className='span1'></span>&nbsp; Pending Order &nbsp; <span className='span2'></span>&nbsp; Complete Order</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;