import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                ONbot
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                Commands
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://discord.gg/uzsBkB9wm4"
                target="_blank"
              >
                Discord Server
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
