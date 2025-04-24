import { useState } from 'react'

import FeatureTab1 from '../assets/images/illustration-features-tab-1.svg';
import FeatureTab2 from '../assets/images/illustration-features-tab-2.svg';
import FeatureTab3 from '../assets/images/illustration-features-tab-3.svg';

const features = [
    {
        title: 'Simple Bookmarking',
        img: FeatureTab1,
        heading: 'Bookmark in one click',
        description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        title: 'Speedy Searching',
        img: FeatureTab2,
        heading: 'Intelligent search',
        description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },{
        title: 'Easy Sharing',
        img: FeatureTab3,
        heading: 'Share your bookmarks',
        description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
]

function Features() {
    const [active, setActive] = useState(1)

    return (
        <>
        <div className='flex flex-col justify-center items-center text-[18px] mt-15'>
            <h2 className='text-3xl font-medium mb-3'>Features</h2>
            <p className='text-gray-500 text-center max-w-[535px] mx-auto'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>

        <section className='relative px-6 md:px-20 py-20'>
            {/* Tabs */}
            <div className='flex justify-center mb-20'>
                <div className='flex gap-10 relative'>
                    {features.map((feature, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`pb-4 hover:text-red-400 transition font-medium cursor-pointer w-[198px] ${
                                active === index 
                                ? 'border-b-4 border-red-400 text-blue-950'  
                                : 'border-b-4 border-transparent text-gray-500'
                            }`}
                        >
                            {feature.title}
                        </button>
                    ))}

                    {/* Línea inferior */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 -z-10"></div>
                </div>
            </div>

            {/* Forma curva */}
            <div className="absolute w-[800px] h-[400px] bg-blue-500 rounded-r-full left-[-5%] bottom-[-5%] z-0"></div>
            
            {/* Contenido */}
            <div className='flex flex-row items-center relative gap-35 px-40'>
                <img src={features[active].img} alt="" className='w-auto lg:w-1/2 flex justify-center'/>

                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h2 className='text-3xl font-medium text-blue-950 mb-4'>{features[active].heading}</h2>
                    <p className='text-gray-500 mb-6 text-[18px]'>{features[active].description}</p>

                    <button className='bg-blue-600 px-6 py-2 rounded-md text-white cursor-pointer hover:bg-white hover:text-blue-600 hover:border-2'>More Info</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Features