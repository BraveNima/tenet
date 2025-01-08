import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-screen items-center justify-center">
      <div className="flex-1 m-6">
        <p className="text-lg text-center">Tests</p>
        <hr className="my-2" />
        <div className="flex flex-wrap justify-center">
          <Link
            href={"/home"}
            className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
          >
            <i className="fab fa-github mr-1"></i> Test A
          </Link>
          <Link
            href={"/form"}
            className="bg-blue-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
          >
            <i className="fab fa-facebook mr-1"></i> Test B
          </Link>
          <Link
            href={"/admin"}
            className="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
          >
            <i className="fab fa-youtube mr-1"></i> Test C
          </Link>
        </div>
      </div>
    </main>
  );
}
