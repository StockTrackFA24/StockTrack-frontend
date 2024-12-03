import {queryWarehouse} from "@/app/lib/data";
import {notFound} from "next/navigation";
import Form from '@/app/ui/dashboard/warehouse/editForm'

export default async function Page(props) {
    let params = await props.params;
    let id = params.id;
    const itemData = await queryWarehouse(id, -1);
    let data = itemData[0]

    if(!itemData) {
        notFound();
    }

    return(
        <Form data={data}/>
    )
}