import { useState } from "react";
import Button from "../../common/Button";
import { type Blog, fetchPost } from "./fetchBlogPost";

export default function BlogPostContainer() {
  const [post, setPost] = useState<Blog | null>(null);
  const randomId = Math.floor(Math.random() * 3) + 1;

  return (
    <div className="mx-auto mt-5 block max-w-2xl border-5 border-sky-300 p-5">
      <h1 className="mb-4 text-center text-4xl">
        Random Blog Post <br /> Generator
      </h1>
      <Button
        className="mx-auto block"
        type="button"
        onClick={() => {
          fetchPost(randomId)
            .then((data) => setPost(data))
            .catch((error) => console.error("Failed to fetch post:", error));
        }}
      >
        Get Random Post
      </Button>

      <article className="px-20 text-center">
        <h1 className="mb-4 text-3xl text-black capitalize">{post?.title}</h1>
        <h3 className="text-black">{post?.body}</h3>
      </article>
    </div>
  );
}
