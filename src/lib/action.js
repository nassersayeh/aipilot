"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./modules";
import { connectToDb } from "./utuils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState,formData) => {
  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")
  const { title, desc, slug, userId , longdesc} = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      longdesc
    });

    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};

export const addUser = async (prevState,formData) => {

  const { username,email,password,img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,email,password,img
    });

    await newUser.save();
    console.log("Saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");

  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({userId:id})
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};

export const handleGithubLogin = async (e) => {
  "use server";
  await signIn("github");
};

export const handleLogout = async (e) => {
  "use server";
  await signOut();
};
export const register = async (previousState,formData) => {
  "use server";
  const { username, email, password, img, passwordre } =
    Object.fromEntries(formData);
  if (password !== passwordre) {
    return {error:"Password do not match"};
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return {error:"User is Already exists"};
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to DB");
    return {success:true}
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const login = async (prevState,formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials",{username,password})
  } catch (err) {
    console.log(err);
    if(err.message.includes("CredentialsSignin")){
      return {error:"Invalid username or password"}
    }
    throw err;
  }
};


