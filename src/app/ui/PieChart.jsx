'use client';
import {Chart, Legend, ArcElement, Tooltip, Title} from "chart.js";
import autocolors from 'chartjs-plugin-autocolors';
Chart.register(Legend, ArcElement, Tooltip, autocolors, Title);
import {Pie} from 'react-chartjs-2'

export default function PieChart(props) {
    let warehouseItems = props.data;
    let labels = [] //need to unpack names
    let dataValues = [] //need to unpack stock number * item value
    warehouseItems.forEach((item) => {
        labels.push(item.name);
        dataValues.push(item.price * item.stock);
    })


    const data = {
        labels: labels,
        datasets: [{
            label: "Total Item Value",
            data: dataValues,
        }]
    }
    const options = {
        responsive: true,
        plugins: {
            autocolors: {
                mode: 'data'
            },
            title: {
                display: true,
                text: "Contribution of Items to Total Warehouse Value",
            }
        }
    }

    return (
        <Pie data={data} options={options}/>
    )
}