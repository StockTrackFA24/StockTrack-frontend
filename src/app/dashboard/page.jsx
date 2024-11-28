import {queryWarehouse} from "@/app/lib/data";
import PieChart from "@/app/ui/dashboard/PieChart";
import BarChart from "@/app/ui/dashboard/BarChart";


export default async function Page() {
    const data = await queryWarehouse("", -1);


    return (
        <div className="border-2 border-gray-900" style={{borderRadius: 4, display: "flex", alignItems: "center"}}>
            <div style={{height: '50%', width: '50%'}}>
                <PieChart data={data}/>
            </div>
            <div style={{height: '50%', width: '50%'}}>
                <BarChart data={data}/>
            </div>
        </div>
    );
}