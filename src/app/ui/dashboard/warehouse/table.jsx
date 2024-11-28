import {queryWarehouse} from "@/app/lib/data";

export default async function WarehouseTable(query) {
    const queryString = query.query
    const currentPage = query.currentPage
    const warehouseItems = await queryWarehouse(queryString, currentPage);
    return (
    <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                <div className="md:hidden">
                    {
                        warehouseItems?.map((item) => (
                        <div
                            key={item._id}
                            className="mb-2 w-full rounded-md bg-white p-4"
                        >
                            <div className="flex items-center justify-between border-b pb-4">
                                <div>
                                    <div className="mb-2 flex items-center">
                                        <p>{item.name}</p>
                                    </div>
                                    <p className="text-sm text-gray-500">{item.category}</p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-between pt-4">
                                <div>
                                    <p className="text-xl font-medium">
                                        {item.price
                                        }
                                    </p>
                                    <p>{item.stock
                                    }</p>
                                    <p>
                                        {item.description
                                        }
                                    </p>
                                </div>
                                <div className="flex justify-end gap-2">
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <table className="hidden min-w-full text-gray-900 md:table">
                    <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Category
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Price
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Stock
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Description
                        </th>
                        <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {
                        warehouseItems?.map((item) => (
                        <tr
                            key={item._id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    <p>{item.name}</p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {item.category}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {item.price
                                }
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {item.stock
                                }
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {item.description}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">

                                </div>
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