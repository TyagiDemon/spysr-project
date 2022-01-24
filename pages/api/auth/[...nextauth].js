import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
	],
	jwt: {
		encryption: true,
	},
	secret: process.env.SECRET,
	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
		redirect: async (url, _baseUrl) => {
			if (url === "/profile") {
				return Promise.resolve("/");
			}
			return Promise.resolve("/");
		},
	},
});
