import Pagination from '@/app/ui/dashboard/pagination'
import AuditTable from "@/app/ui/dashboard/logs/table";
import {lusitana} from "@/app/fonts/next_fonts";
import {findAuditPages} from "@/app/lib/data";
import {checkPermission, permissions_map} from "@/app/lib/permissions";
import {auth} from "@/auth";

export default async function Page(props) {
    const session = await auth();
    let authorized = checkPermission(session.user.permissions, permissions_map.VIEW_AUDIT)
    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await findAuditPages();
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Audit Logs</h1>
            </div>
            <AuditTable currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                {<Pagination totalPages={totalPages} />
                }
            </div>
        </div>
    );
}