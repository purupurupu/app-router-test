const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsesData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function ListOfPosts() {
  const posts = await getPostsData();
  return (
    <div>
      {posts.map((post: any) => {
        // return key and title of each post
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}
