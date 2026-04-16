import { BASE_URL } from "@/constants/api";
import { NextAuthOptions } from "next-auth";
import { jwtDecode } from "jwt-decode";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "signin",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async function (credentials) {
        const response = await fetch(
          `${BASE_URL}/api/v1/auth/signin`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        );
        const resData = await response.json();
        const x: any = jwtDecode(resData.token);

        if (resData.message === "success") {
          const { role, ...userData } = resData.user;
          return {...userData,id:x.id,userToken:resData.token};
        }

        return null;
      },
    }),

GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
}),


  ],
  secret: process.env.NEXTAUTH_SECRET || "Social_Login_Development_Secret_123!_Change_For_Production",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: { signIn: "/signin" },
  callbacks: {
    signIn: async ({ user, account }: any) => {
      console.log("SignIn callback triggered:", { user: user?.email, provider: account?.provider });
      return true;
    },
    jwt: async function ({ user, token, account }: any) {
      console.log("JWT callback:", { hasUser: !!user, hasToken: !!token, provider: account?.provider });

      if (user) {
        token.userId = user.id;
        token.email = user.email;
        token.name = user.name;
        token.provider = account?.provider || "credentials";

        if (account?.provider === "google" || account?.provider === "facebook") {
          // Simplified: just set a token for OAuth users
          token.credentialToken = `oauth_${account.provider}_${user.id}_${Date.now()}`;
          console.log("OAuth user authenticated, token set");
        } else {
          token.credentialToken = user.userToken;
        }
      }
      return token;
    },
    session: function ({ session, token }: any) {
      console.log("Session callback:", { hasSession: !!session, hasToken: !!token });

      if (session.user) {
        session.user.id = token.userId;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.provider = token.provider;
        session.user.credentialToken = token.credentialToken;
      }
      return session;
    },
  },
};
