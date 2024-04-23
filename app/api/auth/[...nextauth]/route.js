import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/app/models/User'
import connectDB from '@/app/db/connectDB'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider === "github") {
          await connectDB();
          if (email) {
            const currentUser = await User.findOne({ email });
            if (!currentUser) {
              // Split email only if it's defined and not null
              const username = email.split("@")[0];
              const newUser = await User.create({
                email,
                name: profile.name,
                username,
              });       
            } 
          }
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session, user, token }) {
      try {
        if (session && session.user && session.user.email) {
          const dbUser = await User.findOne({ email: session.user.email });
          if (dbUser) {
            session.user.name = dbUser.username;
          }
        }
      } catch (error) {
        console.error("Error in session callback:", error);
      }
      return session;
    }
  }
});

export { authoptions as GET, authoptions as POST };
