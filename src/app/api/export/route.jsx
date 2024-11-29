import axios from 'axios';

export async function GET() {
    let address = process.env.BACKEND_ADDRESS + "/exportItems";
    let csvString = "";
    await axios.post(address).then(response => {
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