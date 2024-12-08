import axios from 'axios';
import * as queryString from "node:querystring";

const ITEMS_PER_PAGE = 10

export async function queryWarehouse(queryString, currentPage) {

    let address = process.env.BACKEND_ADDRESS + "/standardQuery";
    let responseData;

    await axios.post(address, {
        sub: queryString
    },
        {
            headers: {"Content-Type": "application/json"}
        }).then(function (response) {
            responseData = response.data;
        }
    ).catch(function (error) {
        console.log(error);
    })
    if (currentPage >= 0 && responseData) {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE
        const offset_end = offset + ITEMS_PER_PAGE;
        responseData = responseData.slice(offset, offset_end);
    }

    return responseData;
}

export async function queryRoles() {

    let address = process.env.BACKEND_ADDRESS + "/roleQuery";
    let responseData;

    await axios.post(address, {},
        {
            headers: {"Content-Type": "application/json"}
        }).then(function (response) {
            responseData = response.data;
    }).catch(function (error) {
        console.log(error);
    })

    return responseData;
}

export async function queryAccounts() {
    let address = process.env.BACKEND_ADDRESS + "/accountQuery";
    let responseData;

    await axios.post(address, {},
        {
            headers: {"Content-Type": "application/json"}
        }).then(function (response) {
            responseData = response.data;
    }).catch(function (error) {
        console.log(error);
    })

    return responseData;
}

export async function findWarehousePages(queryString) {
    let warehouseItems = await queryWarehouse(queryString, -1);
    return Math.ceil(warehouseItems.length / ITEMS_PER_PAGE);
}

export async function queryBatches(queryString, currentPage) {
    let address = process.env.BACKEND_ADDRESS + "/batchesQuery";
    let responseData;
    await axios.post(address, {
            sub: queryString
        },
        {
            headers: {"Content-Type": "application/json"}
        }).then(function (response) {
            responseData = response.data;
        }
    ).catch(function (error) {
        console.log(error);
    })
    if (currentPage >= 0 && responseData) {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE
        const offset_end = offset + ITEMS_PER_PAGE;
        responseData = responseData.slice(offset, offset_end);
    }

    return responseData;
}

export async function findBatchPages(queryString) {
    let batchItems = await queryBatches(queryString, -1);
    return Math.ceil(batchItems.length / ITEMS_PER_PAGE);
}

export async function queryAuditLogs(currentPage) {
    let address = process.env.BACKEND_ADDRESS + "/auditQuery";
    let responseData;
    await axios.post(address, {}, {
        headers: {"Content-Type": "application/json"}
    }).then(function (response) {
        responseData = response.data;
    }).catch(function (error) {
        console.log(error);
    })
    if(currentPage >= 0 && responseData) {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const offset_end = offset + ITEMS_PER_PAGE;
        responseData = responseData.slice(offset, offset_end);
    }
    return responseData;
}

export async function findAuditPages() {
    let auditItems = await queryAuditLogs(-1);
    return Math.ceil(auditItems.length / ITEMS_PER_PAGE);
}

export async function findAccountPages() {
    let accounts = await queryAccounts(-1);
    return Math.ceil(accounts.length / ITEMS_PER_PAGE);
}
