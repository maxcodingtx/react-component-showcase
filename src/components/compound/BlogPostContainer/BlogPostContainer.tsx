import { useState } from "react";
import Button from "../../common/Button";
import { type Blog, fetchPost } from "./fetchBlogPost";
import { BarLoader } from "react-spinners";

export default function BlogPostContainer() {
  const [post, setPost] = useState<Blog | null>(null);
  const randomId = Math.floor(Math.random() * 3) + 1;
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto mt-5 block max-w-2xl border-5 border-sky-300 p-5">
      <h1 className="mb-4 text-center text-4xl">
        Random Blog Post <br /> Generator
      </h1>
      <div className="">
        <Button
          className="mx-auto block"
          type="button"
          onClick={() => {
            setPost(null);
            setLoading(true);

            setTimeout(() => {
              fetchPost(randomId)
                .then((data) => setPost(data))
                .then(() => setLoading(false))
                .catch((error) =>
                  console.error("Failed to fetch post:", error),
                );
            }, 1000);
          }}
        >
          Get Random Post
        </Button>

        {loading && (
          <div className="mt-5 flex justify-center">
            <BarLoader
              cssOverride={{ backgroundColor: "oklch(82.8% 0.111 230.318)" }}
            />
          </div>
        )}
      </div>

      <article className="px-20 text-center">
        <h1 className="mb-4 text-3xl text-black capitalize">{post?.title}</h1>
        <h3 className="text-black">{post?.body}</h3>
      </article>
    </div>
  );
}
