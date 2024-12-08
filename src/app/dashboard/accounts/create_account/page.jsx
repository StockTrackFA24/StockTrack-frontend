import Form from '@/app/ui/dashboard/accounts/create_account/createForm'
import {queryRoles} from "@/app/lib/data";

export default async function Page() {

    const queryList = await queryRoles();
    let potentialRoles = []
    queryList.forEach(role => {
        potentialRoles.push(role.name);
    })

    return(
        <Form roleList={potentialRoles}/>
    )
}