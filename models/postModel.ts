import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  msg: { type: String, required: true },
}, { timestamps: true });

// Use mongoose.models.Posts || to prevent recompiling the model if it already exists
const PostModel = mongoose.models.Posts || mongoose.model('Posts', postSchema);

export default PostModel;
