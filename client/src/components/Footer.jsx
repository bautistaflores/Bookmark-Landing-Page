import Nabvar from './Navbar.jsx'
import { LogoBookmark, LogoFacebook, LogoX } from './LogosSvg.jsx';

function Footer() {
    return(
        <div className="flex bg-blue-950 py-8 px-40 items-center gap-20">
            <a href="">
                <LogoBookmark />
            </a>

            <Nabvar color={'white'}/>

            <div className="flex gap-7 ml-auto">
                <a href="">
                    <LogoFacebook />
                </a>
                <a href="">
                    <LogoX />
                </a>
            </div>
        </div>
    )
}

export default Footer;