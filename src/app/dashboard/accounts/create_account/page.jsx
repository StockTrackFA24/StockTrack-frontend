import Form from '@/app/ui/dashboard/accounts/create_account/createForm'
import {queryRoles} from "@/app/lib/data";
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export default async function Page() {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.CREATE_ACCOUNT)

    const queryList = await queryRoles();
    let potentialRoles = []
    queryList.forEach(role => {
        potentialRoles.push(role.name);
    })

    return(
        <Form roleList={potentialRoles}/>
    )
}