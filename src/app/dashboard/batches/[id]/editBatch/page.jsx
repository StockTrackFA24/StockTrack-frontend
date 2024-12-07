import {queryBatches} from "@/app/lib/data";
import {notFound} from "next/navigation";
import Form from '@/app/ui/dashboard/batches/editForm'

export default async function Page(props) {
    let params = await props.params;
    let id = params.id;
    const itemData = await queryBatches(id, -1);
    let data = itemData[0]
    console.log(data)

    if(!itemData || !data) {
        notFound();
    }

    return(
        <Form data={data}/>
    )
}