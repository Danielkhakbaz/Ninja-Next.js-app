import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <Image
            src="/TopLogo.jpg"
            width={100}
            height={90}
            alt="Twenty One Pilots' logo"
          />
        </div>
        <div className="navbar__links">
          <Link href="/">
            <a className="navbar__link">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar__link">About</a>
          </Link>
          <Link href="/ninjas">
            <a className="navbar__link">Ninjas</a>
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
