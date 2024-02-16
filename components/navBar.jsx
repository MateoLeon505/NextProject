import Link from "next/link";
import './navBar.css';

const NavBar = () => {

  return (
    <nav className="navBar py-5 px-2">
      <h1 className="text-3xl font-bold"><Link href={"/"} className="title">NavBar</Link></h1>
      <div className="sections">
        <div><Link href="/">Home</Link></div>
        <div><Link href="/about">About</Link></div>
        <div><Link href="/shopping">Shopping</Link></div>
        <div><Link href="/posts">Posts</Link></div>
      </div>
    </nav>
  );
}

export default NavBar;