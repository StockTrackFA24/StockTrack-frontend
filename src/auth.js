import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {authConfig} from "@/auth.config";
import axios from 'axios';

async function attemptLogin(username, password) {
    const address = process.env.AUTH_ADDRESS + "/users/login";
    const requestBody = {
        username: username,
        password: password,
    }
    let responseBody;
    await axios.post(address, requestBody, {
        headers: {"Content-Type": "application/json"}
    }).then(response => {
        responseBody = response.data;
    }).catch(function (error) {
        responseBody = null;
    });
    return responseBody;
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                    const username = credentials.username;
                    const password = credentials.password;
                    const authResult = await attemptLogin(username, password);
                    if (!authResult) return null;
                    return authResult;
            },
        }),
    ],
});