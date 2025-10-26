export interface Blog {
  id: number;
  title: string;
  body: string;
}

export async function fetchPost(id: number): Promise<Blog> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Error fetching post with id ${id}: ${res.statusText}`);
    }
    return res.json();
  });

  return response as Blog;
}
