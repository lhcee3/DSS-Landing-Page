import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Add your Google Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Add your Google Client Secret
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add a secret for the session
  // No need to specify custom signIn page, use the default
});