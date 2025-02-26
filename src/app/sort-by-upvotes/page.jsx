import { PostListVotes } from "@/components/new/PostListUpvotes";

export default async function datePage({ searchParams }) {
  const search = await searchParams;
  return (
    <div>
      <PostListVotes params={search} />
    </div>
  );
}
