import axios from 'axios';
import {auth} from "@/auth";
import {checkPermission, permissions_map} from "@/app/lib/permissions";

export async function GET() {
    const session = await auth();
    const token = session.user.token;
    const userId = session.user.uid;
    let address = process.env.BACKEND_ADDRESS + "/exportItems";
    let csvString = "";
    await axios.post(address, {uid: userId}, {
        headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    }).then(response => {
        csvString = response.data;
    })
    //let buffer = Buffer.from(csvString, "utf-8");
    let fileName = "export.csv";
    const contentType = "text/csv";
    const headers = new Headers();
    headers.append("Content-Disposition", `attachment; filename=${fileName}`);
    headers.append("Content-Type", contentType);
    return new Response(csvString, {headers: headers});
}