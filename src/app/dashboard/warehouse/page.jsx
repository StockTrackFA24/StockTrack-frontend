import Pagination from '@/app/ui/dashboard/pagination'
import Search from '@/app/ui/search';
import WarehouseTable from "@/app/ui/dashboard/warehouse/table";
import { lusitana } from '@/app/fonts/next_fonts';
import {findWarehousePages} from "@/app/lib/data";
import Link from "next/link";


export default async function Page(props) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
        const currentPage = Number(searchParams?.page) || 1;
        const totalPages = await findWarehousePages(query);
        return (
            <div className="w-full">
                <div className="flex w-full items-center justify-between">
                    <h1 className={`${lusitana.className} text-2xl`}>Warehouse</h1>
                    <Link
                        className="bg-green-800 rounded px-5 py-2"
                        href="/api/export"
                    >
                        CSV Export
                    </Link>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search warehouse items..." />
                </div>
                    <WarehouseTable query={query} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center">
                    {<Pagination totalPages={totalPages} />
                    }
                </div>
            </div>
        );


}