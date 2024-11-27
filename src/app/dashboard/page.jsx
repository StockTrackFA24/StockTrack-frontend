import Chart from 'chart.js/auto';
import {queryWarehouse} from "@/app/lib/data";

export default async function Page() {
    let warehouseItems = await queryWarehouse("", -1);
    return <p>Dashboard Page</p>;
}