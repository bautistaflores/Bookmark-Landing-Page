function Navbar({color, login}) {
    return (
        <nav className='flex items-center gap-10 tracking-widest'>
            <a href="" className={`hover:text-red-400 text-${color}`}>FEATURES</a>
            <a href="" className={`hover:text-red-400 text-${color}`}>PRICING</a>
            <a href="" className={`hover:text-red-400 text-${color}`}>CONTACT</a>
            {login && (
                <a href="" className='bg-red-400 px-7 py-1.5 rounded-md text-white hover:bg-white hover:text-red-400 hover:border-2'>
                    LOGIN
                </a>
            )}
        </nav>
    )
}

export default Navbar