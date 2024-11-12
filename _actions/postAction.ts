import PostModel from "@/models/postModel";
import connectDB from "@/config/database";

export async function getPosts() {
  try {
    await connectDB();
    console.log("Connected to database");
    const post = new PostModel({ msg: "hi people" });
await post.save();

    const data = await PostModel.find({});
    console.log("Fetched data:", data);
    return { data };
  } catch (error:any) {
    console.error("Error fetching posts:", error);
    return { errMsg: error.message };
  }
}
