import axios from 'axios';

export function queryWarehouse(queryString) {
    axios.post(process.env.BACKEND_ADDRESS, {
        sub: queryString
    },
        {
            headers: {"Content-Type": "application/json"}
        }).then(function (response) {

        }
    )
}