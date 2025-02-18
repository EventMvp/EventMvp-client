import { jwtDecode } from "jwt-decode";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { config } from "./constants/url";
import { JWT } from "next-auth/jwt";

interface DecodedToken {
  iss: string; // Issuer
  iat: number; // Issued At (timestamp)
  exp: number; // Expiration Time (timestamp)
  sub: string; // Subject
  scope: string; // Scope
  userId: number; // User ID
}

interface UserSession extends User {}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const res = await fetch(config.BASE_URL + config.endpoints.login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
          credentials: "include",
        });

        if (!res.ok) return null;

        const user = await res.json();
        if (!user) {
          throw new Error("User not found.");
        }
        const useCookies = cookies();
        useCookies.set("sid", user.token, {
          httpOnly: true,
          secure: false,
          maxAge: 3600,
          path: "/",
        });
        // decode jwt
        const decoded = jwtDecode<DecodedToken>(user.token);
        return {
          id: decoded.userId.toString(),
          email: decoded.sub,
          role: decoded.scope,
        };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: UserSession }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user = {
        id: token.id,
        email: token.email,
        role: token.role,
      };
      return session;
    },
  },
  session: {
    maxAge: 12 * 60 * 60,
  },
});
