import Form from '@/app/ui/dashboard/accounts/create_role/createForm'
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export const metadata = {
    title: 'Create Role'
}

export default async function Page() {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.CREATE_ROLE)
    return (
        <main>
            <Form/>
        </main>
    )
}