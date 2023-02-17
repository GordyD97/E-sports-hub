
const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white flex justify-between items-center px-6 py-4">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10" />
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/roster">Roster</Link>
                    </li>
                    <li>
                        <Link to="/schedule">Schedule</Link
                    </li>
                    <li>
                        <Link to="/news">Latest News</Link>
                    </li>
                </ul>
            </div>
            <div className="md:hidden">
                <button onClick={toggleNav}>
                    {isOpen ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <ul>
                        <li>
                            <Link to="/roster">Roster</Link>
                        </li>
                        <li>
                            <Link to="/schedule">Schedule</Link>
                        </li>
                        <li>
                            <Link to="/news">Latest News</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
