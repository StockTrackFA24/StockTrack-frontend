import Pagination from '@/app/ui/dashboard/pagination'
import Search from '@/app/ui/search';
import BatchTable from "@/app/ui/dashboard/batches/table";
import {lusitana} from "@/app/fonts/next_fonts";
import {findBatchPages} from "@/app/lib/data";

export default async function Page(props) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await findBatchPages(query);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Batches</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search batches..." />
            </div>
            <BatchTable query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                {<Pagination totalPages={totalPages} />
                }
            </div>
        </div>
    );
}