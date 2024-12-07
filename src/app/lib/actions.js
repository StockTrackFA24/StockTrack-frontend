'use server';

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import axios from "axios";
import fs from "node:fs/promises";

export async function createItem(prevState, formData) {
    const requestData = {
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: Number(formData.get('price')),
        stock: Number(formData.get('stock')),
    }
    const address = process.env.BACKEND_ADDRESS + '/createItem';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })
    revalidatePath('/dashboard/warehouse')
    redirect('/dashboard/warehouse')
}

export async function editItem(id, prevState, formData) {
    const requestData = {
        _id: id,
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: Number(formData.get('price')),
    }
    const address = process.env.BACKEND_ADDRESS + '/itemUpdate';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })
    revalidatePath('/dashboard/warehouse');
    redirect('/dashboard/warehouse');
}

export async function deleteItem(id) {
    const requestData = {
        _id: id,
    };
    const address = process.env.BACKEND_ADDRESS + '/removeItem';
    await axios.post(address, requestData, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    });
    revalidatePath('/dashboard/warehouse');
}

export async function createBatch(prevState, formData) {
    const requestData = {
        name: formData.get('itemName'),
        stock: Number(formData.get('stock')),
    }
    const address = process.env.BACKEND_ADDRESS + '/createBatch';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })
    revalidatePath('/dashboard/batches');
    redirect('/dashboard/batches');
}

export async function deleteBatch(id) {
    const requestData = {
        _id: id,
    };
    const address = process.env.BACKEND_ADDRESS + '/removeBatch';
    await axios.post(address, requestData, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    });
    revalidatePath('/dashboard/batches');
}

export async function editBatch(id, previousStock, prevState, formData) {
    const increment = Number(previousStock) - Number(formData.get("stock"));
    const address = process.env.BACKEND_ADDRESS + '/batchStock';
    const requestData = {
        _id: id,
        stock: increment,
    }
    await axios.post(address, requestData, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {

    }).catch(function (error) {
        console.log(error)
    })
    revalidatePath('/dashboard/batches');
    redirect('/dashboard/batches');
}

export async function uploadFile(formData) {
    const file = formData.get("file");
    if(file.name.endsWith(".csv")) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const fileString = String.fromCharCode.apply(null, buffer)
        const address = process.env.BACKEND_ADDRESS + '/importCSV';
        const requestData = {
            csvString: fileString,
        }
        await axios.post(address, requestData, {
            headers: {"Content-Type": "application/json"}
        }).then(response => {

        }).catch(function (error) {
            console.log(error)
        })
        revalidatePath('/dashboard/warehouse');
    }
}