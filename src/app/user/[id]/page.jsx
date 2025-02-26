import { PostListUser } from "@/components/new/PostListUser";
import { db } from "@/db";
import "./styles.css";
import Link from "next/link";
// import Image from "next/image";

export default async function UserPage({ params }) {
  const page = await params.id;
  const userInfo = await db.query(`SELECT * FROM users WHERE id = $1`, [page]);
  const brokenUserInfo = userInfo.rows[0];
  console.log(brokenUserInfo);
  console.log(page);
  return (
    <div>
      <div id="UserPageHead">
        <img
          src={`${brokenUserInfo.image}.png`}
          alt={`${brokenUserInfo.name}&apos;s Profile Picture`}
          id="ProfilePicture"
        />
        <header>{brokenUserInfo.name}&apos;s Page</header>
        {/* <Link href={`/user/${page}/edit`} id="UserPageEdit">
          Edit
        </Link> */}
        <p id="UserPageInfo">{brokenUserInfo.user_info}</p>
      </div>

      <div id="UserPagePosts">
        <header className="UserPagePostsHead">
          {brokenUserInfo.name}&apos;s Posts
        </header>
        <PostListUser params={page} />
      </div>
    </div>
  );
}
