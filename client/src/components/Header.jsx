import LogoBookmark from '../assets/images/logo-bookmark.svg'
import Nabvar from './Navbar.jsx'

function Header() {
    return (
        <header className='flex items-center justify-between px-40 py-12'>
            <a href="">
                <img src={LogoBookmark} alt="Logo Bookmark" className="h-6 sm:h-8"/>
            </a>

            <Nabvar login={true}/>
        </header>
    )
} 

export default Header