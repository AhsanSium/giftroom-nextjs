import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();


// import NextAuth from "next-auth";


// export const authOptions = {
// // Configure one or more authentication providers
// providers: [
//     Auth0Provider({
//         clientId: process.env.AUTH0_CLIENT_ID,
//         clientSecret: process.env.AUTH0_CLIENT_SECRET,
//         issuer: process.env.AUTH0_ISSUER
//         }),
//     // ...add more providers here
// ],
// }
// export default NextAuth(authOptions)