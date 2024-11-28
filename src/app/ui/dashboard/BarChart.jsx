'use client';
import {Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
import autocolors from 'chartjs-plugin-autocolors';
Chart.register(autocolors, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import {Bar} from 'react-chartjs-2'

export default function BarChart(props) {
    let warehouseItems = props.data;
    let labels = [] //need to unpack names
    let dataValues = [] //need to unpack stock number * item value
    warehouseItems.forEach((item) => {
        labels.push(item.name);
        dataValues.push(item.stock);
    })

    const data = {
        labels: labels,
        datasets: [{
            label: "Item Stock",
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
                text: "Stock Number per Item",
            },
            legend: {
                display: false,
            }
        }
    }

    return (
        <Bar data={data} options={options}/>
    )
}