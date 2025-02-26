import { PostListDate } from "@/components/new/PostListDate";

export default async function datePage({ searchParams }) {
  const search = await searchParams;
  return (
    <div>
      <PostListDate params={search} />
    </div>
  );
}
