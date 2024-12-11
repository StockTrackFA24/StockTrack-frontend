import Form from '@/app/ui/dashboard/warehouse/createForm'
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export const metadata = {
    title: 'Create Item'
}

export default async function Page() {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.CREATE_ITEM)
    return(
        <main>
            <Form/>
        </main>
    )
}