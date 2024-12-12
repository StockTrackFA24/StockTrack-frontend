//contains all functions that need to be called as the result of an html form

'use server';

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import axios from "axios";
import {signIn} from "../../auth";
import {auth} from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect";
import {CredentialsSignin} from "next-auth";




export async function createItem(prevState, formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;

    const requestData = {
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: Number(formData.get('price')),
        stock: Number(formData.get('stock')),
        uid: userId
    }
    const address = process.env.BACKEND_ADDRESS + '/createItem';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })
    revalidatePath('/dashboard/warehouse')
    redirect('/dashboard/warehouse')
}

export async function createRole(prevState, formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const requestData = {
        role_name: formData.get('role_name'),
        display_name: formData.get('display_name'),
        description: formData.get('description'),
        Perms: formData.get('permissions'),
        uid: userId,
    }

    const address = process.env.BACKEND_ADDRESS + '/createRole';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        //console.log(response);
        console.log(error);
    })



    revalidatePath('/dashboard/accounts')
    redirect('/dashboard/accounts')
}

export async function createAccount(prevState, formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const requestData = {
        name: {
            first: formData.get('first_name'),
            middle: formData.get('middle_name'),
            last: formData.get('last_name'),
        },
        role: formData.get('role'),
        username: formData.get('username'),
        password: formData.get('password'),
        uid: userId,
    }

    const address = process.env.BACKEND_ADDRESS + '/createAccount';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })

    revalidatePath('/dashboard/accounts')
    redirect('/dashboard/accounts')
}

export async function editItem(id, prevState, formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const requestData = {
        _id: id,
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        price: Number(formData.get('price')),
        uid: userId,
    }
    const address = process.env.BACKEND_ADDRESS + '/itemUpdate';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })
    revalidatePath('/dashboard/warehouse');
    redirect('/dashboard/warehouse');
}

export async function deleteItem(id) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const requestData = {
        _id: id,
        uid: userId,
    };
    const address = process.env.BACKEND_ADDRESS + '/removeItem';
    await axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    });
    revalidatePath('/dashboard/warehouse');
}

export async function createBatch(prevState, formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const requestData = {
        name: formData.get('itemName'),
        stock: Number(formData.get('stock')),
        uid: userId,
    }
    const address = process.env.BACKEND_ADDRESS + '/createBatch';
    axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    })
    revalidatePath('/dashboard/batches');
    redirect('/dashboard/batches');
}

export async function deleteBatch(id) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const requestData = {
        _id: id,
        uid: userId,
    };
    const address = process.env.BACKEND_ADDRESS + '/removeBatch';
    await axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error);
    });
    revalidatePath('/dashboard/batches');
}

export async function editBatch(id, previousStock, prevState, formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;
    const increment = Number(previousStock) - Number(formData.get("stock"));
    const address = process.env.BACKEND_ADDRESS + '/batchStock';
    const requestData = {
        _id: id,
        stock: increment,
        uid: userId,
    }
    await axios.post(address, requestData, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {

    }).catch(function (error) {
        console.log(error)
    })
    revalidatePath('/dashboard/batches');
    redirect('/dashboard/batches');
}

export async function uploadFile(formData) {
    const session = await auth()
    const token = session.user.token;
    const userId = session.user.uid;

    const file = formData.get("file");
    if(file.name.endsWith(".csv")) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const fileString = String.fromCharCode.apply(null, buffer)
        const address = process.env.BACKEND_ADDRESS + '/importCSV';
        const requestData = {
            csvString: fileString,
            uid: userId,
        }
        await axios.post(address, requestData, {
            headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
        }).then(response => {

        }).catch(function (error) {
            console.log(error)
        })
        revalidatePath('/dashboard/warehouse');
        redirect('/dashboard/warehouse');
    }
}

export async function authenticate(prevState, formData) {
    const username = formData.get('username');
    const password = formData.get('password');
    try {
        await signIn('credentials', {username: username, password: password});
    } catch (error) {
        if (isRedirectError(error)) {
            redirect("/dashboard")
        } else {
            if (error instanceof CredentialsSignin) {
                return "Credentials Incorrect"
            }
        }
        return "Something went wrong with sign in";
    }
}