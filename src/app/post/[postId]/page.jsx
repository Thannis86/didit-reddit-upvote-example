import { CommentForm } from "@/components/CommentForm";
import { CommentList } from "@/components/CommentList";
import { Vote } from "@/components/Vote";
import { db } from "@/db";
import Link from "next/link";

const data = await db.query(`SELECT * from posts`);
console.log(data);

// export const metadata = {
//   title: "Page",
//   description: "A social app like Reddit or Hacker News",
// };

export async function generateMetadata({ params }) {
  const postId = params.postId;
  const data = await db.query(`SELECT * from posts WHERE posts.id = $1`, [
    postId,
  ]);
  const brokenData = data.rows[0].title;
  return {
    title: brokenData,
    description: params.description,
  };
}

export default async function SinglePostPage({ params }) {
  const postId = params.postId;

  const { rows: posts } = await db.query(
    `SELECT posts.id, posts.title, posts.body, posts.user_id, posts.created_at, users.name, 
    COALESCE(SUM(votes.vote), 0) AS vote_total
    FROM posts
    JOIN users ON posts.user_id = users.id
    LEFT JOIN votes ON votes.post_id = posts.id
    WHERE posts.id = $1
    GROUP BY posts.id, users.name
    LIMIT 1;`,
    [postId]
  );
  const post = posts[0];

  const { rows: votes } = await db.query(
    `SELECT *, users.name from votes
     JOIN users on votes.user_id = users.id`
  );

  return (
    <div className="max-w-screen-lg mx-auto pt-4 pr-4">
      <div className="flex space-x-6">
        <Vote postId={post.id} votes={post.vote_total} />
        <div className="">
          <h1 className="text-2xl">{post.title}</h1>
          <Link href={`/user/${post.user_id}`} className="text-zinc-700">
            posted by {post.name}
          </Link>
        </div>
      </div>
      <main className="whitespace-pre-wrap m-4">{post.body}</main>

      <CommentForm postId={post.id} />
      <CommentList postId={post.id} />
    </div>
  );
}
