import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex bg-primary justify-between items-center h-20  text-2xl border-b-2 border-mediumGray text-white px-6 lg:px-16">
      <Link href="/" className="rounded-full border-2 border-white p-1 ">
        JW
      </Link>
      <span className="text-lg">
        <a href="mailto:jordirocasoler94@gmail.com">
          jordirocasoler94@gmail.com
        </a>
      </span>
    </header>
  );
};

export default NavBar;
