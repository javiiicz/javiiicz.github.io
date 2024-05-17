function Header() {
    return (
        <header className="bg-slate-200/50 z-50 sticky top-0 backdrop-blur-md">
            <nav className="grid grid-cols-2 gap-4 px-20 h-16">
                <div className="h-full flex items-center px-5">
                    <div className="text-slate-900 text-xl font-extrabold italic">Javier Carrillo</div>
                </div>
                <div className="h-full flex gap-5 items-center justify-end px-5">
                    <a href="#" className="text-slate-900 font-medium hover:font-black transition-all">Link 1</a>
                    <a href="#" className="text-slate-900 font-medium hover:font-black transition-all">Link2</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;