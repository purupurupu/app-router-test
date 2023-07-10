import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  return res.json();
};

export default async function ListOfPosts() {
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUsersData(),
    getDogData(),
  ]);
  // console.log(users);
  return (
    <div>
      <h1>List of Posts</h1>
      <Image src={dog.message} alt="dog" width={500} height={500} />
      {posts.map((post: any) => {
        // return key and title of each post
        return <div key={post.id}>{post.title}</div>;
      })}
      <div>
        {users.map((user: any) => {
          // return key and title of each post
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </div>
  );
}
