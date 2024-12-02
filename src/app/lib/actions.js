'use server';

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import axios from "axios";

export async function createItem(prevState, formData) {
    const requestData = {
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: formData.get('price'),
        stock: formData.get('stock'),
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

export async function deleteItem(id) {
    console.log(id);
    const address = process.env.BACKEND_ADDRESS + '/deleteItem';
}