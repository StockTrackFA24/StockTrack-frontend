//Contains helper definitions to abstract permission checks

export function checkPermission(permissionString, permissionToCheck) {
    const indexToCheck = 64 - Number(permissionToCheck.index) - 1;
    return (permissionString.charAt(indexToCheck) == "1");
}

export const permissions_map = {
    VIEW_WAREHOUSE: {
        index: 0,
        value: 1,
    },
    VIEW_STOCK: {
        index: 1,
        value: 2,
    },
    CREATE_ITEM: {
        index: 2,
        value: 4,
    },
    EDIT_ITEM: {
        index: 3,
        value: 8,
    },
    DELETE_ITEM: {
        index: 4,
        value: 16,
    },
    CREATE_STOCK: {
        index: 5,
        value: 32
    },
    EDIT_STOCK: {
        index: 6,
        value: 64,
    },
    DELETE_STOCK: {
        index: 7,
        value: 128,
    },
    VIEW_AUDIT: {
        index: 8,
        value: 256,
    },
    VIEW_ACCOUNT: {
        index: 9,
        value: 512,
    },
    CREATE_ACCOUNT: {
        index: 10,
        value: 1024,
    },
    CREATE_ROLE: {
        index: 11,
        value: 2048,
    }

}