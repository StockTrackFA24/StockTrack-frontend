// adds next auth route protection to all routes starting with dashboard

import NextAuth from 'next-auth';
import {authConfig} from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/dashboard(.*)"],
};