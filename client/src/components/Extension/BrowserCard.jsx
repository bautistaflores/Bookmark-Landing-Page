function BrowserCard({ logo, title, version, line }) {
    return (
        <div className="flex flex-col justify-center items-center shadow-xl rounded-xl py-5">
            <img src={logo} alt={`Logo ${title}`} className='my-7'/>
            <h3 className='font-medium text-[22px] mb-2'>Add to {title}</h3>
            <p className='text-gray-500'>Minimum version {version}</p>
            <img src={line} alt="" className='my-7'/>
            <button className='bg-blue-600 px-10 py-3 text-white rounded-md cursor-pointer hover:border-2 hover:bg-white hover:text-blue-600'>
                Add & Install Extension
            </button>
        </div>
    );
}

export default BrowserCard;