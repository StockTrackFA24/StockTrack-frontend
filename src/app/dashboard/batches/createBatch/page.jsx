import {Form} from '@/app/ui/dashboard/batches/createBatchForm'
import {queryWarehouse} from "@/app/lib/data";


export default async function Page() {
    const queryList = await queryWarehouse('', -1);
    let potentialItems = []
    queryList.forEach(item => {
        potentialItems.push(item.name);
    })

    return(
        <Form itemList={potentialItems}/>
    )
}