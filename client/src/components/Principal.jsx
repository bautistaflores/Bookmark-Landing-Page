import Tablet from "../assets/images/illustration-hero.svg";

function Principal() {
    return (
        <section className="relative overflow-hidden px-40 py-20">

            {/* Forma curva */}
            <div className="absolute w-[800px] h-[450px] bg-blue-500 rounded-l-full right-[-5%] bottom-[5%] z-0"></div>

            <div className="flex items-center justify-between z-10 relative flex-row gap-12">
                {/* Texto */}
                <div className="text-[18px] w-[40%]">
                    <h1 className="text-6xl font-medium mb-5 text-blue-950 leading-tight">A Simple BookMark <br/>Manager</h1>

                    <p className="text-gray-500">A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.</p>

                    <div className="flex gap-5 font-medium mt-8 flex-wrap">
                        <a href="" className="bg-blue-600 p-3 px-6 text-white rounded-md hover:bg-white hover:text-blue-600 hover:border-2">Get it on Chrome</a>
                        <a href="" className="bg-gray-50 p-3 px-6 text-gray-600 rounded-md shadow hover:border-2">Get it on Firefox</a>
                    </div>
                </div>

                {/* Imagen */}
                <div className="relative">
                    <img src={Tablet} alt="Tablet" className="w-[800px] h-auto"/>
                </div>

            </div>
        </section>

    );
}

export default Principal