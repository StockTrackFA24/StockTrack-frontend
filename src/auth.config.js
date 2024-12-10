export const authConfig = {
    pages: {
        signIn: '/login',
    },
    session: { jwt: true },
    callbacks: {
        authorized({ auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
                token.user.permissions = "0b" + token.user.permissions;
            }
            return token;
        },
        },
    providers: [],
}