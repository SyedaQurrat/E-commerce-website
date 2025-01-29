import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Temporary users data store
const users: { id: string; name: string; email: string; password: string }[] = [];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if user exists in our "users" array
        const user = users.find(
          (u) =>
            u.email === credentials?.email && u.password === credentials?.password
        );

        if (user) {
          // Return user if credentials are correct
          return { id: user.id, name: user.name, email: user.email };
        } else {
          // If no user found, return null
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
