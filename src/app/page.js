import Link from "next/link";

export default function Home() {
  return (
    <Link href="/todo">
      <button className="p-4 m-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700">
        Go to Todo App
      </button>
    </Link>
  );
}
