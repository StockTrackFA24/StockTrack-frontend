import {queryWarehouse} from "@/app/lib/data";
import PieChart from "@/app/ui/PieChart";


export default async function Page() {
    const data = await queryWarehouse("", -1);


    return (
        <div>
            <p>
                Dashboard Page
            </p>
            <div style={{height: '50%', width: '50%'}}>
                <PieChart data={data}/>
            </div>
        </div>
    );
}