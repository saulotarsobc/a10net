import fetch from 'node-fetch';
import { getAuthParamsType } from "../types";

export const getAuth = async ({ addr, port, user, pass }: getAuthParamsType) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "credentials": {
            "username": user,
            "password": pass
        }
    });

    var requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    fetch(`https://${addr}:${port}/axapi/v3/auth`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}