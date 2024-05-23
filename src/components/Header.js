function Header() {
    return (
        <header className="bg-gray-200/50 z-50 sticky top-0 backdrop-blur-md sm:p-0 p-5">
            <nav className="grid sm:grid-cols-2 sm:grid-rows-1 gap-4 px-20 h-16 grid-rows-2 grid-cols-1">
                <div className="h-full flex items-center px-5 justify-center sm:justify-start">
                    <div className="text-gray-900 text-xl font-extrabold italic">Javier Carrillo</div>
                </div>
                <div className="h-full flex gap-5 items-center sm:justify-end justify-center px-5">
                    <a href="#Skills" className="text-gray-900 font-medium hover:font-black transition-all">Skills</a>
                    <a href="#Projects" className="text-gray-900 font-medium hover:font-black transition-all">Projects</a>
                    <a href="#Experience" className="text-gray-900 font-medium hover:font-black transition-all">Experience</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;