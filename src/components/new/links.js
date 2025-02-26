import Link from "next/link";

export default function SortLinks() {
  return (
    <ul id="sortLinks">
      <p className="sortLinks">Sort By:</p>
      <Link className="sortLinks" href={`/sort-by-date?sort=asc`}>
        {" "}
        Date New to Old
      </Link>
      <Link className="sortLinks" href={`/sort-by-date?sort=desc`}>
        {" "}
        Date Old to New
      </Link>
      <Link className="sortLinks" href={`/sort-by-upvotes?sort=asc`}>
        {" "}
        Votes Ascending
      </Link>
      <Link className="sortLinks" href={`/sort-by-upvotes?sort=desc`}>
        {" "}
        Votes Descending
      </Link>
    </ul>
  );
}
