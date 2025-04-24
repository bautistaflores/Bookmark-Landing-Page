import BrowserCard from './BrowserCard';
import Chrome from '../../assets/images/logo-chrome.svg';
import Firefox from '../../assets/images/logo-firefox.svg';
import Opera from '../../assets/images/logo-opera.svg';
import Line from '../../assets/images/bg-dots.svg';

const browsers = [
    { logo: Chrome, title: "Chrome", version: "62" },
    { logo: Firefox, title: "Firefox", version: "55" },
    { logo: Opera, title: "Opera", version: "46" }
];

const mtLevels = ['mt-0', 'mt-10', 'mt-20'];

function Extensions() {
    return (
        <>
        <div className="flex flex-col justify-center items-center text-[18px] mt-35 mb-25">
            <h2 className="text-3xl font-medium mb-3">Download the extension</h2>
            <p className="text-gray-500 text-center max-w-[535px] mx-auto">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>

        <div className="flex justify-center gap-10 flex-wrap">
            {browsers.map((browser, index) => (
                <div className={mtLevels[index]} key={index}>
                    <BrowserCard {...browser} line={Line} />
                </div>
            ))}
        </div>
        </>
    )
}

export default Extensions