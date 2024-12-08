import Pagination from '@/app/ui/dashboard/pagination'; // Do
import AccountTable from '@/app/ui/dashboard/accounts/table';     // Do
import {lusitana} from "@/app/fonts/next_fonts";        // Do
import {findAccountPages} from "@/app/lib/data";        // Do

export default async function Page(props) {

    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await findAccountPages();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Accounts</h1>
            </div>

            <AccountTable currentPage={currentPage}/>

            <div className="mt-5 flex w-full justify-center">
                {<Pagination totalPages={totalPages}/>}
            </div>
        </div>
    );

}