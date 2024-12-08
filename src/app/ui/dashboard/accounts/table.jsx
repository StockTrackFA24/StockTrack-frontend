import {queryAccounts} from "@/app/lib/data";

export default async function AccountTable(query) {
    const currentPage = query.currentPage
    const accounts = await queryAccounts(currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Username
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                Role
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {
                            accounts?.map((item) => (
                                <tr
                                    key={item._id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >

                                    <td className="whitespace-nowrap px-3 py-3">
                                        {item.username}
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-3">
                                        {item.name.last}, {item.name.first} {item.name.middle}
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-3">
                                        {item.roleInfo[0].displayName}
                                    </td>

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}