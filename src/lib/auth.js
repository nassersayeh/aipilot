import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialProvider from 'next-auth/providers/credentials'
import { connectToDb } from "./utuils";
import { User } from "./modules";
import bcrypt from 'bcryptjs'
import {authConfig} from './auth.config'

const login = async (cred)=>{
  try{
    connectToDb()
    const user = await User.findOne({username:cred.username});
    if(!user){
      throw new Error("Wrong credentials");
    }
    const isPasswordCorrect = await bcrypt.compare(cred.password,user.password);
    if(!isPasswordCorrect){
      throw new Error("Wrong credentials");
    }

    return user;

  }catch(err){
    console.log(err)
    throw new Error("Faild to login")
  }
}



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials){
        try{
          const user = await login(credentials)
          return user;
        }catch(err){
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
   ...authConfig.callbacks,
  },
});
