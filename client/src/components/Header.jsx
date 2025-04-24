import LogoBookmark from '../assets/images/logo-bookmark.svg'

function Header() {
    return (
        <header className='flex items-center justify-between px-40 py-12'>
            <div >
                <img src={LogoBookmark} alt="Logo Bookmark" className="h-6 sm:h-8"/>
            </div>

            <nav className='flex items-center gap-10 tracking-widest'>
                <a href="" className='hover:text-red-400'>FEATURES</a>
                <a href="" className='hover:text-red-400'>PRICING</a>
                <a href="" className='hover:text-red-400'>CONTACT</a>
                <a href="" className='bg-red-400 px-7 py-1.5 rounded-md text-white hover:bg-white hover:text-red-400 hover:border-2'>LOGIN</a>
            </nav>
        </header>
    )
} 

export default Header