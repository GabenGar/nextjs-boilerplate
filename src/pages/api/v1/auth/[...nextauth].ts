import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_ID, GITHUB_SECRET, SECRET_KEY } from "#environment/env-vars";

export default NextAuth({
  secret: SECRET_KEY,
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
});
